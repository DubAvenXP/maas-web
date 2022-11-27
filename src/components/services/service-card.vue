<script setup>
// props
// props
const props = defineProps({
    service: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <article class="service">
        <h5 class="q-my-sm">{{ service.name }}</h5>
        <q-separator color="gray" />

        <div>
            <h6 class="q-mt-lg q-mb-sm">
                Turnos
                <q-icon name="schedule" />
            </h6>
            <q-list padding>
                <q-item
                    clickable
                    v-ripple
                    v-for="shift in service.shifts"
                    :key="shift.id"
                >
                    <q-avatar color="secondary" text-color="white">
                        {{ shift.day.charAt(0).toUpperCase() }}
                    </q-avatar>
                    <q-item-section class="q-ml-md flex">
                        <span class="text-capitalize">
                            {{ shift.day }}
                        </span>
                        <span>
                            {{ shift.start_time }} - {{ shift.end_time }}
                        </span>
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.service {
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 100%;
}
</style>
