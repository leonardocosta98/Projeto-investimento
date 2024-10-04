<script>
export default{
    props: {
        link: String,
        textoDoBotao: String,
    }
}
</script>

<template>
<div>
    <a :href="link">{{ textoDoBotao }}</a>
</div>
</template>

<style scoped>
</style>