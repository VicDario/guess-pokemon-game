<template>
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Please wait</h1>
    <h3 class="animate-pulse">Loading Pokemons</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">¿Who's that pokemon?</h1>
    <PokemonPicture :pokemon-id="randomPokemon.id" :show-pokemon="!isPlaying" />
    <PokemonOptions
      :options="pokemonOptions"
      :block-selection="!isPlaying"
      @selected-option="checkAnswer"
    />
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const isPlaying = computed<boolean>(() => gameStatus.value === GameStatus.Playing);
const { randomPokemon, gameStatus, isLoading, pokemonOptions, checkAnswer } = usePokemonGame();
</script>
