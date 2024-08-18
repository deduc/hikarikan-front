<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { text, links } from "@/constants/constants";

const options: string[] = ["Karate", "Kobudo", "añadir mas artes"];
const inputText: string = "¿Qué es el...?";
</script>

<template>
    <nav>
        <article>
            <img src="https://picsum.photos/id/1025/600/400" alt="">
            <h1>{{ text.appName }}</h1>
        </article>
        <article class="contenedor-links">
            <RouterLink to="/">{{ links.home }}</RouterLink>
            <RouterLink to="/about">{{ links.quienesSomos }}</RouterLink>
            <RouterLink to="/descripcion">{{ links.descripcion }}</RouterLink>
            <RouterLink to="/objetivos">{{ links.objetivos }}</RouterLink>
            <RouterLink to="/calendario">{{ links.calendario }}</RouterLink>
            <RouterLink to="/abonados">{{ links.abonados }}</RouterLink>
        </article>
        <article>
            <p>Futuro boton de {{ text.login }}</p>
        </article>
    </nav>
</template>

<style lang="scss">
nav {
    min-height: 15vh;
    padding-right: 8px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    article {
        padding: 8px;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;

        img {
            width: 120px;
        }

        h1 {
            font-size: 32px;
        }

        .desplegable-output {
            display: none;
        }

        .desplegable-input:hover+.desplegable-output {
            display: inline-block;
            position: fixed;
            transform: translate(-50%, -50%);
            top: 10%;
            left: 60%;
        }

    }

    // no se aplica al primer elemento
    .contenedor-links>*:not(:first-child) {
        border-left: 1px solid $baseColor;
        padding-left: 8px;
    }

    .contenedor-links * {
        color: $baseColor;
        text-decoration: none;
    }
}
</style>