<script setup lang="ts">
import { Check, Copy, Github, Linkedin, Mail, Send } from 'lucide-vue-next'
import { profile } from '~/data/portfolio'

const form = reactive({ name: '', email: '', budget: '', message: '' })
const copied = ref(false)

// No backend needed: opens the visitor's mail app with everything pre-filled.
// Swap for Formspree / Web3Forms later if you want submissions without a mail client.
function submit() {
  const subject = encodeURIComponent(`Project enquiry from ${form.name}`)
  const body = encodeURIComponent(
    `${form.message}\n\n— ${form.name}\n${form.email}${form.budget ? `\nBudget: ${form.budget}` : ''}`,
  )
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {}
}

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 transition focus:border-accent/60 focus:bg-white/[0.05] focus:outline-none focus:ring-4 focus:ring-accent/10'
</script>

<template>
  <section id="contact" class="section">
    <div class="container-x">
      <div v-reveal class="card relative overflow-hidden !bg-ink-900/70 p-6 sm:p-12 lg:p-16">
        <div class="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
        <div class="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div class="relative grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p class="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-soft">
              <span class="h-px w-6 bg-accent-soft/60" />Contact
            </p>
            <h2 class="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Have a project in mind? <span class="text-gradient">Let's build it.</span>
            </h2>
            <p class="mt-5 max-w-md text-lg leading-relaxed text-zinc-400">
              Tell me about your idea and I'll get back to you within 24 hours with next steps and a free estimate.
            </p>

            <div class="mt-10 space-y-3">
              <button class="card group flex w-full items-center gap-4 p-4 text-left hover:border-accent/40" @click="copyEmail">
                <span class="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent-soft"><Mail :size="18" /></span>
                <span class="flex-1">
                  <span class="block text-xs text-zinc-500">Email</span>
                  <span class="block break-all text-white">{{ profile.email }}</span>
                </span>
                <component :is="copied ? Check : Copy" :size="16" class="text-zinc-500 group-hover:text-white" />
              </button>
              <div class="grid gap-3" :class="profile.socials.linkedin ? 'grid-cols-2' : 'grid-cols-1'">
                <a :href="profile.socials.github" target="_blank" rel="noopener" class="card flex items-center gap-3 p-4 text-white hover:border-accent/40">
                  <Github :size="18" class="text-zinc-400" /> GitHub
                </a>
                <a v-if="profile.socials.linkedin" :href="profile.socials.linkedin" target="_blank" rel="noopener" class="card flex items-center gap-3 p-4 text-white hover:border-accent/40">
                  <Linkedin :size="18" class="text-zinc-400" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form class="space-y-4" @submit.prevent="submit">
            <div class="grid gap-4 sm:grid-cols-2">
              <label class="block">
                <span class="mb-2 block text-sm text-zinc-400">Your name</span>
                <input v-model="form.name" required type="text" placeholder="Jane Smith" :class="inputClass" />
              </label>
              <label class="block">
                <span class="mb-2 block text-sm text-zinc-400">Email</span>
                <input v-model="form.email" required type="email" placeholder="jane@company.com" :class="inputClass" />
              </label>
            </div>
            <label class="block">
              <span class="mb-2 block text-sm text-zinc-400">Budget (optional)</span>
              <select v-model="form.budget" :class="inputClass" class="appearance-none">
                <option value="" class="bg-ink-900">Select a range</option>
                <option class="bg-ink-900">Under $500</option>
                <option class="bg-ink-900">$500 – $1,500</option>
                <option class="bg-ink-900">$1,500 – $5,000</option>
                <option class="bg-ink-900">$5,000+</option>
              </select>
            </label>
            <label class="block">
              <span class="mb-2 block text-sm text-zinc-400">Project details</span>
              <textarea v-model="form.message" required rows="5" placeholder="Tell me about your project, goals and timeline…" :class="inputClass" class="resize-none" />
            </label>
            <button type="submit" class="btn-primary group w-full !py-3.5">
              Send message <Send :size="16" class="transition group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
