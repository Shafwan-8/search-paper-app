<script setup>
import { ref } from 'vue'
import viteLogo from '../assets/vite.svg'
import vueLogo from '../assets/vue.svg'

const count = ref(0)
</script>

<template>
  <div class="text-center space-y-8 p-8">
    <!-- Logo Section -->
    <div class="flex items-center justify-center gap-6">
      <img :src="viteLogo" class="w-20 h-20 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 hover:scale-110" alt="Vite logo" />
      <span class="text-4xl text-white/30 font-thin">+</span>
      <img :src="vueLogo" class="w-20 h-20 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 hover:scale-110" alt="Vue logo" />
      <span class="text-4xl text-white/30 font-thin">+</span>
      <svg class="w-20 h-20 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 hover:scale-110" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#38bdf8"/>
      </svg>
    </div>

    <!-- Title -->
    <div class="space-y-3">
      <h1 class="text-5xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
        Vite + Vue + Tailwind
      </h1>
      <p class="text-lg text-slate-400">
        Project siap digunakan! Edit <code class="bg-white/10 px-2 py-1 rounded text-purple-300 text-sm">src/App.vue</code> untuk memulai.
      </p>
    </div>

    <!-- Counter Button -->
    <div>
      <button
        type="button"
        @click="count++"
        class="px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        Count: {{ count }}
      </button>
    </div>

    <!-- Feature Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
      <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
        <div class="text-2xl mb-2">⚡</div>
        <h3 class="text-white font-semibold mb-1">Vite</h3>
        <p class="text-slate-400 text-sm">Lightning fast HMR</p>
      </div>
      <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
        <div class="text-2xl mb-2">💚</div>
        <h3 class="text-white font-semibold mb-1">Vue 3</h3>
        <p class="text-slate-400 text-sm">Composition API</p>
      </div>
      <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
        <div class="text-2xl mb-2">🎨</div>
        <h3 class="text-white font-semibold mb-1">Tailwind v4</h3>
        <p class="text-slate-400 text-sm">Utility-first CSS</p>
      </div>
    </div>
  </div>
</template>
