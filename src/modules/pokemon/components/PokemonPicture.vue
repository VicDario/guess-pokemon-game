<template>
  <section>
    <img :src="image" alt="Pokémon" class="brightness-0 h-[200px]" />
  </section>
</template>

<script lang="ts" setup>
interface Props {
  image: string;
}
defineProps<Props>();
</script>

<style scoped>
img {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
}
</style>
