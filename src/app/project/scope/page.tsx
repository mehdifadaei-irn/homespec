"use client"

import { Skeleton } from "@/components/ui-kit/shadcn/skeleton";
import PageTitle from "@/features/project/components/PageTitle";
import ProjectPageWrapper from "@/features/project/components/ProjectPageWrapper";
import { MemoizedProjectScopeItem } from "@/features/project/components/ProjectScopeItem";
import { useScopes } from "@/features/project/hooks/useScopes";
import { scopeParameters } from "@/features/project/types/scope.type";
import React, { ReactElement, useState } from "react";

const Scope = () => {
    const [targetScope, setTargetScope] = useState<number | null>();
    const { data, isLoading } = useScopes();

    const selectScope = (id: number) => {
        if (id === targetScope) {
            setTargetScope(null);
        } else {
            setTargetScope(id);
        }
    };

    return (
        <ProjectPageWrapper submit={() => { }}>
            <div className="max-w-[906px]">
                <PageTitle title="Select scope of your Project" />
                <div className="mt-28 flex justify-center gap-9">
                    {isLoading ? (
                        <Skeleton className="h-[168px] w-[168px] rounded-[10px]" />
                    ) : (
                        <>

                            {
                                //@ts-ignore
                                data?.map((scope: any) => (
                                    <MemoizedProjectScopeItem
                                        key={scope.id}
                                        title={scope.title}
                                        icon={
                                            scope.media["877c3729-713f-4045-95c7-85988bf7dbb9"]
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

export default Scope