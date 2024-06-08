<template>
  <button
    class="rounded border-0 bg-gradient-to-b from-[#ff5f5f] from-0% to-[#f062c0] to-50% py-xxsmall text-white"
    :class="{
      'h-[3rem] px-xxsmall text-xsmall': size === 'small',
      'h-large px-medium text-small': size === 'medium',
      'h-[5rem] px-xlarge text-medium': size === 'large',
      'w-full': fullWidth,
      'button-with-icon': $slots.icon,
    }"
  >
    <slot name="icon" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
};

withDefaults(defineProps<ButtonProps>(), {
  size: 'medium',
  fullWidth: false,
});
</script>
