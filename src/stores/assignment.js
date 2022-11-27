import { defineStore } from "pinia";
import { ref } from "vue";

export const useLayoutStore = defineStore("layout", () => {
    const leftDrawerOpen = ref(false);
    const showAvailabilityForm = ref(false);
    function toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    function toggleAvailabilityForm() {
        showAvailabilityForm.value = !showAvailabilityForm.value;
    }
    return {
        leftDrawerOpen,
        toggleLeftDrawer,
        showAvailabilityForm,
        toggleAvailabilityForm,
    };
});
