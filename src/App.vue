<script setup>
import { ref } from 'vue';
import axios from 'axios';

const searchQuery = ref('');
const selectedFilter = ref('semua');
const results = ref([]);
const isLoading = ref(false);
const errorMsg = ref('');

const handleSearch = async () => {
  if (!searchQuery.value.trim()) return;
  
  isLoading.value = true;
  errorMsg.value = '';
  results.value = [];

  try {
    const response = await axios.get('http://localhost:5000/api/search', {
      params: {
        q: searchQuery.value,
        type: selectedFilter.value
      }
    });
    results.value = response.data.data;
  } catch (err) {
    errorMsg.value = 'Terjadi kesalahan saat mengambil data.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center p-6">
    <!-- Header / Judul Utama -->
    <header class="mt-16 text-center">
      <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
        Cari Literatur
      </h1>
      <p class="mt-3 text-gray-500 text-sm md:text-base">
        Temukan buku, jurnal, dan skripsi dalam satu tempat
      </p>
    </header>

    <!-- Search Capsule Bar & Filter -->
    <main class="w-full max-w-2xl mt-8">
      <form @submit.prevent="handleSearch" class="flex flex-col gap-4">
        <!-- Input Capsule -->
        <div class="relative flex items-center">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Ketik judul buku atau skripsi..."
            class="w-full py-4 pl-6 pr-32 text-gray-900 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <button
            type="submit"
            class="absolute right-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors"
          >
            Cari
          </button>
        </div>

        <!-- Opsi Filter -->
        <div class="flex justify-center gap-2 sm:gap-4 text-sm font-medium text-gray-600">
          <label 
            v-for="filter in ['buku', 'jurnal', 'skripsi']" 
            :key="filter"
            :class="[
              'px-4 py-1.5 rounded-full cursor-pointer transition-all capitalize',
              selectedFilter === filter 
                ? 'bg-gray-900 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            ]"
          >
            <input
              type="radio"
              name="filter"
              :value="filter"
              v-model="selectedFilter"
              class="hidden"
            />
            {{ filter }}
          </label>
        </div>
      </form>

      <!-- Status Loading & Error -->
      <div v-if="isLoading" class="mt-8 text-center text-gray-500">
        Mencari dokumen...
      </div>
      <div v-if="errorMsg" class="mt-8 text-center text-red-500">
        {{ errorMsg }}
      </div>

      <!-- Hasil Pencarian -->
      <section class="mt-8 space-y-4">
        <article
          v-for="item in results"
          :key="item.id"
          class="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <span v-if="item.type == 'book'" class="inline-block px-2.5 py-0.5 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full uppercase mb-2">
            Buku / {{ item.type }}
          </span>
          <span v-else-if="item.type == 'article'" class="inline-block px-2.5 py-0.5 text-xs font-semibold text-green-800 bg-green-100 rounded-full uppercase mb-2">
            Jurnal / {{ item.type }}
          </span>
          <span v-else-if="item.type == 'dissertation'" class="inline-block px-2.5 py-0.5 text-xs font-semibold text-red-800 bg-red-100 rounded-full uppercase mb-2">
            Skripsi / {{ item.type }}
          </span>
          <h2 class="text-lg font-bold text-gray-900 leading-snug">
            <a :href="item.link" target="_blank" class="hover:underline hover:text-blue-600">
              {{ item.title }}
            </a>
          </h2>
          <p class="mt-1 text-sm text-gray-600">
            {{ item.author }} • {{ item.year }}
          </p>
        </article>
      </section>
    </main>
  </div>
</template>
