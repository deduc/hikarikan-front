<template>
    <section v-for="arteMarcial in artesMarciales">
        <article>
            <div>
                <h1>{{ arteMarcial.titulo }}</h1>
                <p v-for="texto in arteMarcial.descripcion">{{ texto }}</p>
            </div>
        </article>
    </section>
</template>

<script setup lang="ts">
import { descripcionText } from "@/core/constants/textos";

let artesMarciales = descripcionText.artesMarciales;
</script>

<style scoped lang="scss">
section article {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h1 {
        font-size: 24px;
    }

    p {
        padding-left: 32px;
        padding-right: 32px;
    }
}
</style>