<script setup lang="ts">
import {Personagem} from '@/models/personagens';

//Define as propriedades (props) que o componente irá receber.
//No caso, o componente vai receber uma propriedade chamada personagem, que deve ser do tipo Personagem e é obrigatória (required: true)
const props = defineProps({
    personagem: { type: Personagem, required: true },

});

</script>


<template>
    <section>
    
    <div>
        <h5>{{props.personagem.name }}</h5>
        <span class=" icons material-icons-round">{{ props.personagem.img }}</span>
    </div>    

    </section>
    
</template>


<style scoped lang="scss">

section{
    
    border: 1px solid gray;
    background-color: #00FF7F;
    width: 10rem;
    height: 7.5rem;
    margin: 0.5rem;
  
}




</style>