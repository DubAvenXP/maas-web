import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "src/boot/axios";

export const useServiceStore = defineStore("service", () => {
    const services = ref([]);
    const service = ref({});
    const loading = ref(false);

    async function fetchServices() {
        try {
            loading.value = true;
            const { data } = await api.get("/services");
            services.value = data;
        } catch (error) {
            console.error(error);
        } finally {
            loading.value = false;
        }
    }

    async function fetchServiceById(id, week) {
        try {
            loading.value = true;

            let url = `/services/${id}/availabilities`;
            if (week) url += `?week=${week}`;

            const { data } = await api.get(url);
            service.value = data;
        } catch (error) {
            console.error(error);
        } finally {
            loading.value = false;
        }
    }

    return {
        services,
        service,
        loading,
        fetchServices,
        fetchServiceById,
    };
});
