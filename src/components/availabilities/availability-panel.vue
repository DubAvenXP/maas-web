<script setup>
import { useService, useAvailability } from "src/composables";

const { service, onChangeWeek } = useService();
const { affectedAssignments } = useAvailability();
</script>
<template>
    <div>
        <h5 v-if="!service?.id" class="text-center">
            Selecciona un servicio para ver sus disponibilidades
        </h5>
        <div v-else class="availability-panel">
            <div class="flex items-center justify-center">
                <div>
                    <q-btn
                        label="Anterior"
                        color="secondary"
                        @click="
                            onChangeWeek(service.prev_week, 'availabilities')
                        "
                    />
                </div>
                <h5 class="q-my-none q-mx-md">
                    Semana seleccionada: {{ service.current_week }}
                </h5>
                <div>
                    <q-btn
                        label="siguiente"
                        color="secondary"
                        @click="
                            onChangeWeek(service.next_week, 'availabilities')
                        "
                    />
                </div>
            </div>
            <div class="availability-panel-items">
                <span class="item"> Cliente: {{ service.client_name }} </span>
                <span class="item"> Servicio: {{ service.name }} </span>
                <span class="item">
                    Total de turnos: {{ service.shifts?.length }}
                </span>
            </div>
            <template v-if="affectedAssignments">
                <h6 class="q-mb-sm">La ultima acción afectó lo siguiente</h6>
                <div class="availability-panel-info">
                    <span class="item">
                        Asignaciones creadas:
                        <strong class="text-h5">{{
                            affectedAssignments.created_assignments
                        }}</strong>
                    </span>
                    <span class="item">
                        Asignaciones removidas:
                        <strong class="text-h5">{{
                            affectedAssignments.removed_assignments
                        }}</strong>
                    </span>
                    <span class="item">
                        Total semanas afectadas:
                        <strong class="text-h5">{{
                            affectedAssignments.total_weeks_affected
                        }}</strong>
                    </span>
                    <span class="item">
                        Disponibilidades verificadas:
                        <strong class="text-h5">{{
                            affectedAssignments.total_availabilities_checked
                        }}</strong>
                    </span>
                </div>
            </template>
        </div>
    </div>
</template>

<style lang="scss">
.availability-panel {
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 2rem;
    &-items {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        .item {
            background-color: #f5f5f5;
            padding: 0.5rem;
            border-radius: 5px;
        }
    }
    &-info {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-auto-rows: 100px;
        gap: 1rem;
        .item {
            background-color: #f5f5f5;
            padding: 0.5rem;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
