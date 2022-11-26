import { useClientStore } from "src/stores/default";
import { computed } from "vue";

export const useClient = () => {
    const clientStore = useClientStore();

    clientStore.fetchClients();

    return {
        clients: computed(() => clientStore.clients),
        loading: computed(() => clientStore.loading),
    };
};
