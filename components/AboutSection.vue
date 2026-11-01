<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { about, profile } from '~/data/portfolio'
</script>

<template>
  <section id="about" class="section">
    <div class="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
      <SectionHeading eyebrow="About me" title="">
        Turning ideas into <span class="text-gradient">fast, polished</span> websites.
      </SectionHeading>

      <div>
        <p
          v-for="(p, i) in about.paragraphs"
          :key="i"
          v-reveal="i * 80"
          class="mb-5 text-lg leading-relaxed text-zinc-400 first:text-zinc-200"
        >{{ p }}</p>

        <ul class="mt-10 grid gap-3 sm:grid-cols-2">
          <li
            v-for="(h, i) in about.highlights"
            :key="h"
            v-reveal="i * 70"
            class="card flex items-center gap-3 px-4 py-3.5 text-sm text-zinc-200"
          >
            <span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-soft"><Check :size="14" /></span>
            {{ h }}
          </li>
        </ul>

        <p v-reveal class="mt-10 font-mono text-sm text-zinc-500">
          <span class="text-white">{{ profile.years }} years</span> of shipping production frontends.
        </p>
      </div>
    </div>
  </section>
</template>
