import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "src/boot/axios";

export const useUserStore = defineStore("user", () => {
    const users = ref([]);
    const loading = ref(false);

    async function fetchUsers() {
        try {
            loading.value = true;
            const { data } = await api.get("/users");
            users.value = data;
        } catch (error) {
            console.error(error);
        } finally {
            loading.value = false;
        }
    }

    return {
        users,
        loading,
        fetchUsers,
    };
});
