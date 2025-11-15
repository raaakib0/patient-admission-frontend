import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore", {
    state: ()=> ({
        score:0,
        maxHeat:100,
        maxAttack:30,
        maxDefense:100
    })
})