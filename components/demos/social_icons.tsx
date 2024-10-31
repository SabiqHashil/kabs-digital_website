import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandX,
    IconBrandYoutube,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
    const links = [
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Facebook",
            icon: (
                <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Youtube",
            icon: (
                <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "X",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },


    ];
    return (
        <div className="flex items-center space-x-4 justify-center">
            <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
        </div>
    );
}
