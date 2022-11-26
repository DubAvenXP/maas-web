<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "ServicesPage",
});
</script>

<script setup>
const message = "Services";
</script>

<template>
    <q-page class="q-pl-lg q-pt-md">
        <h3 class="q-mt-md">{{ message }}</h3>
    </q-page>
</template>
