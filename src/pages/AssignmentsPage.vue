<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "AssignmentsPage",
});
</script>
<script setup>
const message = "Assignments!";
</script>
<template>
    <q-page class="q-pl-lg q-pt-md">
        <h3 class="q-mt-md">{{ message }}</h3>
    </q-page>
</template>
