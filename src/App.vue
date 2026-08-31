<script setup>
import { ref } from 'vue';
import axios from 'axios';

const searchQuery = ref('');
const selectedFilter = ref('buku');
const selectedYearFilter = ref('semua');
const fromYear = ref('');
const toYear = ref('');
const results = ref([]);
const isLoading = ref(false);
const errorMsg = ref('');

const yearOptions = [
  { label: 'Semua Tahun', value: 'semua' },
  { label: '1 Tahun Terakhir', value: '1_tahun' },
  { label: '3 Tahun Terakhir', value: '3_tahun' },
  { label: '5 Tahun Terakhir', value: '5_tahun' },
  { label: 'Kustom', value: 'kustom' }
];

const handleSearch = async () => {
  if (!searchQuery.value.trim()) return;
  
  isLoading.value = true;
  errorMsg.value = '';
  results.value = [];

  try {
    const params = {
      q: searchQuery.value,
      type: selectedFilter.value,
    };

    if (selectedYearFilter.value === 'kustom') {
      if (fromYear.value) params.from_year = fromYear.value;
      if (toYear.value) params.to_year = toYear.value;
    } else if (selectedYearFilter.value !== 'semua') {
      params.year = selectedYearFilter.value;
    }

    const response = await axios.get('http://localhost:5000/api/search', { params });
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
    <header class="mt-12 text-center">
      <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
        Cari Literatur
      </h1>
      <p class="mt-3 text-gray-500 text-sm md:text-base">
        Temukan buku, jurnal, dan skripsi dalam satu tempat
      </p>
    </header>

    <!-- Search Capsule Bar & Filter -->
    <main class="w-full max-w-2xl mt-8">
      <form @submit.prevent="handleSearch" class="flex flex-col gap-5">
        <!-- Input Capsule -->
        <div class="relative flex items-center">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Ketik judul buku, jurnal, atau topik..."
            class="w-full py-4 pl-6 pr-32 text-gray-900 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
          />
          <button
            type="submit"
            :disabled="isLoading"
            class="absolute right-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-full transition-colors cursor-pointer"
          >
            {{ isLoading ? 'Mencari...' : 'Cari' }}
          </button>
        </div>

        <!-- Filter Container -->
        <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-xs space-y-4">
          <!-- Filter Jenis Dokumen -->
          <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm">
            <span class="font-medium text-gray-700 w-24 shrink-0">Kategori:</span>
            <div class="flex flex-wrap gap-2">
              <label 
                v-for="filter in ['buku', 'jurnal', 'skripsi']" 
                :key="filter"
                :class="[
                  'px-3.5 py-1.5 rounded-full cursor-pointer transition-all capitalize text-xs sm:text-sm font-medium',
                  selectedFilter === filter 
                    ? 'bg-gray-900 text-white shadow-xs' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                <input
                  type="radio"
                  name="type_filter"
                  :value="filter"
                  v-model="selectedFilter"
                  class="hidden"
                />
                {{ filter }}
              </label>
            </div>
          </div>

          <!-- Filter Tahun Pembuatan -->
          <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm pt-3 border-t border-gray-100">
            <span class="font-medium text-gray-700 w-24 shrink-0">Tahun:</span>
            <div class="flex flex-wrap gap-2 items-center">
              <label 
                v-for="opt in yearOptions" 
                :key="opt.value"
                :class="[
                  'px-3.5 py-1.5 rounded-full cursor-pointer transition-all text-xs sm:text-sm font-medium',
                  selectedYearFilter === opt.value 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                <input
                  type="radio"
                  name="year_filter"
                  :value="opt.value"
                  v-model="selectedYearFilter"
                  class="hidden"
                />
                {{ opt.label }}
              </label>
            </div>
          </div>

          <!-- Input Rentang Tahun Kustom -->
          <div 
            v-if="selectedYearFilter === 'kustom'" 
            class="flex items-center gap-3 pt-2 pl-0 sm:pl-27 text-sm"
          >
            <div class="flex items-center gap-2">
              <label class="text-xs text-gray-500 font-medium">Dari:</label>
              <input
                v-model="fromYear"
                type="number"
                placeholder="2018"
                min="1900"
                max="2099"
                class="w-24 px-3 py-1.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
              />
            </div>
            <span class="text-gray-400">-</span>
            <div class="flex items-center gap-2">
              <label class="text-xs text-gray-500 font-medium">Sampai:</label>
              <input
                v-model="toYear"
                type="number"
                placeholder="2024"
                min="1900"
                max="2099"
                class="w-24 px-3 py-1.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>
        </div>
      </form>

      <!-- Status Loading & Error -->
      <div v-if="isLoading" class="mt-8 text-center text-gray-500 flex items-center justify-center gap-2">
        <svg class="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span>Mencari dokumen...</span>
      </div>
      <div v-if="errorMsg" class="mt-8 p-4 bg-red-50 border border-red-200 rounded-xl text-center text-red-600 text-sm">
        {{ errorMsg }}
      </div>

      <!-- Hasil Pencarian -->
      <section v-if="!isLoading && results.length > 0" class="mt-8 space-y-4">
        <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider px-1">
          Ditemukan {{ results.length }} Hasil
        </div>
        <article
          v-for="item in results"
          :key="item.id"
          class="p-5 bg-white border border-gray-200 rounded-xl shadow-xs hover:shadow-md transition-shadow"
        >
          <div class="flex items-center gap-2 mb-2">
            <span v-if="item.type == 'book'" class="inline-block px-2.5 py-0.5 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full uppercase">
              Buku
            </span>
            <span v-else-if="item.type == 'article'" class="inline-block px-2.5 py-0.5 text-xs font-semibold text-green-800 bg-green-100 rounded-full uppercase">
              Jurnal
            </span>
            <span v-else-if="item.type == 'dissertation'" class="inline-block px-2.5 py-0.5 text-xs font-semibold text-red-800 bg-red-100 rounded-full uppercase">
              Skripsi
            </span>
            <span v-else class="inline-block px-2.5 py-0.5 text-xs font-semibold text-gray-800 bg-gray-100 rounded-full uppercase">
              {{ item.type || 'Dokumen' }}
            </span>

            <span v-if="item.isOpenAccess" class="inline-block px-2 py-0.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full">
              Open Access
            </span>
          </div>

          <h2 class="text-lg font-bold text-gray-900 leading-snug">
            <a :href="item.link" target="_blank" class="hover:underline hover:text-blue-600">
              {{ item.title }}
            </a>
          </h2>
          <p class="mt-1 text-sm text-gray-600">
            <span class="font-medium text-gray-800">{{ item.author }}</span> • <span class="text-blue-700 font-medium">Tahun {{ item.year }}</span>
          </p>
        </article>
      </section>

      <!-- Hasil Kosong -->
      <div v-else-if="!isLoading && !errorMsg && searchQuery && results.length === 0" class="mt-8 text-center text-gray-500 text-sm">
        Tidak ditemukan hasil untuk pencarian dan filter yang dipilih.
      </div>
    </main>
  </div>
</template>

