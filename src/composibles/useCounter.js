import { ref } from "vue";

export function useCounter(initaialValue = 0, step =1){
    const count = ref(initaialValue);

const increment = ()=>{
  count.value+= step;
};

const decrement = ()=>{
  count.value-=step;
};

return {count, increment,decrement};
}