import { useAvailabilityStore } from "src/stores/default";
import { computed } from "vue";

export const useAvailability = () => {
    const availabilityStore = useAvailabilityStore();

    return {
        availabilityStore,
        availability: computed(() => availabilityStore.availability),
        availabilities: computed(() => availabilityStore.availabilities),
        isEditing: computed(() => availabilityStore.isEditing),
        loading: computed(() => availabilityStore.loading),
        affectedAssignments: computed(
            () => availabilityStore.affectedAssignments
        ),
        create: availabilityStore.create,
        update: availabilityStore.update,
        remove: availabilityStore.remove,
    };
};
