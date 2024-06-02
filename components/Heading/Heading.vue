<template>
  <h2
    class="text-xlarge"
    :class="{
      'text-white': color === 'white',
      'text-black': color === 'black',
      'border-l-[0.7rem] border-solid border-l-secondary pl-xxsmall': lineLeft,
      'relative mb-medium after:absolute after:bottom-[-0.5rem] after:left-[0px] after:w-[5rem] after:border-b-[0.4rem] after:border-solid after:border-b-primary':
        lineBottom,
    }"
  >
    <slot />
  </h2>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

type HeadingProps = {
  /**
   * Text color
   */
  color?: 'white' | 'black';
  /**
   * Add line to left
   */
  lineLeft?: boolean;
  /**
   * Add line to bottom
   */
  lineBottom?: boolean;
};

withDefaults(defineProps<HeadingProps>(), {
  color: 'black',
  lineLeft: false,
  lineBottom: false,
});
</script>
