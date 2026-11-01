<script setup lang="ts">
import { skills } from '~/data/portfolio'

const marquee = skills.flatMap((g) => g.items)
</script>

<template>
  <section id="skills" class="section">
    <div class="container-x">
      <SectionHeading
        eyebrow="Skills"
        title="My toolkit"
        subtitle="Modern, battle-tested tools I use to build fast and maintainable frontends."
      />

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(g, i) in skills"
          :key="g.group"
          v-reveal="i * 90"
          class="card card-hover group p-6"
        >
          <p class="font-mono text-xs text-zinc-500">0{{ i + 1 }}</p>
          <h3 class="mt-3 text-lg font-semibold">{{ g.group }}</h3>
          <ul class="mt-5 flex flex-wrap gap-2">
            <li v-for="s in g.items" :key="s" class="chip transition group-hover:border-accent/30">{{ s }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- infinite marquee -->
    <div class="relative mt-20 overflow-hidden border-y border-white/[0.06] py-6 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div class="flex w-max animate-marquee gap-12">
        <span
          v-for="(s, i) in [...marquee, ...marquee]"
          :key="i"
          class="flex items-center gap-12 whitespace-nowrap font-display text-2xl font-semibold text-zinc-600 sm:text-3xl"
        >
          {{ s }} <span class="text-accent/60">✦</span>
        </span>
      </div>
    </div>
  </section>
</template>
