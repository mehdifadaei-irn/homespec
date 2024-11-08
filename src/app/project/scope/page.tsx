"use client";

import { Skeleton } from "@/components/ui-kit/shadcn/skeleton";
import PageTitle from "@/features/project/components/PageTitle";
import ProjectPageWrapper from "@/features/project/components/ProjectPageWrapper";
import { MemoizedProjectScopeItem } from "@/features/project/components/ProjectScopeItem";
import { useScopes } from "@/features/project/hooks/useScopes";
import React, { useState } from "react";

const Scope = () => {
  const [targetScope, setTargetScope] = useState<string | null>();
  const { data, isLoading } = useScopes();

  const selectScope = (id: string) => {
    if (id === targetScope) {
      setTargetScope(null);
    } else {
      setTargetScope(id);
    }
  };

  return (
    <ProjectPageWrapper submit={() => {}}>
      <div className="max-w-[906px]">
        <PageTitle title="Select scope of your Project" />
        <div className="mt-28 flex justify-center gap-9">
          {isLoading ? (
            <Skeleton className="h-[168px] w-[168px] rounded-[10px]" />
          ) : (
            <>
              {data?.map((scope) => (
                <MemoizedProjectScopeItem
                  key={scope.id}
                  title={scope.title}
                  icon={
                    scope.media["85ae3a29-e38d-4fd1-9e2e-d1b85b87686c"]
                      ?.original_url
                  }
                  onClick={() => selectScope(scope.id)}
                  isActive={targetScope === scope.id}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </ProjectPageWrapper>
  );
};

export default Scope;
