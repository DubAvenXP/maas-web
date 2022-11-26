<script setup>
import ServiceGrid from "src/components/services/service-grid.vue";

// props
const props = defineProps({
    client: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <article class="client">
        <h4 class="q-my-md">{{ client.name }}</h4>
        <p>{{ client.description }}</p>
        <service-grid :services="client.services" />
    </article>
</template>

<style lang="scss" scoped>
.client {
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 2rem;
    background-color: #f5f5f5;
}
</style>
