<script setup lang="ts">


import AmbienteComponent from '@/components/AmbienteComponent.vue';
import PersonagemComponent from '@/components/PersonagemComponent.vue';
import {Personagem, Ambiente} from '@/models/personagens';
import {reactive, ref} from 'vue';

const ambientes: Array<Ambiente> = reactive([]);

const card1: Personagem = reactive(new Personagem());

card1.name = 'Robô';
//card1.img = "https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg";

const starwars: Ambiente = reactive(new Ambiente());
starwars.name = 'Stars Wars';
starwars.devices = [card1];


ambientes.push(starwars);



</script>

<template>
    <main class="flex flex-column text-center justify-content align-items-center">
        <h1 class="title">Seus Personagens 🤖</h1>
        <section class="environments flex flex-column border-round-sm">
            <div class="personagem" v-for="(ambiente, env_id) in ambientes" :key="env_id">
                <AmbienteComponent :Ambiente="ambiente"/>
            </div>
            
        </section>
    </main>
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
  
    .title {
        color: #EAEAEA;
    }
}
</style>
