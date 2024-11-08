"use client"
import ProjectPageWrapper from "@/features/project/components/ProjectPageWrapper";
import UploadPlanTemplate from "@/features/project/components/UploadPlanTemplate";
import { useGoToPrevStep } from "@/features/project/hooks/useGoToPrevStep";
import React, { ReactElement, useCallback, useRef, useState } from "react";


const Plan = () => {
    const { goToPrevStep } = useGoToPrevStep();
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const cameraInputRef = useRef<HTMLInputElement>(null);

    const handleApproachSelect = useCallback((id: number | null) => {
        if (id === 1) {
            triggerFileUpload();
        } else if (id === 2) {
            triggerCameraCapture();
        }
    }, []);

    const handleImageChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => setImage(reader.result as string);
                reader.readAsDataURL(file);
            }
        },
        [],
    );

    const triggerFileUpload = () => fileInputRef.current?.click();
    const triggerCameraCapture = () => cameraInputRef.current?.click();

    return (
        <ProjectPageWrapper
            submit={() => { }}
            onClickBack={() => goToPrevStep("/project/scope")}
        >
            <div className="max-w-[906px]">
                <UploadPlanTemplate onSelectApproach={handleApproachSelect} />

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                />

                <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={handleImageChange}
                    ref={cameraInputRef}
                    style={{ display: "none" }}
                />

                {image && (
                    <img src={image} alt="Uploaded Preview" className="preview-image" />
                )}
            </div>
        </ProjectPageWrapper>
    );
};

export default Plan;
