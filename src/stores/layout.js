import { defineStore } from "pinia";
import { ref } from "vue";

export const useLayoutStore = defineStore("layout", () => {
    const leftDrawerOpen = ref(false);
    function toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    return {
        leftDrawerOpen,
        toggleLeftDrawer,
    };
});
