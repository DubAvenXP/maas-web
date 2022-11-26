<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "UsersPage",
});
</script>

<script setup>
import MaasLoader from "src/components/maas-loader.vue";
import { useUser } from "src/composables";

const { users, columns, loading } = useUser();
</script>

<template>
    <q-page class="q-pl-lg q-pt-md">
        <h3 class="q-mt-md">Usuarios</h3>
        <maas-loader v-if="loading" />
        <div v-else class="q-pr-xl">
            <q-table
                :rows="users"
                :columns="columns"
                row-key="name"
                :pagination="{
                    rowsPerPage: 15,
                    rowsNumber: users.length,
                }"
            />
        </div>
    </q-page>
</template>
