<template>
    <button @click="count++" >Clicked {{ count }} times</button>
</template>
<script>
export default{
    setup(){
        const count = ref(0);
        return {count};
    }
};
</script>