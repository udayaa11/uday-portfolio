<script setup lang="ts">
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-vue-next'
import { profile } from '~/data/portfolio'
</script>

<template>
  <footer class="border-t border-white/[0.06] py-10">
    <div class="container-x flex flex-col items-center justify-between gap-6 text-sm text-zinc-500 sm:flex-row">
      <p>© {{ new Date().getFullYear() }} {{ profile.fullName }}. Built with Nuxt &amp; Tailwind.</p>
      <div class="flex items-center gap-5">
        <a :href="profile.socials.github" target="_blank" rel="noopener" aria-label="GitHub" class="hover:text-white"><Github :size="18" /></a>
        <a v-if="profile.socials.linkedin" :href="profile.socials.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn" class="hover:text-white"><Linkedin :size="18" /></a>
        <a :href="`mailto:${profile.email}`" aria-label="Email" class="hover:text-white"><Mail :size="18" /></a>
        <a href="#top" class="flex items-center gap-1 hover:text-white">Back to top <ArrowUpRight :size="14" /></a>
      </div>
    </div>
  </footer>
</template>
