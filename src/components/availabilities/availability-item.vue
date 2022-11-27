<script setup>
import { useTime, useAvailability, useService } from "src/composables";

const props = defineProps({
    availability: {
        type: Object,
        required: true,
    },
});

const { getTime, getHoursBetween } = useTime();
const { remove } = useAvailability();
const { fetchServiceById, service } = useService();

const onRemove = async (id) => {
    await remove(id);
    await fetchServiceById(service.value.id, service.value.current_week);
};
</script>

<template>
    <div class="item">
        <div class="q-my-sm text-subtitle1 item-content">
            <span>
                Disponible de {{ getTime(availability.start_at) }} a
                {{ getTime(availability.end_at) }}</span
            >

            <span>Nombre: {{ availability.user_name }}</span>
            <span
                >Horas disponibles:
                {{
                    getHoursBetween(availability.start_at, availability.end_at)
                }}</span
            >
        </div>
        <div class="flex justify-end">
            <q-btn
                class="q-mr-sm"
                color="secondary"
                dense
                flat
                icon="delete"
                @click="onRemove(availability.id)"
            />
        </div>
        <div></div>
    </div>
</template>

<style lang="scss" scoped>
.item {
    background-color: white;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    width: 100%;
    &-content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>
