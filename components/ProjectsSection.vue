<script setup lang="ts">
import { ArrowUpRight, CodeXml, Coins, Dices, Gamepad2, Github, Handshake, Lock, UserRound } from 'lucide-vue-next'
import { projects, profile } from '~/data/portfolio'

const icons = { CodeXml, Coins, Dices, Gamepad2, Handshake, UserRound } as const

// First project is featured full-width; the last one also goes full-width
// if it would otherwise sit alone on its row.
const isWide = (i: number) => i === 0 || (i === projects.length - 1 && projects.length % 2 === 0)
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
          :class="isWide(i) && 'md:col-span-2'"
        >
          <!-- preview -->
          <div class="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-ink-900" :class="isWide(i) && 'md:aspect-[21/8]'">
            <img
              v-if="p.image"
              :src="p.image"
              :alt="`${p.title} screenshot`"
              loading="lazy"
              class="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
            />
            <div v-else class="absolute inset-0 bg-gradient-to-br" :class="p.accent">
              <!-- drawn cover for projects without a public screenshot -->
              <div class="grid-bg absolute inset-0 opacity-60" />
              <div class="absolute inset-0 grid place-items-center">
                <div class="flex flex-col items-center gap-5 transition duration-500 group-hover:-translate-y-1.5">
                  <div class="grid h-20 w-20 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white shadow-2xl backdrop-blur-md transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <component :is="icons[p.icon as keyof typeof icons] ?? CodeXml" :size="36" :stroke-width="1.5" />
                  </div>
                  <span class="font-display text-lg font-semibold tracking-tight text-white/90 sm:text-2xl">{{ p.title }}</span>
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
            <div v-if="p.current || p.private" class="mt-2 flex flex-wrap items-center gap-2">
              <span v-if="p.current" class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-300">
                <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Currently working on
              </span>
              <span v-if="p.private" class="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                <Lock :size="12" /> Private client work
              </span>
            </div>
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
