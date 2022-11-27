<script setup>
import { useServiceStore } from "src/stores/default";
import { useTime } from "src/composables";

const { service } = useServiceStore();
const { getDateByWeek } = useTime();
</script>
<template>
    <h5>Asignaciones finales</h5>
    <div v-if="service.id" class="assignments">
        <div
            v-for="assignment in service.assignments[0]?.assignments_for_week"
            :key="assignment.day"
            class="assignments-day"
        >
            <div class="assignment-day-header">
                <h6 class="text-capitalize q-mb-md q-mt-sm">
                    {{ assignment.day }}
                    <span>{{
                        getDateByWeek(service.current_week, assignment.day)
                    }}</span>
                </h6>

                <span class="item">
                    Inicia: {{ assignment.availabilities[0].shift_start_at }} -
                    Termina: {{ assignment.availabilities[0].shift_end_at }}
                </span>

                <span class="item">
                    Cambios de turno:
                    {{ assignment.has_shift_changes ? "Sí" : "No" }}
                </span>
                <span class="item">
                    Turno completado: {{ assignment.is_complete ? "Sí" : "No" }}
                </span>
            </div>

            <div
                v-for="item in assignment.availabilities"
                :key="item"
                class="assignment-day-item"
                :style="{ backgroundColor: item.user_color }"
            >
                <span class="assignment">
                    <strong class="text-subtitle1 text-weight-regular"
                        >Horario:</strong
                    >
                    {{ item.potential_assignment_start_at }} -
                    {{ item.potential_assignment_end_at }}
                </span>
                <span class="assignment">
                    <strong class="text-subtitle1 text-weight-regular"
                        >Asignado a:</strong
                    >
                    {{ item.user_full_name }}
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.assignments {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    &-day {
        background-color: #f5f5f5;
        padding: 1rem;
        border-radius: 10px;
        margin-bottom: 1rem;
        .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
        }
    }
}

.assignment-day {
    &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: 10px;
        .assignment {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
    }
}
</style>
