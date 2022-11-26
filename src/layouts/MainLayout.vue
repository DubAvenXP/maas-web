<script setup>
import customHeaderVue from "src/shared/components/custom-header.vue";
import { useLayoutStore } from "./../stores/layout";

const layoutStore = useLayoutStore();

const scrollAreaStyles = {
    height: "calc(100% - 150px)",
    marginTop: "150px",
    borderRight: "1px solid #ddd",
};

const links = [
    {
        name: "home",
        text: "Home",
        icon: "home",
        to: "/",
    },
    {
        name: "assignments",
        text: "Asignaciones",
        icon: "assignment",
        to: "/assignments",
    },
    {
        name: "availabilities",
        text: "Disponibilidades",
        icon: "calendar_today",
        to: "/availabilities",
    },
    {
        name: "clients",
        text: "Clientes",
        icon: "people",
        to: "/clients",
    },
    {
        name: "services",
        text: "Servicios",
        icon: "local_offer",
        to: "/services",
    },
    {
        name: "users",
        text: "Usuarios",
        icon: "person",
        to: "/users",
    },
];
</script>

<template>
    <q-layout view="hHh Lpr lff">
        <custom-header-vue />
        <q-drawer v-model="layoutStore.leftDrawerOpen" show-if-above bordered>
            <q-scroll-area :style="scrollAreaStyles">
                <q-list padding>
                    <q-item
                        clickable
                        v-ripple
                        v-for="link in links"
                        :key="link.name"
                        :to="link.to"
                    >
                        <q-item-section avatar>
                            <q-icon :name="link.icon" />
                        </q-item-section>
                        <q-item-section> {{ link.text }} </q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>

            <q-img
                class="absolute-top"
                src="https://cdn.quasar.dev/img/material.png"
                style="height: 150px"
            >
                <div class="absolute-bottom bg-transparent">
                    <q-avatar size="56px" class="q-mb-sm">
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    </q-avatar>
                    <div class="text-weight-bold">Razvan Stoenescu</div>
                    <div>@rstoenescu</div>
                </div>
            </q-img>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
