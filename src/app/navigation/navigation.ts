import { FuseNavigation } from "@fuse/types";

export const navigation: FuseNavigation[] = [
    {
        id: "applications",
        title: "Applications",
        translate: "NAV.APPLICATIONS",
        type: "group",
        children: [
            {
                id: "Search",
                title: "Search",
                translate: "NAV.SEARCH.TITLE",
                type: "item",
                icon: "search",
                url: "/sample",
                badge: {
                    title: "25",
                    translate: "NAV.SEARCH.BADGE",
                    bg: "#F44336",
                    fg: "#FFFFFF",
                },
            },
            {
                id: "Create",
                title: "Create",
                translate: "NAV.CREATE.TITLE",
                type: "item",
                icon: "create",
                url: "/home/create-patient",
            },
            {
                id: "Login",
                title: "Login",
                translate: "NAV.LOGIN.TITLE",
                type: "item",
                icon: "face",
                url: "auth/login-2",
            },
        ],
    },
];
