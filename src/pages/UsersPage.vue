<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "UsersPage",
});
</script>

<script setup>
const message = "Users";
</script>

<template>
    <q-page class="q-pl-lg q-pt-md">
        <h3 class="q-mt-md">{{ message }}</h3>
    </q-page>
</template>
