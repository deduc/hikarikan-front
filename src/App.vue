<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavBar from './sharedComponents/NavBar/NavBar.vue'
import Contacto from './sharedComponents/Contacto/Contacto.vue'
</script>

<template>
    <header>
        <NavBar></NavBar>
    </header>

    <main>
        <RouterView />
    </main>

    <Contacto></Contacto>
</template>