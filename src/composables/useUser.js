import { useUserStore } from "src/stores/default";
import { computed } from "vue";

export const useUser = () => {
    const usersStore = useUserStore();

    const columns = [
        {
            name: "id",
            required: true,
            label: "ID",
            align: "left",
            field: "id",
        },
        {
            name: "first_name",
            required: true,
            label: "Nombre",
            align: "left",
            field: "first_name",
        },
        {
            name: "last_name",
            required: true,
            label: "Apellido",
            align: "left",
            field: "last_name",
        },
        {
            name: "email",
            required: true,
            label: "Email",
            align: "left",
            field: "email",
        },
        {
            name: "role",
            required: true,
            label: "Role",
            align: "left",
            field: "role",
        },
        {
            name: "color",
            required: true,
            label: "Color",
            align: "left",
            field: "color",
        },
    ];

    usersStore.fetchUsers();

    return {
        users: computed(() => usersStore.users),
        loading: computed(() => usersStore.loading),
        columns,
    };
};
