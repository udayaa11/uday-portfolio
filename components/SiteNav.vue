<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { profile } from '~/data/portfolio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
]

const scrolled = ref(false)
const open = ref(false)
const active = ref('')

onMounted(() => {
  const onScroll = () => (scrolled.value = window.scrollY > 20)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) active.value = `#${e.target.id}`
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  document.querySelectorAll('main section[id]').forEach((s) => io.observe(s))

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    io.disconnect()
  })
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled || open ? 'border-b border-white/[0.06] bg-ink-950/75 backdrop-blur-xl' : 'border-b border-transparent'"
  >
    <nav class="container-x flex h-16 items-center justify-between">
      <a href="#top" class="group flex items-center gap-2.5 font-display text-lg font-semibold text-white">
        <span class="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-sm text-white transition group-hover:rotate-6">
          {{ profile.name[0] }}
        </span>
        <span>{{ profile.name }}<span class="text-accent-soft">.</span></span>
      </a>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="l in links" :key="l.href">
          <a
            :href="l.href"
            class="rounded-full px-4 py-2 text-sm transition"
            :class="active === l.href ? 'bg-white/[0.07] text-white' : 'text-zinc-400 hover:text-white'"
          >{{ l.label }}</a>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <a href="#contact" class="btn-primary hidden !px-5 !py-2 sm:inline-flex">Hire me</a>
        <button
          class="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
          :aria-label="open ? 'Close menu' : 'Open menu'"
          :aria-expanded="open"
          @click="open = !open"
        >
          <X v-if="open" :size="18" />
          <Menu v-else :size="18" />
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="open" class="container-x pb-6 md:hidden">
        <ul class="flex flex-col gap-1">
          <li v-for="l in links" :key="l.href">
            <a :href="l.href" class="block rounded-xl px-4 py-3 text-zinc-300 hover:bg-white/5 hover:text-white" @click="open = false">{{ l.label }}</a>
          </li>
        </ul>
        <a href="#contact" class="btn-primary mt-4 w-full" @click="open = false">Hire me</a>
      </div>
    </Transition>
  </header>
</template>
