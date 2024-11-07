import HBtn from "@/components/ui-kit/HBtn";
import React from "react";

const ProjectPageWrapper = ({
  children,
  submit,
  onClickBack,
  backTo,
  isLoading,
}: {
  children: React.ReactNode;
  submit: () => void;
  onClickBack?: () => void;
  backTo?: string;
  isLoading?: boolean;
}) => {
  return (
    <>
      <div className="w-full max-w-[calc(100%-350px)] pb-24">{children}</div>
      <div className="fixed bottom-0 right-0 z-50 w-[calc(100%-275.933px)] bg-white px-[74px] py-6 drop-shadow-[8px_0px_16px_#7070706B]">
        <div className="flex max-w-[906px] flex-row-reverse justify-between">
          <HBtn
            onClick={submit}
            variant="secondary"
            size="large"
            label="Next"
            loading={isLoading}
          />

          {(onClickBack || backTo) && (
            <HBtn
              onClick={onClickBack}
              variant="primary"
              styleType="outline"
              size="large"
              href={backTo}
              label="Back"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectPageWrapper;
