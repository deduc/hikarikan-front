<template>
    <footer>
        <section>
            <article>
                <h1>{{ footerText.contacto }}</h1>
                <ul>
                    <li>{{ footerText.email }}</li>
                    <li>{{ footerText.telefono }}</li>
                </ul>
            </article>
            <article>
                <h1>{{ footerText.rrss }}</h1>
                <ul>
                    <li v-for="rssName in footerText.rrssLista">{{ rssName }}</li>
                </ul>
            </article>
            <article>
                <h1>{{ footerText.tecnologias }}</h1>
                <ul>
                    <li v-for="tecnologia in footerText.tecnologiasLista">{{ tecnologia }}</li>
                </ul>
            </article>
        </section>
    </footer>
</template>

<script setup lang="ts">
import { footerText } from "@/constants/constants";
</script>

<style lang="scss">
footer {
    padding: 16px;
    outline: 1px solid $baseColor;

    display: flex;
    flex-direction: column;

    section {
        border: 1px solid $bc;

        display: flex;
        flex-direction: row;
        gap: 16px;

    }

    article {
        padding: 8px;
        padding-left: 24px;
        border: 1px solid $bc;
    }
}
</style>