<script setup>
// props
const props = defineProps({
    background: {
        type: String,
        default: "bg-white",
    },
});
</script>

<template>
    <section class="loader" :class="background">
        <div class="bars">
            <div class="bars-item bars-item-1 bg-secondary"></div>
            <div class="bars-item bars-item-2 bg-secondary"></div>
            <div class="bars-item bars-item-3 bg-secondary"></div>
            <div class="bars-item bars-item-3 bg-secondary"></div>
            <div class="bars-item bars-item-2 bg-secondary"></div>
            <div class="bars-item bars-item-1 bg-secondary"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.loader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh;
}
.bars {
    display: flex;
    gap: 10px;
    &-item {
        height: 100px;
        width: 30px;
        &-1 {
            animation: bars-1 1s linear infinite;
        }
        &-2 {
            animation: bars-2 1s linear infinite;
        }
        &-3 {
            animation: bars-3 1s linear infinite;
        }
    }
}
@keyframes bars-1 {
    0% {
        transform: scaleY(1);
    }
    20% {
        transform: scaleY(1.1);
    }
    40% {
        transform: scaleY(1.2);
    }
}
@keyframes bars-2 {
    0% {
        transform: scaleY(1);
    }
    40% {
        transform: scaleY(1.3);
    }
    50% {
        transform: scaleY(1.4);
    }
}
@keyframes bars-3 {
    0% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(1.4);
    }
    60% {
        transform: scaleY(1.5);
    }
}
</style>
