<script setup>
import ClientCard from "src/components/clients/client-card.vue";

const props = defineProps({
    clients: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div class="clients">
        <client-card
            :client="client"
            v-for="client in clients"
            :key="client.id"
        />
    </div>
</template>

<style lang="scss" scoped>
.clients {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    gap: 1rem;
}
</style>
