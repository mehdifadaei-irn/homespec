import React, { PropsWithChildren } from 'react'

import ProjectLayout from '@/components/layouts/ProjectLayout';

const layout = ({ children }: PropsWithChildren) => {

    return (
        <ProjectLayout>
            {children}
        </ProjectLayout>
    );
}

export default layout