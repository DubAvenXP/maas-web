<script setup>
import { useService } from "src/composables";

const props = defineProps({
    endpoint: {
        type: String,
        required: true,
    },
});

const { services, fetchServices, fetchServiceById, loading } = useService();

fetchServices();
</script>
<template>
    <div>
        <q-btn-dropdown
            color="secondary"
            label="Seleccionar servicio"
            v-if="services.length"
        >
            <q-list>
                <q-item
                    v-for="service in services"
                    :key="service.id"
                    clickable
                    v-close-popup
                    @click="fetchServiceById(service.id, null, props.endpoint)"
                >
                    <q-item-section>
                        <q-item-label>
                            {{ service.name }} ({{ service.client_name }})
                        </q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>
    </div>
</template>
