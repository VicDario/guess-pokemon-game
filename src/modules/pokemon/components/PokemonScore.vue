<template>
  <div class="flex w-40 text-center justify-between">
    <div>
      Score<br />
      <strong>{{ score.score }}</strong>
    </div>
    <div>
      Errors<br />
      <strong>{{ score.errors }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameScore } from '@pokemon/interfaces/game-score.interface';

interface Props {
  score: GameScore;
}
defineProps<Props>();
</script>

<style scoped></style>
