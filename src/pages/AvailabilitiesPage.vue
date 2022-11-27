<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "AvailabilitiesPage",
});
</script>
<script setup>
import { onUnmounted } from "vue";

import MaasLoader from "src/components/maas-loader.vue";
import ServiceDropdown from "src/components/services/service-dropdown.vue";

import AvailabilityPanel from "src/components/availabilities/availability-panel.vue";
import AvailabilityGrid from "src/components/availabilities/availability-grid.vue";

import { useService } from "src/composables";

const { loading, serviceStore } = useService();

onUnmounted(() => {
    serviceStore.service = {};
});
</script>
<template>
    <q-page class="q-px-xl q-pt-md bg-accent">
        <div class="flex justify-between items-center">
            <h3 class="q-my-md">Disponibilidades</h3>
            <service-dropdown endpoint="availabilities" />
        </div>

        <q-separator color="gray" class="q-mb-lg" />

        <maas-loader v-if="loading" />

        <template v-else>
            <availability-panel />
            <availability-grid />
        </template>
    </q-page>
</template>
