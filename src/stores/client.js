import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "src/boot/axios";

export const useClientStore = defineStore("client", () => {
    const clients = ref([]);
    const loading = ref(false);

    async function fetchClients() {
        try {
            loading.value = true;
            const { data } = await api.get("/clients");
            clients.value = data;
        } catch (error) {
            console.error(error);
        } finally {
            loading.value = false;
        }
    }

    return {
        clients,
        loading,
        fetchClients,
    };
});
