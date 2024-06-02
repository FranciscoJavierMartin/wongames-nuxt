<template>
  <div>
    <h1><slot /></h1>
    <small>{{ color }}</small>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

type HeadingProps = {
  /**
   * Text color
   */
  color?: 'white' | 'black';
};

withDefaults(defineProps<HeadingProps>(), {
  color: 'black',
});
</script>
