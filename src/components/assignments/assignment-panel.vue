<script setup>
import { useService } from "src/composables";
const { service, onChangeWeek } = useService();
</script>
<template>
    <div>
        <h5 v-if="!service.id" class="text-center">
            Selecciona un servicio para ver sus asignaciones
        </h5>
        <!-- <pre>
            {{ service }}
        </pre> -->
        <div v-else class="availability-panel">
            <div class="flex items-center justify-center">
                <div>
                    <q-btn
                        label="Anterior"
                        color="secondary"
                        @click="onChangeWeek(service.prev_week, 'assignments')"
                    />
                </div>
                <h5 class="q-my-none q-mx-md">
                    Semana seleccionada: {{ service.current_week }}
                </h5>
                <div>
                    <q-btn
                        label="siguiente"
                        color="secondary"
                        @click="onChangeWeek(service.next_week, 'assignments')"
                    />
                </div>
            </div>
            <div class="availability-panel-items">
                <span class="item"> Cliente: {{ service.client_name }} </span>
                <span class="item"> Servicio: {{ service.name }} </span>
                <span class="item">
                    Inicio del servicio: {{ service.start_at }}
                </span>
                <span class="item">
                    Finalización del servicio: {{ service.end_at }}
                </span>
            </div>
            <h6 class="q-mb-sm">Detalles especificos</h6>
            <div v-if="service.assignments" class="availability-panel-info">
                <span class="item">
                    Total horas de servicio:
                    <strong class="text-h5">{{
                        service.assignments[0]?.total_shift_hours_by_week
                    }}</strong>
                </span>
                <span class="item">
                    Total horas asignadas:
                    <strong class="text-h5">{{
                        service.assignments[0]?.total_assigned_hours
                    }}</strong>
                </span>
                <span class="item">
                    Horas por asignar:
                    <strong class="text-h5">{{
                        service.assignments[0]?.missing_hours
                    }}</strong>
                </span>
                <span class="item">
                    Promedio de horas por usuario esperado:
                    <strong class="text-h5">{{
                        service.assignments[0]
                            ?.potential_average_user_hours_by_week
                    }}</strong>
                </span>
                <span class="item">
                    Promedio real de horas por usuario:
                    <strong class="text-h5">{{
                        service.assignments[0]?.real_average_user_hours_by_week
                    }}</strong>
                </span>
                <span class="item">
                    Porcentaje de acierto
                    <strong class="text-h5"
                        >{{ service.assignments[0]?.succes_rate }}%</strong
                    >
                </span>
            </div>

            <h6 class="q-mt-lg q-mb-md">Horas asignadas por usuario</h6>
            <div v-if="service.assignments" class="user-assignments">
                <div
                    v-for="user in service.assignments[0]?.assigned_users"
                    :key="user.user_id"
                    class="user-assignments-item"
                >
                    <span class="item-first">
                        Horas asignadas:
                        <strong>{{ user.assigned_hours }}</strong>
                    </span>
                    <span class="item-second">
                        Usuario:
                        <strong>{{ user.user_full_name }}</strong>
                    </span>
                </div>
            </div>
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

.user-assignments {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 100px;
    gap: 1rem;
    &-item {
        background-color: #f5f5f5;
        padding: 0.5rem;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .item-first {
            margin-bottom: 0.5rem;
        }
    }
}
</style>
