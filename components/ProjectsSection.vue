<script setup lang="ts">
import { ArrowUpRight, Github, Lock } from 'lucide-vue-next'
import { projects, profile } from '~/data/portfolio'
</script>

<template>
  <section id="projects" class="section">
    <div class="container-x">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          subtitle="Real projects I've built — from company websites to iGaming platforms."
        />
        <a v-reveal :href="profile.socials.github" target="_blank" rel="noopener" class="btn-ghost mb-14">
          <Github :size="16" /> More on GitHub
        </a>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="(p, i) in projects"
          :key="p.title"
          v-reveal="i === 0 ? 0 : ((i + 1) % 2) * 120"
          class="card card-hover group flex flex-col overflow-hidden"
          :class="i === 0 && 'md:col-span-2'"
        >
          <!-- preview -->
          <div class="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-ink-900" :class="i === 0 && 'md:aspect-[21/8]'">
            <img
              v-if="p.image"
              :src="p.image"
              :alt="`${p.title} screenshot`"
              loading="lazy"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div v-else class="absolute inset-0 bg-gradient-to-br" :class="p.accent">
              <!-- mock browser UI as placeholder -->
              <div class="absolute inset-x-8 bottom-0 top-10 rounded-t-xl border border-white/10 bg-ink-950/80 p-4 shadow-2xl transition duration-500 group-hover:-translate-y-2">
                <div class="mb-4 flex gap-1.5">
                  <span class="h-2 w-2 rounded-full bg-white/20" /><span class="h-2 w-2 rounded-full bg-white/20" /><span class="h-2 w-2 rounded-full bg-white/20" />
                </div>
                <div class="mb-3 h-3 w-2/3 rounded bg-white/15" />
                <div class="mb-6 h-3 w-1/3 rounded bg-white/10" />
                <div class="grid grid-cols-3 gap-3">
                  <div class="h-16 rounded-lg bg-white/[0.07]" />
                  <div class="h-16 rounded-lg bg-white/[0.07]" />
                  <div class="h-16 rounded-lg bg-white/[0.07]" />
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-1 flex-col p-6 sm:p-7">
            <div class="flex items-start justify-between gap-4">
              <h3 class="text-xl font-semibold">{{ p.title }}</h3>
              <div class="flex shrink-0 gap-2">
                <a v-if="p.code" :href="p.code" target="_blank" rel="noopener" aria-label="Source code" class="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:border-white/30 hover:text-white"><Github :size="16" /></a>
                <a v-if="p.live" :href="p.live" target="_blank" rel="noopener" aria-label="Live site" class="grid h-9 w-9 place-items-center rounded-full bg-white text-ink-950 transition hover:rotate-45"><ArrowUpRight :size="16" /></a>
              </div>
            </div>
            <p v-if="p.private" class="mt-2 inline-flex items-center gap-1.5 text-xs text-zinc-500">
              <Lock :size="12" /> Private client work
            </p>
            <p class="mt-3 flex-1 leading-relaxed text-zinc-400">{{ p.description }}</p>
            <ul class="mt-6 flex flex-wrap gap-2">
              <li v-for="t in p.tags" :key="t" class="chip">{{ t }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
