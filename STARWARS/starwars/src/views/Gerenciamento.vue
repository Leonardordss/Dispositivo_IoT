<script setup lang="ts">

import {Personagem, Ambiente} from '@/models/personagens';
import {reactive, ref} from 'vue';
import PersonagemComponent from '@/components/AmbienteComponent.vue';
import { usePersonagemRepository } from '@/stores/deviceRepository';


const showNewEnvForm = ref(false);
const newEnv = reactive(new Ambiente());
const saveNewEnv = ()=> {
    usePersonagemRepository().addAmbiente(newEnv);
    //newEnv.name = '';
    //newEnv.devices = [];
}

const ambientes: Array<Ambiente> = reactive([]);
const selectAmbiente = ref(new Ambiente());

const card1: Personagem = reactive(new Personagem());
card1.img = '';



const starwars: Ambiente = reactive(new Ambiente());
starwars.name = 'Star Wars';
starwars.devices = [card1];

//environments.push(sala);
//environments.push(cozinha);

</script>

<template>

</template>

<style scoped lang="scss">
main{
    width: 100vw;
    min-height: 100vh;
    .environments{
        width: 90vw;
        min-height: 95vh;
        background-color: #2F2F2F;
        box-shadow: #FFD700;
    }
}

</style>