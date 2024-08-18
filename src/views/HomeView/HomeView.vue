<template>
    <div>
        <Introduccion :homeText="homeText"></Introduccion>
        <Noticias :homeText="homeText"></Noticias>
        <Localizaciones :homeText="homeText"></Localizaciones>
        <Calendario :homeText="homeText"></Calendario>
        <Eventos :homeText="homeText"></Eventos>
        <MasInformacion :homeText="homeText"></MasInformacion>

    </div>
</template>

<script setup lang="ts">
// mis componentes
import Calendario from "./components/Calendario.vue";
import Eventos from "./components/Eventos.vue";
import Introduccion from "./components/Introduccion.vue";
import Localizaciones from "./components/Localizaciones.vue";
import Noticias from "./components/Noticias.vue";
import MasInformacion from "./components/MasInformacion.vue";
// constantes
import { homeText } from "@/constants/constants";
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