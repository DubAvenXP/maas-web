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
            <q-toolbar-title>Monitoring as a Service</q-toolbar-title>
            <div>MaaS System v.0.0.0</div>
        </q-toolbar>
    </q-header>
</template>
