<script setup>
import { useUser, useAvailability, useTime, useService } from "src/composables";
import { useLayoutStore } from "src/stores/default";

import { ref } from "vue";

const { users } = useUser();
const { create, loading } = useAvailability();
const { service, fetchServiceById } = useService();
const { getArrayHours } = useTime();
const layoutStore = useLayoutStore();

const props = defineProps({
    shift: {
        type: Object,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

const newAvailability = ref({
    start_at: "",
    end_at: "",
    user_id: "",
    service_id: service.value.id,
});

const isInvalid = ref(false);

const getOptions = (users) => {
    return users.map((user) => {
        return {
            label: user.first_name + " " + user.last_name,
            value: user.id,
        };
    });
};

const hoursOptionsStart = getArrayHours(
    props.shift.start_time,
    props.shift.end_time
);

let hoursOptionsEnd = [...hoursOptionsStart, props.shift.end_time];
hoursOptionsEnd.shift();

const onSubmit = async () => {
    if (
        newAvailability.value.user_id &&
        newAvailability.value.start_at &&
        newAvailability.value.end_at
    ) {
        newAvailability.value.start_at =
            props.date + " " + newAvailability.value.start_at;
        newAvailability.value.end_at =
            props.date + " " + newAvailability.value.end_at;
        newAvailability.value.user_id = newAvailability.value.user_id.value;
        await create(newAvailability.value);
        onReset();
        layoutStore.toggleAvailabilityForm();
        await fetchServiceById(service.value.id, service.value.current_week);
        return;
    }

    isInvalid.value = true;
};

const onReset = () => {
    newAvailability.value = {
        start_at: "",
        end_at: "",
        user_id: "",
        service_id: service.value.id,
    };
    isInvalid.value = false;
};
</script>
<template>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <h6 class="q-mt-lg q-mb-none">Añadir disponibilidad</h6>
        <div class="form-fields">
            <q-select
                v-model="newAvailability.start_at"
                :options="hoursOptionsStart"
                label="Hora inicial"
                filled
            />
            <q-select
                v-model="newAvailability.end_at"
                :options="hoursOptionsEnd"
                label="Hora final"
                filled
            />
            <q-select
                v-model="newAvailability.user_id"
                :options="getOptions(users)"
                name="user_id"
                label="Usuario"
                filled
            />
        </div>

        <p v-if="isInvalid" class="text-negative">
            Por favor, rellena todos los campos
        </p>

        <div>
            <q-btn icon="cancel" class="q-mr-sm" type="reset" color="primary" />
            <q-btn
                icon="save"
                type="submit"
                color="primary"
                :loading="loading"
            />
        </div>
    </q-form>
</template>

<style lang="scss">
.form-fields {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
}
</style>
