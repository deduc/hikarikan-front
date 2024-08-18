<template>
    <section>
        <h2>Calendario de Eventos</h2>
        <ul>
            <li>
                <h3>Evento 1</h3>
                <p>Descripción del evento 1.</p>
                <time datetime="2024-09-01T10:00">1 de Septiembre de 2024, 10:00 AM</time>
            </li>
            <li>
                <h3>Evento 2</h3>
                <p>Descripción del evento 2.</p>
                <time datetime="2024-09-15T14:00">15 de Septiembre de 2024, 2:00 PM</time>
            </li>
        </ul>
    </section>

</template>

<script setup lang="ts">
const props = defineProps<{
    homeText: any;
}>();
</script>

<style scoped lang="scss"></style>