// UploadPlanTemplate.tsx
import React, { useCallback } from "react";
import PageTitle from "./PageTitle";
import { MemoizedProjectScopeItem } from "./ProjectScopeItem";

const uploadApproaches = [
  { title: "Upload", id: 1, icon: "/icons/media/upload.svg" },
  { title: "Use Camera", id: 2, icon: "/icons/media/camera.svg" },
];

const UploadPlanTemplate = ({ onSelectApproach }) => {
  const [targetApproach, setTargetApproach] = React.useState<number | null>(
    null,
  );

  const selectApproach = useCallback(
    (id: number) => {
      const newTarget = id === targetApproach ? null : id;
      setTargetApproach(newTarget);
      onSelectApproach(newTarget);
    },
    [targetApproach, onSelectApproach],
  );

  return (
    <>
      <PageTitle title="How do you want to add your plan?" />
      <div className="mt-28 flex justify-center gap-9">
        {uploadApproaches.map((approach) => (
          <MemoizedProjectScopeItem
            key={approach.id}
            title={approach.title}
            onClick={() => selectApproach(approach.id)}
            icon={approach.icon}
            isActive={targetApproach === approach.id}
          />
        ))}
      </div>
    </>
  );
};

export default UploadPlanTemplate;

export const MemoizedUploadPlanTemplate = React.memo(UploadPlanTemplate);
