<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "UsersPage",
});
</script>

<script setup>
import { useUserStore } from "src/stores/default";
import MaasLoader from "src/components/maas-loader.vue";

// implement stores
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
</script>

<template>
    <q-page class="q-pl-lg q-pt-md">
        <h3 class="q-mt-md">Usuarios</h3>
        <maas-loader v-if="usersStore.loading" />
        <div v-else class="q-pr-xl">
            <q-table
                :rows="usersStore.users"
                :columns="columns"
                row-key="name"
                :pagination="{
                    rowsPerPage: 15,
                    rowsNumber: usersStore.users.length,
                }"
            />
        </div>
    </q-page>
</template>
