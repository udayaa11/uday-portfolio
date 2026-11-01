<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; subtitle?: string; center?: boolean }>()
</script>

<template>
  <div v-reveal class="mb-14 max-w-2xl" :class="center && 'mx-auto text-center'">
    <p class="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-soft">
      <span class="h-px w-6 bg-accent-soft/60" />{{ eyebrow }}
    </p>
    <h2 class="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
      <slot>{{ title }}</slot>
    </h2>
    <p v-if="subtitle" class="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">{{ subtitle }}</p>
  </div>
</template>
