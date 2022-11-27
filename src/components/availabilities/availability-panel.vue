<script setup>
import { useService } from "src/composables";

const { service } = useService();
</script>
<template>
    <div>
        <h5 v-if="!service?.id" class="text-center">
            Selecciona un servicio para ver sus disponibilidades
        </h5>
        <div v-else class="availability-panel">
            <div class="flex items-center justify-center">
                <div>
                    <q-btn label="Anterior" color="secondary" />
                </div>
                <h5 class="q-my-none q-mx-md">
                    Semana actual: {{ service.current_week }}
                </h5>
                <div>
                    <q-btn label="siguiente" color="secondary" />
                </div>
            </div>
            <div class="availability-panel-items">
                <span class="item"> Cliente {{ service.client_name }} </span>
                <span class="item"> Servicio: {{ service.name }} </span>
                <span class="item">
                    Total de turnos: {{ service.shifts.length }}
                </span>
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
}
</style>
