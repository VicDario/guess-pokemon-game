<template>
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Please wait</h1>
    <h3 class="animate-pulse">Loading Pokemons</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <PokemonScore :score="score" />
    <h1 class="m-3">¿Who's that pokemon?</h1>
    <div class="h-20">
      <button
        v-if="!isPlaying"
        @click="getNextRound()"
        class="bg-green-500 border-2 border-black p-2 rounded-md hover:bg-green-700 transition-all"
      >
        Next Round!
      </button>
    </div>
    <PokemonPicture :pokemon-id="randomPokemon.id" :show-pokemon="!isPlaying" />
    <PokemonOptions
      :options="pokemonOptions"
      :block-selection="!isPlaying"
      :correct-answer="randomPokemon.id"
      @selected-option="checkAnswer"
    />
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import PokemonOptions from '@pokemon/components/PokemonOptions.vue';
import PokemonPicture from '@pokemon/components/PokemonPicture.vue';
import PokemonScore from '@pokemon/components/PokemonScore.vue';
import { usePokemonGame } from '@pokemon/composables/usePokemonGame';
import { GameStatus } from '@pokemon/interfaces';

const isPlaying = computed<boolean>(() => gameStatus.value === GameStatus.Playing);
const { score, randomPokemon, gameStatus, isLoading, pokemonOptions, checkAnswer, getNextRound } =
  usePokemonGame();
</script>
