import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "src/boot/axios";
import { Notify } from "quasar";

export const useAvailabilityStore = defineStore("availability", () => {
    const availabilities = ref([]);
    const availability = ref({
        start_at: "",
        end_at: "",
        user_id: "",
        service_id: "",
    });

    const loading = ref(false);
    const isEditing = ref(false);
    const affectedAssignments = ref(null);

    async function remove(id) {
        try {
            loading.value = true;
            const { data } = await api.delete(`/availabilities/${id}`);
            affectedAssignments.value = data;
            Notify.create({
                message: "Disponibilidad eliminada",
                color: "positive",
                position: "top",
            });
        } catch (error) {
            console.error(error);
            Notify.create({
                message:
                    error.response.data?.errors[0]?.error ||
                    "Error al eliminar la disponibilidad",
                color: "negative",
                position: "top",
            });
        } finally {
            loading.value = false;
        }
    }

    async function create(payload) {
        try {
            const { data } = await api.post("/availabilities", payload);
            affectedAssignments.value = data;
            Notify.create({
                message: "Disponibilidad creada",
                color: "positive",
                position: "top",
            });
        } catch (error) {
            // get error messages
            Notify.create({
                message:
                    error.response.data.errors[0].error ||
                    "Error al crear la disponibilidad",
                color: "negative",
                position: "top",
            });
        } finally {
            loading.value = false;
        }
    }

    async function update(id, payload) {
        try {
            loading.value = true;
            await api.put(`/availabilities/${id}`, payload);
        } catch (error) {
            console.error(error);
        } finally {
            loading.value = false;
        }
    }

    return {
        loading,
        isEditing,
        availabilities,
        availability,
        remove,
        create,
        update,
        affectedAssignments,
    };
});
