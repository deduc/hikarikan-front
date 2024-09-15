<template>
    <section>
        <article>
            <h1>{{ homeText.introduccion.bienvenida }}</h1>
            <p v-for="descripcion in homeText.introduccion.descripcionIntroductoria">{{ descripcion }}</p>
        </article>
        <article>
            <h1>{{ homeText.finalidadDelClub.titulo }}</h1>
            <p v-for="descripcion in homeText.finalidadDelClub.descripcion">
                {{ descripcion }}
            </p>
        </article>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    homeText: any;
}>();

</script>

<style scoped lang="scss">
section {
    p {
        padding-left: 16px;
        padding-right: 16px;
    }
}
</style>