<template>
    <section>
        <h2>{{ homeText.ultimasNoticias.titulo }}</h2>

        <article>
            <h3>Título de la Noticia 1</h3>
            <p>Resumen o descripción corta de la noticia 1.</p>
            <img src="" alt="Imagen relacionada con la noticia 1" />
            <footer>
                <time datetime="2024-08-18">18 de Agosto de 2024</time>
                <address>Por <a href="mailto:autor@example.com">Autor de la Noticia</a></address>
            </footer>
        </article>

        <article>
            <h3 id="news-2">Título de la Noticia 2</h3>
            <p>Resumen o descripción corta de la noticia 2.</p>
            <img src="" alt="Imagen relacionada con la noticia 2" />
            <footer>
                <time datetime="2024-08-10">10 de Agosto de 2024</time>
                <address>Por <a href="mailto:autor2@example.com">Otro Autor</a></address>
            </footer>
        </article>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { INoticias } from "./interfaces/INoticias";


const props = defineProps<{
    homeText: any;
}>();

const lastNews = ref<Array<INoticias>>([]);

function getLastNews(): INoticias[] {
    // todo: obtener info de la api
    let noticiasPrueba: INoticias[] = [
        { titulo: "Noticia X", resumen: "Resumen noticia X", imgUrl: "urlImagen", fecha: "Fecha Noticia X", autor: "Autor Noticia X" },
        { titulo: "Noticia X", resumen: "Resumen noticia X", imgUrl: "urlImagen", fecha: "Fecha Noticia X", autor: "Autor Noticia X" }
    ]
    return noticiasPrueba;
}


function main() {
    lastNews.value = getLastNews();
}
</script>

<style scoped lang="scss"></style>