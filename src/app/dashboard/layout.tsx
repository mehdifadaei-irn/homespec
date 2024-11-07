"use client"
import React, { PropsWithChildren } from 'react'
import AppLogo from "@/components/AppLogo";
import HBtn from "@/components/ui-kit/HBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppRoutes } from '@/constants/app-routes';

const routes = [
    {
        route: AppRoutes.dashboardPage,
        name: "Dashboard",
    },
    {
        route: AppRoutes.dashboardPlan,
        name: "Plan",
    },
    {
        route: AppRoutes.dashboardMaterialList,
        name: "Material List",
    },
    {
        route: AppRoutes.dashboardNotesTasks,
        name: "Notes & Tasks",
    },
    {
        route: AppRoutes.dashboardMessagesContacts,
        name: "Messages & Contacts",
    },
    {
        route: AppRoutes.dashboardBidRoom,
        name: "Bid Room",
    },
    {
        route: AppRoutes.dashboardProjectDocument,
        name: "Project Document",
    },
];

const dashboardlayout = ({ children }: PropsWithChildren) => {
    const pathName = usePathname()

    return (
        <div className="flex gap-16">
            <aside className="fixed flex h-full flex-col justify-between bg-primary pb-8 pl-14 pt-6">
                <div className="flex flex-col gap-y-12">
                    <AppLogo className="[&>a]:text-white" />
                    <div>
                        <h1 className="mb-7 text-2xl/6 font-medium text-white">
                            House Project <br />
                            Wizard
                        </h1>
                        <ul className="flex flex-col gap-2">
                            {routes.map((nav, index) => (
                                <li
                                    key={index}
                                    className={`${nav.route === pathName ? "bg-white text-tundora" : "text-[#B3B3B3] hover:text-white"} flex rounded-tl-[0.625rem] transition-colors`}
                                >
                                    <Link className="w-full py-2 pl-9 pr-14" href={nav.route}>
                                        {nav.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <HBtn
                    className="mr-14 justify-end"
                    label="Back To Home"
                    variant="primary"
                    styleType="outline"
                />
            </aside>

            <main className="mt-16 flex w-full justify-end">{children}</main>
        </div>
    );
}

export default dashboardlayout