<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "AvailabilitiesPage",
});
</script>
<script setup>
import MaasLoader from "src/components/maas-loader.vue";
import ServiceDropdown from "src/components/services/service-dropdown.vue";

import AvailabilityPanel from "src/components/availabilities/availability-panel.vue";

import { useAvailability, useService } from "src/composables";

const { service, loading } = useService();
</script>
<template>
    <q-page class="q-px-xl q-pt-md bg-accent">
        <div class="flex justify-between items-center">
            <h3 class="q-my-md">Disponibilidades</h3>
            <service-dropdown />
        </div>

        <q-separator color="gray" class="q-mb-lg" />

        <maas-loader v-if="loading" />

        <template v-else>
            <availability-panel />
        </template>
    </q-page>
</template>
