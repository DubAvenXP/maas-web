<script setup>
import ServiceCard from "src/components/services/service-card.vue";

// props
const props = defineProps({
    services: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="services">
        <service-card
            v-for="service in services"
            :key="service.id"
            :service="service"
        />
    </div>
</template>

<style lang="scss" scoped>
.services {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
    gap: 1rem;
}
</style>
