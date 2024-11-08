// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import LoadingProgress from "./LoadingProgress.js";
import TWEEN from "@tweenjs/tween.js";

const ThreeDCanvas = ({
  sideDataItemHovered,
  sideDataItemClicked,
  setSideDataItemClicked,
  setSideDataItemHovered,
  setSideDataList,
  setIs3dModal,
  is3dModal,
  // put an state for list
}) => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const firstLoad = useRef<boolean>(true);
  const selectMODE = useRef<boolean>(false);
  const modelRef = useRef<THREE.Object3D[]>([]); // Array of 3D models
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.Camera | null>(null);
  const cameraPersRef = useRef<THREE.PerspectiveCamera | null>(null);
  const cameraOrthoRef = useRef<THREE.OrthographicCamera | null>(null);
  const orbitRef = useRef<OrbitControls | null>(null);
  const modelPathRef = useRef<string>("");
  const firstPersonControl = useRef<FirstPersonControls | null>(null);
  const activeAddedModel = useRef<THREE.Object3D | null>(null); // Single 3D model reference
  const dragControlRef = useRef<DragControls | null>(null);
  const transformControlRef = useRef<TransformControls | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const originalMaterialsRef = useRef<
    Map<string, THREE.Material | THREE.Material[]>
  >(new Map());

  let rect: DOMRect | undefined;

  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModelLoaded, setIsModelLoaded] = useState<boolean>(false);

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const listMockData = [
    {
      comments: 7,
      name: "Porch",
      total: "2/12",
      val1: 7,
    },
    {
      comments: 11,
      name: "Entry",
      total: "2/12",
      val1: 10,
    },
  ];

  const init = () => {
    const width = canvasRef.current?.clientWidth || 800;
    const height = canvasRef.current?.clientHeight || 600;
    const aspect = width / height;

    cameraPersRef.current = new THREE.PerspectiveCamera(45, aspect, 0.1, 10000);
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
    renderer.current.setSize(width, height);
    renderer.current.setClearColor("#FFFFFF");
    renderer.current.shadowMap.enabled = true;
    renderer.current.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.current.physicallyCorrectLights = true;
    renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.current.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.current.toneMappingExposure = 1.2;
    canvasRef.current?.appendChild(renderer.current.domElement);

    rect = canvasRef.current?.getBoundingClientRect();

    const environment = new RoomEnvironment();

    const pmremGenerator = new THREE.PMREMGenerator(renderer.current);
    const environmentTexture = pmremGenerator.fromScene(environment).texture;
    environmentTexture.encoding = THREE.sRGBEncoding;
    sceneRef.current.environment = environmentTexture;
    sceneRef.current.background = new THREE.Color(0xffffff); // Optional: Set environment as background

    // const pmremGenerator = new THREE.PMREMGenerator(renderer.current);
    // sceneRef.current.background = new THREE.Color(0xFFFFFF);
    // sceneRef.current.environment = pmremGenerator.fromScene(environment).texture;

    // Lighting setup

    const light = new THREE.DirectionalLight(0xffffff, 1); // White light
    light.position.set(10, 10, 10); // Position the light to illuminate the scene
    sceneRef.current.add(light);

    // Optional: Add an ambient light to avoid too much darkness in shadowed areas
    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white light
    sceneRef.current.add(ambientLight);

    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    // ambientLight.castShadow = true;

    const gridHelper = new THREE.GridHelper(50, 50);
    gridHelper.position.set(0, 0, 0);
    // sceneRef.current.add(gridHelper);
    cameraPersRef.current.position.z = 5;

    orbitRef.current = new OrbitControls(
      cameraRef.current as THREE.Camera,
      renderer.current.domElement
    );
    orbitRef.current.enableDamping = true;
    orbitRef.current.dampingFactor = 0.09;
    orbitRef.current.target.set(0, 0, 0);
    orbitRef.current.screenSpacePanning = false;

    orbitRef.current.addEventListener("change", () => {
      // This function is called every time the controls are updated
      console.log("camera changed", cameraRef.current.position);
      console.log("camera  Rot changed", cameraRef.current.rotation);
      // You can add your custom code here
      // For example, re-rendering the scene if you're not using a render loop
    });

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(2.8871910572052, 0.61859530210495, 2.7134358882904053);

    const control = new TransformControls(
      cameraRef.current as THREE.Camera,
      renderer.current.domElement
    );
    control.addEventListener("dragging-changed", (event: any) => {
      if (orbitRef.current) orbitRef.current.enabled = !event.value;
    });

    transformControlRef.current = control;
    sceneRef.current.add(transformControlRef.current.getHelper());

    const pointLight = new THREE.DirectionalLight(0xffffff, 1);
    pointLight.position.set(10, 20, 10);
    pointLight.castShadow = true;

    const axesHelper = new THREE.AxesHelper(1000);
    axesHelper.position.set(0, 0, 0);
    // sceneRef.current.add(axesHelper);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.castShadow = true;
    directionalLight.position.set(-4, 6, 2);
    directionalLight.target.position.set(0, 0, 0);
    directionalLight.target.updateWorldMatrix();
    directionalLight.shadow.mapSize.set(2048, 2048);
    directionalLight.shadow.radius = 4;
    directionalLight.shadow.bias = -0.004;
    directionalLight.shadow.normalBias = 0.027;
    // sceneRef.current.add(directionalLight);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      TWEEN.update();

      if (orbitRef.current) orbitRef.current.update();
      renderer.current?.render(
        sceneRef.current as THREE.Scene,
        cameraRef.current as THREE.Camera
      );
    };

    animate();
  };

  const loadModel = (modelPath: string) => {
    setLoadingProgress(0);
    setIsLoading(true); // Start loading
    let estimatedProgress = 0;
    let progressInterval: NodeJS.Timeout | undefined;

    modelPathRef.current = modelPath;
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"); // or your custom path

    loader.setDRACOLoader(dracoLoader as DRACOLoader);

    loader.load(
      modelPath,
      (gltf) => {
        // Model load success
        clearInterval(progressInterval);

        if (modelRef.current) {
          sceneRef.current?.remove(modelRef.current);
        }

        console.log("data gltf", gltf);

        modelRef.current = gltf.scene;
        sceneRef.current?.add(gltf.scene);
        // initialStates.current.defaultModels = gltf.scene;
        // initialStates.current.objects = [];

        gltf.scene.children.forEach((item) => {
          // Store object states if needed
        });

        gltf.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (!child.name.includes("LOCK")) {
              // draggableList.push(mesh);
            }
            const material = mesh.material as THREE.MeshStandardMaterial;
            if (material.isMeshStandardMaterial) {
              mesh.castShadow = true;
              mesh.receiveShadow = true;
            }

            if (mesh.material) {
              originalMaterialsRef.current.set(mesh.uuid, mesh.material);
            }
          }
        });

        // console.log('draggableObjects model', draggableList);
        // setDraggableObjects(draggableList);

        setIsModelLoaded(true);
        cameraMode("orthographic");
        setLoadingProgress(100);
        setIsLoading(false); // Loading complete
      },
      (xhr) => {
        if (xhr.total > 0) {
          // Use actual progress if total size is available
          const percentComplete = (xhr.loaded / xhr.total) * 100;
          setLoadingProgress(Math.round(percentComplete));
        } else if (!progressInterval) {
          // Start fallback progress when xhr.total is zero and no interval is set
          progressInterval = setInterval(() => {
            estimatedProgress = Math.min(estimatedProgress + 5, 95);
            setLoadingProgress(estimatedProgress);
          }, 200);
        }
      },
      (error) => {
        console.error("An error happened", error);
        setIsLoading(false); // Loading complete
      }
    );

    if (!dragControlRef.current) {
      // dragControlRef.current = new DragControls(draggableList, cameraRef.current!, renderer.current!.domElement);
      // dragControlRef.current.addEventListener('dragstart', handleDragStart);
      // dragControlRef.current.addEventListener('drag', handleDrag);
      // dragControlRef.current.addEventListener('dragend', handleDragEnd);
      // dragControlRef.current.enabled = false;
    }
  };

  const cameraMode = (mode) => {
    const targetPosition = new THREE.Vector3(0, 0, 0); // Origin

    console.log("mode>>", mode);

    if (mode == "perspective") {
      cameraRef.current = cameraPersRef.current;
      cameraRef.current.position.set(0, 20, 0); // Above at 90 degrees
      cameraRef.current.lookAt(targetPosition);
      orbitRef.current.object = cameraRef.current;
      // cameraRef.current.up.set(0, 0, -1);
      // orbitRef.current.target.set(targetPosition.x/, targetPosition.y, targetPosition.z); // Ensure controls target is correct
      orbitRef.current.update();

      renderer.current.shadowMap.enabled = true; // Enable shadows
      sceneRef.current.traverse((object) => {
        if (object.isMesh) {
          object.castShadow = true;
          object.receiveShadow = true;
        }
      });
    } else if (mode == "orthographic") {
      cameraRef.current = cameraOrthoRef.current;
      // Adjust the frustum dimensions for zooming out
      const aspectRatio =
        canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      const frustumSize = 6; // Increase this value to zoom out

      cameraRef.current.left = -frustumSize * aspectRatio;
      cameraRef.current.right = frustumSize * aspectRatio;
      cameraRef.current.top = frustumSize;
      cameraRef.current.bottom = -frustumSize;

      cameraRef.current.position.set(0, 70, 0); // Above the model
      cameraRef.current.lookAt(targetPosition);
      cameraRef.current.updateProjectionMatrix();

      orbitRef.current.object = cameraRef.current;
      orbitRef.current.update();
      renderer.current.shadowMap.enabled = false; // Disable shadows
      sceneRef.current.traverse((object) => {
        if (object.isMesh) {
          object.castShadow = false;
          object.receiveShadow = false;
        }
      });
    }
  };

  function moveCameraToGroup(group) {
    // Calculate the bounding box of the group
    const box = new THREE.Box3().setFromObject(group);

    // Get the center of the bounding box
    const center = new THREE.Vector3();
    box.getCenter(center);

    console.log("center", group.name, center);
    // Position the camera above the group
    const distanceAbove = box.getSize(new THREE.Vector3()).y;
    const targetPosition = center
      .clone()
      .add(new THREE.Vector3(0, distanceAbove * 3, 0)); // Adjust distance as needed

    // Move the camera to this new position using Tween.js
    const cameraStart = cameraRef.current.position.clone();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(cameraStart.x, cameraStart.y, cameraStart.z);
    // sceneRef.current.add(cube);

    // console.log('currect cam',cameraStart)
    console.log("targetPosition", group.name, targetPosition);

    const geometry2 = new THREE.BoxGeometry(1, 1, 1);
    const material2 = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const cube2 = new THREE.Mesh(geometry2, material2);
    cube2.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
    // sceneRef.current.add(cube2);

    new TWEEN.Tween(cameraStart)
      .to(
        { x: targetPosition.x, y: targetPosition.y, z: targetPosition.z },
        1000
      )
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(() => {
        cameraRef.current.position.copy(cameraStart);
        cameraRef.current.lookAt(center);
        orbitRef.current.target.copy(center);

        // orbitRef.current.target.set(center)
      })
      .start();

    cameraRef.current.rotation.set(-Math.PI / 2, 0, 0);
  }

  const restoreOriginalMaterial = () => {
    // Restore the original material from the stored reference
    modelRef.current?.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const originalMaterial = originalMaterialsRef.current.get(mesh.uuid);
        if (originalMaterial) {
          mesh.material = originalMaterial;
        }
      }
    });
  };

  const resetGroupMaterial = () => {
    sceneRef.current.traverse((child) => {
      if (child.isMesh && child.userData.originalEmissive) {
        // Restore the original emissive color
        child.material.emissive.copy(child.userData.originalEmissive);
        // Optionally clear the saved original emissive
        delete child.userData.originalEmissive;
      }
    });
  };

  const onGroupHover = (item) => {
    console.log("group hover function  >>>", item);

    const group = sceneRef.current.getObjectByName(item);
    if (group) {
      group.traverse((child) => {
        if (child.isMesh) {
          child.userData.originalEmissive = child.material.emissive.clone();
          child.material.emissive.setHex(0xd7a627);
        }
      });
      setSideDataItemHovered(item);
    } else {
      console.warn("Group not found in the scene.");
    }
  };
  const onGroupSelect = (item) => {
    console.log("group click selected >>>", item);

    let selectedGroup;

    // Make the material look more glass-like for the hidden objects
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x999999,
      metalness: 0.1,
      roughness: 0.1,
      transparent: true,
      opacity: 0.5,
      transmission: 0.9, // Controls how much light passes through
      ior: 1.5, // Index of refraction, gives the glass effect
      reflectivity: 0.2,
    });

    const i = 0;
    sceneRef.current.children.map((el) => {
      if (el.type === "Group") {
        el.children.map((gr) => {
          if (gr.name === item) {
            // console.log('groups to select in scene',gr)
            selectedGroup = gr;

            gr.traverse((child) => {
              if (child.type === "Group") {
                child.traverse((subchild) => {
                  if (subchild.isMesh) {
                    // console.log('name blue',subchild.name,i++)
                    // Reset the material of the active group to its original state
                    // subchild.material.color.set(0x0099CC)
                    // subchild.material.transparent = false;
                    // subchild.material.opacity = 1;

                    subchild.visible = true;
                  }
                });
              }
              if (child.isMesh) {
                // console.log('name blue', child.name, i++)

                // Reset the material of the active group to its original state
                // child.material.color.set(0x0099CC)
                // child.material.transparent = false;
                // child.material.opacity = 1;
                child.visible = true;
              }
            });
          } else {
            // For all other groups, make their materials transparent or hidden
            gr.traverse((child) => {
              if (child.isMesh) {
                // Make the material transparent like glass
                // child.material = glassMaterial;
                // child.material.transparent = true;
                child.visible = false;
                // child.material.opacity = 0.1;  // Adjust this value for more/less transparency
              }
            });
          }
        });
      }
    });

    if (selectedGroup) {
      moveCameraToGroup(selectedGroup);
      restoreOriginalMaterial();
    }
  };

  const updateState = (state) => {
    setSideDataList(state);
  };
  const onMouseMove = (event) => {
    console.log("onMouseMove");
    // event.preventDefault();

    // تعیین موقعیت موس در صفحه
    // mouse.x = ( event.clientX / canvasRef.current.clientWidth ) * 2 - 1;
    // mouse.y = - ( event.clientY / canvasRef.current.clientHeight ) * 2 + 1;

    rect = canvasRef.current.getBoundingClientRect();

    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // تشخیص این که آیا گروه روی موس است یا خیر
    raycaster.setFromCamera(mouse, cameraRef.current);

    const intersects = raycaster.intersectObjects(
      sceneRef.current.children,
      true
    );

    if (intersects.length > 0) {
      const intersectedGroup = intersects.find(
        (intersect) => intersect.object.parent.type === "Group"
      );
      if (intersectedGroup) {
        // استایل یا رویداد مورد نظر خود را اینجا اعمال کنید
        resetGroupMaterial();
        onGroupHover(intersectedGroup.object.parent.name);
        console.log("Hovered over Group:", intersectedGroup.object.parent.name);
      }
    } else {
      console.log("intersects lenght is 0");
      resetGroupMaterial();
    }
  };

  function onResize() {
    const aspectRatio =
      canvasRef.current.clientWidth / canvasRef.current.clientHeight;
    cameraRef.current.left = -aspectRatio * 10;
    cameraRef.current.right = aspectRatio * 10;
    cameraRef.current.top = 10;
    cameraRef.current.bottom = -10;
    cameraRef.current.updateProjectionMatrix();

    // cameraRef.current.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
    // cameraRef.current.updateProjectionMatrix();
    renderer.current.setSize(
      canvasRef.current.clientWidth,
      canvasRef.current.clientHeight
    );
    rect = canvasRef.current.getBoundingClientRect();
  }

  useEffect(() => {
    console.log("useefect");
    if (firstLoad.current === true) {
      init();
      loadModel("/Dark.glb");
      // canvasRef.current.addEventListener('click', onMouseClick);
      // canvasRef.current.addEventListener('mousedown', onMouseDown);
      // canvasRef.current.addEventListener('dblclick', onDoubleClick, false);
    }
    firstLoad.current = false;

    window.addEventListener("resize", onResize, false);

    canvasRef.current.addEventListener("mousemove", onMouseMove);
    return () => {
      canvasRef.current.removeEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", onResize, false);
    };
    // Cleanup function to remove the event listener
    // return () => {
    //     if (canvasRef.current) {
    //         canvasRef.current.removeEventListener('click', onMouseClick); // Clean up the listener on unmount
    //     }
    //     if (dragControlRef.current) {
    //         dragControlRef.current.removeEventListener('dragstart', handleDragStart);
    //         dragControlRef.current.removeEventListener('drag', handleDrag);
    //         dragControlRef.current.removeEventListener('dragend', handleDragEnd);
    //         dragControlRef.current.dispose(); // Dispose of DragControls instance if necessary
    //     }
    // };
  }, []);

  useEffect(() => {
    console.log("isloadmodel", modelRef.current);
    if (isModelLoaded) {
      const test = modelRef.current.children.map((el) => {
        if (el.type === "Group") {
          console.log("groups to send", el);
          return { name: el.name, id: el.uuid };
        }
      });
      console.log("test setSideDataList", test);
      setSideDataList(test);
    }
  }, [isModelLoaded]);

  useEffect(() => {
    console.log("sideitemhover", sideDataItemHovered);

    if (sideDataItemHovered === null) {
      resetGroupMaterial();
    } else {
      resetGroupMaterial();
      onGroupHover(sideDataItemHovered);
    }
  }, [sideDataItemHovered]);

  useEffect(() => {
    console.log("sideDataItemClicked", sideDataItemClicked);
    onGroupSelect(sideDataItemClicked);
  }, [sideDataItemClicked]);

  return (
    <div
      className="flex flex-col gap-y-2"
      style={{ backgroundColor: "#BBE9FF", height: "80vh" }}
      ref={canvasRef}
    >
      {/* Loading overlay - only displayed when loading */}
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <LoadingProgress progress={loadingProgress} />
        </div>
      )}
    </div>
  );
};

export default ThreeDCanvas;
