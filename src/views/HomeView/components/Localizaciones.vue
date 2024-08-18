<template>
    <section>
        <h2>{{ homeText.localizaciones.titulo }}</h2>
        <ul>
            <li v-for="loc in localizaciones">
                <article>
                    <h3>{{ loc.nombre }}</h3>
                    <address>{{ loc.ubicacion }}</address>
                    <p>{{ loc.descripcion }}</p>
                    <img :src="loc.urlImagen" alt="Foto de la ubicación 1" />
                </article>
            </li>
        </ul>
        ubicacion
        descripcion
        urlImagen
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ILocalizacion } from '../interfaces/ILocalizacion';

const props = defineProps<{
    homeText: any;
}>();

const localizaciones = ref<Array<ILocalizacion>>([]);

function getLocalizaciones(): ILocalizacion[] {
    // todo: obtener info de la api
    let noticiasPrueba: ILocalizacion[] = [
        { nombre: "nombre X", ubicacion: "ubicacion X", descripcion: "descripcion X", urlImagen: "urlImagen X" },
        { nombre: "nombre X", ubicacion: "ubicacion X", descripcion: "descripcion X", urlImagen: "urlImagen X" }
    ]
    return noticiasPrueba;
}


function main() {
    localizaciones.value = getLocalizaciones();
}

</script>

<style scoped lang="scss"></style>