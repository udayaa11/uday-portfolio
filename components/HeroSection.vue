<script setup lang="ts">
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-vue-next'
import { profile, stats } from '~/data/portfolio'

const words = ['landing pages', 'business websites', 'web apps', 'redesigns']
const index = ref(0)
let timer: ReturnType<typeof setInterval> | undefined
onMounted(() => (timer = setInterval(() => (index.value = (index.value + 1) % words.length), 2400)))
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section id="top" class="relative flex min-h-screen flex-col justify-center pb-16 pt-32">
    <!-- background -->
    <div class="grid-bg pointer-events-none absolute inset-0" />
    <div class="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[140px]" />
    <div class="pointer-events-none absolute right-[-10%] top-1/2 h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-[120px]" />

    <div class="container-x relative grid items-center gap-16 lg:grid-cols-[1.25fr_1fr]">
      <div>
        <div v-reveal class="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 text-sm text-zinc-300">
          <span class="relative flex h-2.5 w-2.5">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          {{ profile.available ? 'Available for freelance projects' : 'Currently booked' }}
        </div>

        <h1 v-reveal="80" class="text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I'm {{ profile.name }}.<br />
          <span class="text-gradient">{{ profile.role }}</span>
        </h1>

        <p v-reveal="160" class="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400">
          {{ profile.intro }}
        </p>

        <p v-reveal="200" class="mt-5 font-mono text-sm text-zinc-500">
          <span class="text-accent-soft">→</span> I build
          <span class="relative inline-block min-w-[11ch] align-bottom">
            <Transition
              mode="out-in"
              enter-active-class="transition duration-300"
              enter-from-class="opacity-0 translate-y-2"
              leave-active-class="transition duration-200"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <span :key="index" class="inline-block text-white">{{ words[index] }}</span>
            </Transition>
          </span>
        </p>

        <div v-reveal="260" class="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" class="btn-primary group">
            View my work
            <ArrowRight :size="16" class="transition group-hover:translate-x-1" />
          </a>
          <a href="#contact" class="btn-ghost">Let's talk</a>
          <a v-if="profile.resumeUrl" :href="profile.resumeUrl" download class="btn-ghost">
            <Download :size="16" /> Resume
          </a>
        </div>

        <div v-reveal="320" class="mt-10 flex items-center gap-5 text-zinc-500">
          <a :href="profile.socials.github" target="_blank" rel="noopener" aria-label="GitHub" class="transition hover:text-white"><Github :size="20" /></a>
          <a v-if="profile.socials.linkedin" :href="profile.socials.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn" class="transition hover:text-white"><Linkedin :size="20" /></a>
          <a :href="`mailto:${profile.email}`" aria-label="Email" class="transition hover:text-white"><Mail :size="20" /></a>
          <span class="h-4 w-px bg-white/10" />
          <span class="flex items-center gap-1.5 text-sm"><MapPin :size="15" /> {{ profile.location }}</span>
        </div>
      </div>

      <!-- code card -->
      <div v-reveal="200" class="relative hidden lg:block">
        <div class="animate-float">
          <div class="card overflow-hidden !bg-ink-900/80 shadow-2xl shadow-violet-900/20">
            <div class="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <span class="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span class="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span class="h-3 w-3 rounded-full bg-[#28c840]" />
              <span class="ml-3 font-mono text-xs text-zinc-500">developer.ts</span>
            </div>
            <pre class="overflow-hidden p-6 font-mono text-[13px] leading-7"><code><span class="text-violet-400">const</span> <span class="text-sky-300">developer</span> = {
  <span class="text-zinc-400">name</span>: <span class="text-emerald-300">'{{ profile.fullName }}'</span>,
  <span class="text-zinc-400">role</span>: <span class="text-emerald-300">'{{ profile.role }}'</span>,
  <span class="text-zinc-400">experience</span>: <span class="text-amber-300">'{{ profile.years }} years'</span>,
  <span class="text-zinc-400">stack</span>: [
    <span class="text-emerald-300">'Vue'</span>, <span class="text-emerald-300">'Nuxt'</span>, <span class="text-emerald-300">'Svelte'</span>,
    <span class="text-emerald-300">'TypeScript'</span>, <span class="text-emerald-300">'Tailwind'</span>,
  ],
  <span class="text-zinc-400">openToWork</span>: <span class="text-violet-400">{{ profile.available }}</span>,
}</code></pre>
          </div>
        </div>
        <div class="card absolute -bottom-8 -left-10 flex items-center gap-3 !bg-ink-800/90 px-5 py-4 shadow-xl">
          <span class="font-display text-3xl font-bold text-white">{{ profile.years }}</span>
          <span class="text-xs leading-tight text-zinc-400">years building<br />for the web</span>
        </div>
      </div>
    </div>

    <!-- stats -->
    <div class="container-x relative mt-20">
      <div v-reveal="380" class="card grid grid-cols-2 divide-white/[0.06] !bg-ink-900/80 sm:grid-cols-4 sm:divide-x">
        <div v-for="s in stats" :key="s.label" class="px-6 py-6 text-center">
          <div class="font-display text-3xl font-bold text-white">{{ s.value }}</div>
          <div class="mt-1 text-xs uppercase tracking-wider text-zinc-500">{{ s.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
