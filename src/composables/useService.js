import { useServiceStore } from "src/stores/default";
import { computed } from "vue";

export const useService = () => {
    const serviceStore = useServiceStore();

    return {
        serviceStore,
        loading: computed(() => serviceStore.loading),
        services: computed(() => serviceStore.services),
        service: computed(() => serviceStore.service),
        fetchServices: serviceStore.fetchServices,
        fetchServiceById: serviceStore.fetchServiceById,
        onChangeWeek: (week) => {
            serviceStore.fetchServiceById(serviceStore.service.id, week);
        },
    };
};
