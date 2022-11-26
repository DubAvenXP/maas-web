<script setup>
import customHeaderVue from "src/shared/components/custom-header.vue";
import { useLayoutStore } from "./../stores/layout";

const layoutStore = useLayoutStore();

const links = [
    { name: "home", text: "Clientes", icon: "home", to: "/" },
    { name: "about", text: "Servicios", icon: "info", to: "/about" },
    {
        name: "contact",
        text: "Disponibilidades",
        icon: "contact_mail",
        to: "/contact",
    },
];
</script>

<template>
    <q-layout view="hHh Lpr lff">
        <custom-header-vue />
        <q-drawer v-model="layoutStore.leftDrawerOpen" show-if-above bordered>
            <q-scroll-area
                style="
                    height: calc(100% - 150px);
                    margin-top: 150px;
                    border-right: 1px solid #ddd;
                "
            >
                <q-list padding>
                    <q-item
                        clickable
                        v-ripple
                        v-for="link in links"
                        :key="link.name"
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
