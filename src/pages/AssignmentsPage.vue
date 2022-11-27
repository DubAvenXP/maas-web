<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: "AssignmentsPage",
});
</script>
<script setup>
import { onUnmounted } from "vue";
import MaasLoader from "src/components/maas-loader.vue";
import ServiceDropdown from "src/components/services/service-dropdown.vue";

import AssignmentPanel from "src/components/assignments/assignment-panel.vue";
import AssignmentGrid from "src/components/assignments/assignment-grid.vue";

import { useService } from "src/composables";

const { loading, serviceStore } = useService();

onUnmounted(() => {
    serviceStore.service = {};
});
</script>
<template>
    <q-page class="q-px-xl q-pt-md bg-accent">
        <div class="flex justify-between items-center">
            <h3 class="q-my-md">Asignaciones</h3>
            <service-dropdown endpoint="assignments" />
        </div>
        <q-separator color="gray" class="q-mb-lg" />
        <maas-loader v-if="loading" />
        <template v-else>
            <assignment-panel />
            <assignment-grid />
        </template>
    </q-page>
</template>
