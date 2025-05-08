<script setup lang="ts">
import {Ambiente} from '@/models/personagens';
import PersonagemComponent from './PersonagemComponent.vue';


//Define as propriedades (props) que o componente irá receber.
//No caso, o componente vai receber uma propriedade chamada personagem, que deve ser do tipo Personagem e é obrigatória (required: true)
const props = defineProps({
    Ambiente: { type: Ambiente, required: true },

});



</script>


<template>
    <section class="flex flex-column">
        <h2 class="m-3">{{ props.Ambiente.name }}</h2>
        <div class="flex flex-row">

        </div>
    </section>


</template>



<style scoped lang="scss">




</style>