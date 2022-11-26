const routes = [
    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            {
                path: "/",
                name: "home",
                component: () => import("pages/IndexPage.vue"),
            },
            {
                path: "/assignments",
                name: "assignments",
                component: () => import("pages/AssignmentsPage.vue"),
            },
            {
                path: "/availabilities",
                name: "availabilities",
                component: () => import("pages/AvailabilitiesPage.vue"),
            },
            {
                path: "/clients",
                name: "clients",
                component: () => import("pages/ClientsPage.vue"),
            },
            {
                path: "/services",
                name: "services",
                component: () => import("pages/ServicesPage.vue"),
            },
            {
                path: "/users",
                name: "users",
                component: () => import("pages/UsersPage.vue"),
            },
        ],
    },

    {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue"),
    },
];

export default routes;
