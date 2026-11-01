<script setup lang="ts">
import { experience } from '~/data/portfolio'
</script>

<template>
  <section id="experience" class="section">
    <div class="container-x">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        subtitle="4+ years building production frontends for products and clients."
      />

      <ol class="relative ml-2 border-l border-white/10 sm:ml-4">
        <li
          v-for="(e, i) in experience"
          :key="i"
          v-reveal="i * 100"
          class="relative pb-12 pl-8 last:pb-0 sm:pl-12"
        >
          <span
            class="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-ink-950"
            :class="i === 0 ? 'bg-accent shadow-[0_0_0_4px_rgba(139,92,246,0.25)]' : 'bg-zinc-600'"
          />
          <div class="card card-hover p-6 sm:p-7">
            <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 class="text-xl font-semibold">{{ e.role }}</h3>
              <span class="font-mono text-xs text-zinc-500">{{ e.period }}</span>
            </div>
            <p class="mt-1 text-sm text-accent-soft">{{ e.company }}</p>
            <p class="mt-4 leading-relaxed text-zinc-400">{{ e.description }}</p>
            <ul class="mt-5 flex flex-wrap gap-2">
              <li v-for="t in e.tags" :key="t" class="chip">{{ t }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
