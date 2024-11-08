/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

"use client";

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
// import TWEEN from 'https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.5.0/dist/tween.esm.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DragControls } from "three/addons/controls/DragControls.js";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const Page3D: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const firstLoad = useRef(true);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.Camera | null>(null);
  const cameraPersRef = useRef<THREE.PerspectiveCamera | null>(null);
  const cameraOrthoRef = useRef<THREE.OrthographicCamera | null>(null);
  const orbitRef = useRef<OrbitControls | null>(null);
  const modelPathRef = useRef<string>("");
  const modelRef = useRef([]);

  const transparencyModel = useRef<string>(
    "./3D/mainModels/With transparency.glb"
  );
  const noTransparencyModel = useRef<string>(
    "./3D/mainModels/Without transparency.glb"
  );

  const firstPersonControl = useRef<any>(null);
  const activeAddedModel = useRef<any>(null);
  const dragControlRef = useRef<DragControls | null>(null);
  const transformControlRef = useRef<TransformControls | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);

  console.log("Three", THREE);

  const init = () => {
    const width = canvasRef.current?.clientWidth;
    const height = canvasRef.current?.clientHeight;
    const aspect = width / height;

    cameraPersRef.current = new THREE.PerspectiveCamera(45, aspect, 0.01, 5000);
    cameraRef.current = cameraPersRef.current;

    sceneRef.current = new THREE.Scene();
    cameraOrthoRef.current = new THREE.OrthographicCamera(
      -1 * aspect,
      1 * aspect,
      1,
      -1,
      0.1,
      1000
    );

    renderer.current = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.current.setSize(
      canvasRef.current.clientWidth,
      canvasRef.current.clientHeight
    );
    renderer.current.setClearColor("#BBE9FF");
    renderer.current.shadowMap.enabled = true;
    renderer.current.shadowMap.type = THREE.PCFSoftShadowMap; // Use soft shadows
    renderer.current.physicallyCorrectLights = true;
    renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.current.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.current.toneMappingExposure = 1.5;

    if (canvasRef.current) {
      canvasRef.current.appendChild(renderer.current.domElement);
    }
    const environment = new RoomEnvironment();
    const pmremGenerator = new THREE.PMREMGenerator(renderer.current);
    sceneRef.current.background = new THREE.Color(0xbbbbbb);
    sceneRef.current.environment = pmremGenerator.fromScene(
      environment
    ).texture;
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    ambientLight.castShadow = true;
    // sceneRef.current.add(ambientLight);

    // const pointLight = new THREE.PointLight(0xffffff, 1);
    // pointLight.position.set(10, 10, 10);
    // scene.add(pointLight);

    const gridHelper = new THREE.GridHelper(50, 50);
    gridHelper.position.set(0, 0, 0);
    // sceneRef.current.add(gridHelper);
    cameraPersRef.current.position.z = 5;
    orbitRef.current = new OrbitControls(
      cameraRef.current,
      renderer.current.domElement
    );
    orbitRef.current.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    orbitRef.current.dampingFactor = 0.09;
    orbitRef.current.target.set(0, 0, 0);
    orbitRef.current.screenSpacePanning = false;
    // orbitRef.current.maxPolarAngle = Math.PI / 2;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

    const control = new TransformControls(
      cameraRef.current,
      renderer.current.domElement
    );
    // control.addEventListener( 'change', animate );
    control.addEventListener("dragging-changed", function(event) {
      if (orbitRef.current) {
        orbitRef.current.enabled = !event.value;
      }
    });

    transformControlRef.current = control;

    const pointLight = new THREE.DirectionalLight(0xffffff, 1);
    pointLight.position.set(10, 20, 10);
    pointLight.castShadow = true;
    // pointLight.shadow.mapSize.width = 4096;  // Higher resolution shadow map
    // pointLight.shadow.mapSize.height = 4096;
    // sceneRef.current.add(pointLight);
    const axesHelper = new THREE.AxesHelper(1000);
    axesHelper.position.set(0, 0, 0);
    // sceneRef.current.add(axesHelper);
    const fillLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.4);
    // sceneRef.current.add(fillLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    // directionalLight.shadow.camera.far = 15;
    // directionalLight.position.set(0, 10, -5);
    // directionalLight.position.set(-4, 6.5, 2.5);
    // directionalLight.shadow.mapSize.set(1024, 1024)
    // directionalLight.scale.set(200,200,200);
    directionalLight.castShadow = true; // Enable shadows for the light source
    // directionalLight.target.position.set(0, 4, 0)
    directionalLight.position.set(-4, 6, 2); // Experiment with different positions
    directionalLight.target.position.set(0, 0, 0);
    directionalLight.target.updateWorldMatrix();
    directionalLight.shadow.mapSize.set(2048, 2048); // Increase for better quality
    directionalLight.shadow.radius = 4; // Increase to soften shadows
    // // Configure shadow camera to properly enclose the scene
    // directionalLight.shadow.camera.left = -10;
    // directionalLight.shadow.camera.right = 10;
    // directionalLight.shadow.camera.top = 10;
    // directionalLight.shadow.camera.bottom = -10;
    // directionalLight.shadow.camera.near = 0.1;
    // directionalLight.shadow.camera.far = 50;
    // // Small shadow bias to avoid shadow acne
    directionalLight.shadow.bias = -0.004;
    // Adjust the shadow frustum to avoid shadow extension and incorrect placement
    directionalLight.shadow.normalBias = 0.027; // Helps with fixing Peter Panning issue
    sceneRef.current.add(directionalLight);
    const directionalLightCameraHelper = new THREE.CameraHelper(
      directionalLight.shadow.camera
    );
    // sceneRef.current.add(directionalLightCameraHelper)

    const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
    // sceneRef.current.add(helper);
    const clock = new THREE.Clock();
    const animate = () => {
      console.log("animate");
      requestAnimationFrame(animate);
      // TWEEN.update()

      const direction = new THREE.Vector3(); // To calculate direction of movement
      renderer.current?.render(
        sceneRef.current as THREE.Scene,
        cameraRef.current as THREE.Camera
      );
    };
    animate();
  };

  const loadModel = (modelPath: string) => {
    modelPathRef.current = modelPath;

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf: THREE.GLTF) => {
        if (modelRef.current) {
          sceneRef.current?.remove(modelRef.current);
        }

        console.log("data gltf", gltf);

        modelRef.current = gltf.scene;
        sceneRef.current?.add(gltf.scene);

        gltf.scene.children.forEach((item) => {});

        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            if (child.name.includes("LOCK") === false) {
              // draggableList.push(child);
            }
            if (child.material.isMeshStandardMaterial) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          }
        });

        // console.log('draggableObjects model', draggableList)
        // setDraggableObjects(draggableList)
        // setIsModelLoaded(true)
      },
      undefined,
      (error) => {
        console.error("An error happened", error);
      }
    );

    // if (!dragControlRef.current) {
    //     dragControlRef.current = new DragControls(draggableList, cameraRef.current, renderer.current.domElement);
    //     dragControlRef.current.addEventListener('dragstart', handleDragStart);
    //     dragControlRef.current.addEventListener('drag', handleDrag);
    //     dragControlRef.current.addEventListener('dragend', handleDragEnd);
    //     dragControlRef.current.enabled=false
    // }
  };

  useEffect(() => {
    console.log("useefect");
    if (firstLoad.current === true) {
      init();
      loadModel(transparencyModel.current);
    }
    firstLoad.current = false;

    // Cleanup function to remove the event listener
    return () => {};
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{ display: "flex", height: "60vh", width: "100%", zIndex: 1 }}
    ></div>
  );
};

export default Page3D;
