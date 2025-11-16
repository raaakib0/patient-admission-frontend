import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("gameStore", () => {

    const score = ref(10);
    const maxHeat = ref(100);
    const maxAttack = ref(30);
    const maxDefense = ref(10);


    const getScore = computer(() => sore.value);
    const getWinningScore = computer(() => maxHeat.value);


    setNextAttack = () => {
        let attack = Math.floor(Math.random() * maxAttack.value) + 1;
        console.log("attack:", attack);
        score.value += attack;
    };
    setNextDefense = () => {
        let defense = Math.floor(Math.random() * maxDefense.value) + 1;
        console.log("Defense:", defense);
        score.value -= defense;
    };

    resetScore = () => {
        score.value = 50;
    };

    return {
        score,
        maxAttack,
        maxDefense,
        getScore,
        getWinningScore,
        setNextAttack,
        setNextDefense,
        resetScore,
    }
})