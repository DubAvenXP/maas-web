<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "ClientsPage",
});
</script>
<script setup>
import MaasLoader from "src/components/maas-loader.vue";
import ClientGrid from "src/components/clients/client-grid.vue";
import { useClient } from "src/composables";

const { clients, loading } = useClient();
</script>

<template>
    <q-page class="q-px-xl q-pt-md bg-accent">
        <h3 class="q-my-md">Clientes</h3>
        <q-separator color="gray" class="q-mb-lg" />
        <maas-loader v-if="loading" />
        <client-grid :clients="clients" />
    </q-page>
</template>
