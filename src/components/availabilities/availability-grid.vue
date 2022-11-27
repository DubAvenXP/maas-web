<script setup>
import { useServiceStore, useLayoutStore } from "src/stores/default";
import { useTime } from "src/composables";

import AvailabilityItem from "./availability-item.vue";
import AvailabilityNew from "./availability-new.vue";

const layoutStore = useLayoutStore();
const { service } = useServiceStore();
const { getDateByWeek } = useTime();
</script>
<template>
    <div class="availabilities">
        <template v-for="shift in service.shifts" :key="shift.id">
            <div class="availability">
                <div class="flex justify-between items-center">
                    <h6 class="q-my-sm text-capitalize q-mt-sm">
                        {{ shift.day }}
                        <span>{{
                            getDateByWeek(service.current_week, shift.day)
                        }}</span>
                    </h6>
                    <q-btn
                        color="primary"
                        icon="add_circle"
                        @click="layoutStore.toggleAvailabilityForm"
                    />
                </div>
                <h6 class="q-my-sm text-subtitle1">
                    Inicia: {{ shift.start_time }} - Termina:
                    {{ shift.end_time }}
                </h6>
                <availability-new
                    :shift="shift"
                    :date="getDateByWeek(service.current_week, shift.day)"
                    v-if="layoutStore.showAvailabilityForm"
                />
                <div class="availability-grid">
                    <availability-item
                        v-for="availability in shift.availabilities"
                        :key="availability.id"
                        :availability="availability"
                    />
                </div>
            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.availabilities {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(750px, 1fr));
    gap: 2rem;
}
.availability {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    &-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }
}

// media queries
@media (max-width: 1050px) {
    .availabilities {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
}
</style>
