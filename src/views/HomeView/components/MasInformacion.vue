<template>
    <section>
        <h2>Más Información</h2>
        <aside>
            <h3>Acerca de Nosotros</h3>
            <p>Breve descripción de la misión y visión de la organización.</p>
        </aside>

        <aside>
            <h3>Enlaces Relevantes</h3>
            <nav>
                <ul>
                    <li><a href="#link1">Enlace 1</a></li>
                    <li><a href="#link2">Enlace 2</a></li>
                    <li><a href="#link3">Enlace 3</a></li>
                </ul>
            </nav>
        </aside>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    homeText: any;
}>();
</script>

<style scoped lang="scss"></style>