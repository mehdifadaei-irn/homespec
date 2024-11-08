"use client"
import { HTab, HTabItem } from "@/components/ui-kit/HTab";

import PageTitle from "@/features/project/components/PageTitle";
import ProjectDetailsCard from "@/features/project/components/ProjectDetailsCard";
import ProjectDetailsList from "@/features/project/components/ProjectDetailsList";
import ProjectPageWrapper from "@/features/project/components/ProjectPageWrapper";
import React, { ReactElement } from "react";

const Details = () => {
    const SummerList = [
        { title: "Surface", value: "105", metric: "M2" },
        { title: "Perimeter", value: "201", metric: "M2" },
        { title: "Floors", value: "2" },
        { title: "Doors", value: "23" },
        { title: "Windows", value: "16" },
        { title: "Porch", value: "1" },
        { title: "Garage", value: "1" },
    ];

    const projectDetails = [
        {
            id: "example-1",
            value: "358.32",
            formatted_value: "358.32 m2",
            project_floor_id: "123",
            key: {
                title: "Ground Surface without walls",
                description: "lorem ipsum dolor sit amet",
                value_type: "text",
                value_unit: "m2",
            },
        },
        {
            id: "example-2",
            value: "420.50",
            formatted_value: "420.50 m2",
            project_floor_id: "124",
            key: {
                title: "Total Floor Area",
                description: "lorem ipsum dolor sit amet",
                value_type: "text",
                value_unit: "m2",
            },
        },
        {
            id: "example-3",
            value: "12.00",
            formatted_value: "12.00 m",
            project_floor_id: "125",
            key: {
                title: "Ceiling Height",
                description: "lorem ipsum dolor sit amet",
                value_type: "text",
                value_unit: "m",
            },
        },
        {
            id: "example-4",
            value: "50",
            formatted_value: "50 units",
            project_floor_id: "126",
            key: {
                title: "Number of Windows",
                description: "lorem ipsum dolor sit amet",
                value_type: "number",
                value_unit: "units",
            },
        },
        {
            id: "example-5",
            value: "30",
            formatted_value: "30 units",
            project_floor_id: "127",
            key: {
                title: "Number of Doors",
                description: "lorem ipsum dolor sit amet",
                value_type: "number",
                value_unit: "units",
            },
        },
        {
            id: "example-6",
            value: "5",
            formatted_value: "5 units",
            project_floor_id: "128",
            key: {
                title: "Number of Floors",
                description: "lorem ipsum dolor sit amet",
                value_type: "number",
                value_unit: "units",
            },
        },
        {
            id: "example-7",
            value: "100.00",
            formatted_value: "100.00 m2",
            project_floor_id: "129",
            key: {
                title: "Garage Size",
                description: "lorem ipsum dolor sit amet",
                value_type: "text",
                value_unit: "m2",
            },
        },
        {
            id: "example-8",
            value: "80.00",
            formatted_value: "80.00 m2",
            project_floor_id: "130",
            key: {
                title: "Porch Area",
                description: "lorem ipsum dolor sit amet",
                value_type: "text",
                value_unit: "m2",
            },
        },
        {
            id: "example-9",
            value: "15",
            formatted_value: "15 units",
            project_floor_id: "131",
            key: {
                title: "Number of Bedrooms",
                description: "lorem ipsum dolor sit amet",
                value_type: "number",
                value_unit: "units",
            },
        },
        {
            id: "example-10",
            value: "10",
            formatted_value: "10 units",
            project_floor_id: "132",
            key: {
                title: "Number of Bathrooms",
                description: "lorem ipsum dolor sit amet",
                value_type: "number",
                value_unit: "units",
            },
        },
        {
            id: "example-11",
            value: "25",
            formatted_value: "25 m",
            project_floor_id: "133",
            key: {
                title: "Garden Length",
                description: "lorem ipsum dolor sit amet",
                value_type: "text",
                value_unit: "m",
            },
        },
        {
            id: "example-12",
            value: "15",
            formatted_value: "15 m",
            project_floor_id: "134",
            key: {
                title: "Garden Width",
                description: "lorem ipsum dolor sit amet",
                value_type: "text",
                value_unit: "m",
            },
        },
        {
            id: "example-13",
            value: "60",
            formatted_value: "60 m2",
            project_floor_id: "135",
            key: {
                title: "Balcony Area",
                description: "lorem ipsum dolor sit amet",
                value_type: "text",
                value_unit: "m2",
            },
        },
        {
            id: "example-14",
            value: "200.00",
            formatted_value: "200.00 m2",
            project_floor_id: "136",
            key: {
                title: "Living Room Area",
                description: "lorem ipsum dolor sit amet",
                value_type: "text",
                value_unit: "m2",
            },
        },
        {
            id: "example-15",
            value: "150.00",
            formatted_value: "150.00 m2",
            project_floor_id: "137",
            key: {
                title: "Kitchen Area",
                description: "lorem ipsum dolor sit amet",
                value_type: "text",
                value_unit: "m2",
            },
        },
        {
            id: "example-16",
            value: "75.00",
            formatted_value: "75.00 m2",
            project_floor_id: "138",
            key: {
                title: "Dining Room Area",
                description: "lorem ipsum dolor sit amet",
                value_type: "text",
                value_unit: "m2",
            },
        },
    ];

    return (
        <ProjectPageWrapper submit={() => { }} backTo="/project/plan">
            <div className="max-w-[906px]">
                <PageTitle title="Here you can see your project detailed material list, if you want to add/delete any part you  can do it here or later in your project page" />
            </div>
            <div className="mt-6">
                <HTab defaultValue="summery">
                    <HTabItem label="Summery" value="summery">
                        <div className="max-w-[906px]">
                            <div className="text-lg font-bold text-black">Statistics</div>
                            <div className="mt-6 flex gap-x-8">
                                {SummerList.map((item, i) => (
                                    <>
                                        <div key={i} className="flex flex-col items-center">
                                            <span className="text-lg text-black-80">
                                                {item.title}
                                            </span>

                                            <span className="mt-3 text-2xl font-bold text-black-80">
                                                {item.value}
                                            </span>
                                            {item.metric && (
                                                <span className="mt-2 text-xs font-light">
                                                    {item.metric}
                                                </span>
                                            )}
                                        </div>
                                        {i !== SummerList.length - 1 && (
                                            <div className="h-auto w-px bg-gray-300"></div>
                                        )}
                                    </>
                                ))}
                            </div>

                            <ProjectDetailsList list={projectDetails} title="Surface" />
                        </div>
                    </HTabItem>
                    <HTabItem label="Ground Floor" value="ground-floor">
                        <ProjectDetailsList list={projectDetails} title="Surface" />
                    </HTabItem>
                    <HTabItem label="1st Floor" value="first-floor">
                        <>
                            <ProjectDetailsList list={projectDetails} title="Surface" />
                            <div className="mt-11 flex max-w-5xl flex-col gap-3">
                                <div className="text-lg font-bold text-black">Spaces:</div>
                                <div className="flex flex-wrap gap-x-8 gap-y-11">
                                    <ProjectDetailsCard />
                                    <ProjectDetailsCard />
                                    <ProjectDetailsCard />
                                    <ProjectDetailsCard />
                                    <ProjectDetailsCard />
                                    <ProjectDetailsCard />
                                </div>
                            </div>
                        </>
                    </HTabItem>
                </HTab>
            </div>
        </ProjectPageWrapper>
    );
};

export default Details;