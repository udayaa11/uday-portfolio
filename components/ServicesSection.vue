<script setup lang="ts">
import { Briefcase, Check, CodeXml, RefreshCw, Rocket } from 'lucide-vue-next'
import { services } from '~/data/portfolio'

const icons = { Rocket, Briefcase, RefreshCw, CodeXml } as const
</script>

<template>
  <section id="services" class="section">
    <div class="pointer-events-none absolute left-0 top-1/3 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[130px]" />
    <div class="container-x relative">
      <SectionHeading
        eyebrow="Services"
        title=""
        subtitle="Whether you need a brand-new site or a refresh of an old one, I'll handle it end-to-end — design, build and launch."
        center
      >
        How I can <span class="text-gradient">help your business</span>
      </SectionHeading>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(s, i) in services"
          :key="s.title"
          v-reveal="i * 90"
          class="card card-hover group relative overflow-hidden p-7"
        >
          <div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
          <div class="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-cyan-400/10 text-accent-soft transition group-hover:scale-110">
            <component :is="icons[s.icon as keyof typeof icons]" :size="22" />
          </div>
          <h3 class="mt-6 text-lg font-semibold">{{ s.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-zinc-400">{{ s.description }}</p>
          <ul class="mt-6 space-y-2 border-t border-white/[0.06] pt-5">
            <li v-for="pt in s.points" :key="pt" class="flex items-center gap-2 text-sm text-zinc-300">
              <Check :size="14" class="text-accent-soft" /> {{ pt }}
            </li>
          </ul>
        </div>
      </div>

      <div v-reveal class="mt-12 text-center">
        <a href="#contact" class="btn-primary">Start a project</a>
      </div>
    </div>
  </section>
</template>
