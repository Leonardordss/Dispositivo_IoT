import { defineStore } from "pinia";
import { Ambiente, Personagem } from "@/models/personagens";

export type PersonagemRepository = {
    ambientes: Array<Ambiente>
}

export const usePersonagemRepository = defineStore("device-repository",{
    state: (): PersonagemRepository => ({
        ambientes: []
    }),
    actions: {
        addAmbiente (newAmbiente: Ambiente){
            const deepCopy = JSON.parse(JSON.stringify(newAmbiente));
            this.ambientes.push(newAmbiente);
        },
        removeAmbiente (name: string){
            const index = this.ambientes.findIndex(env => env.name === name);
            if(index >= 0){
                this.ambientes.splice(index,1);
            }
        }
    },
    getters: {

    }
})