import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore", {
    state: () => ({
        score: 10,
        maxHeat: 100,
        maxAttack: 30,
        maxDefense: 100
    }),

    getters: {
        getScore() {
            return this.score;
        },
        getNextAttack() {
            let attack = Math.floor(Math.random() * this.maxAttack) + 1;
            console.log("attack:", attack);
            return attack;
        },
        getNextDefense() {
            let defense = Math.floor(Math.random() * this.maxDefense) + 1;
            console.log("Defense:", defense);
            return defense;
        }

    }
})