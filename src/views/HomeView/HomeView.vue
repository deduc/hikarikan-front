<template>
    <div>
        <Introduccion :homeText="homeText"></Introduccion>
        <Localizaciones :homeText="homeText"></Localizaciones>
        <Calendario :homeText="homeText"></Calendario>
        <Eventos :homeText="homeText"></Eventos>
        <Noticias :homeText="homeText"></Noticias>
        <MasInformacion :homeText="homeText"></MasInformacion>
    </div>
</template>

<script setup lang="ts">
// mis componentes
import Calendario from "./components/Calendario.vue";
import Eventos from "./components/Eventos.vue";
import Introduccion from "./components/Introduccion.vue";
import Localizaciones from "./components/Localizaciones.vue";
import Noticias from "@/sharedComponents/Noticias/Noticias.vue";
import MasInformacion from "./components/MasInformacion.vue";
// constantes
import { homeText } from "@/core/constants/textos";
</script>

<style scoped lang="scss">
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
}

div section {
    border: 1px solid $bc;
}
</style>