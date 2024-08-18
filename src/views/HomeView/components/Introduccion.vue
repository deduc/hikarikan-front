<template>
    <section>
        <h1>{{ homeText.introduccion.bienvenida }}</h1>
        <p>{{ homeText.introduccion.descripcionIntroductoria }}</p>
    </section>

</template>

<script setup lang="ts">
const props = defineProps<{
    homeText: any;
}>();

</script>

<style scoped lang="scss"></style>