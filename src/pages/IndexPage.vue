<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "IndexPage",
});
</script>

<script setup>
const message = "Index";
// set name of the component
// this is used for the <router-view> component
</script>

<template>
    <q-page class="q-pl-lg q-pt-md">
        <h3 class="q-mt-md">{{ message }}</h3>
    </q-page>
</template>
