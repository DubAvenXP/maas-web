<script setup>
import { useLayoutStore } from "src/stores/default";

const layoutStore = useLayoutStore();
</script>
<template>
    <q-header elevated>
        <q-toolbar>
            <q-btn
                flat
                dense
                round
                icon="menu"
                aria-label="Menu"
                @click="layoutStore.toggleLeftDrawer"
            />
            <q-toolbar-title> Quasar App </q-toolbar-title>
            <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
    </q-header>
</template>
