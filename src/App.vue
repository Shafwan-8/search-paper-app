<script setup>
import { ref } from 'vue';
import axios from 'axios';

const searchQuery = ref('');
const inputError = ref('');
const selectedFilter = ref('buku');
const selectedYearFilter = ref('semua');
const fromYear = ref('');
const toYear = ref('');
const results = ref([]);
const isLoading = ref(false);
const hasSearched = ref(false);
const errorMsg = ref('');

const yearOptions = [
  { label: 'Semua Tahun', value: 'semua' },
  { label: '1 Thn Terakhir', value: '1_tahun' },
  { label: '3 Thn Terakhir', value: '3_tahun' },
  { label: '5 Thn Terakhir', value: '5_tahun' },
  { label: 'Kustom', value: 'kustom' }
];

const categoryOptions = [
  { label: 'Buku', value: 'buku' },
  { label: 'Jurnal', value: 'jurnal' },
  { label: 'Skripsi', value: 'skripsi' }
];

const suggestions = [
  'Artificial Intelligence',
  'Pengolahan Citra Digital',
  'Deep Learning',
  'Sistem Informasi Manajemen',
  'Pendidikan Karakter'
];

const handleSearch = async () => {
  // Validasi input kosong
  if (!searchQuery.value.trim()) {
    inputError.value = 'Silakan masukkan kata kunci pencarian terlebih dahulu.';
    return;
  }
  
  inputError.value = '';
  isLoading.value = true;
  hasSearched.value = true;
  errorMsg.value = '';
  results.value = [];

  try {
    const params = {
      q: searchQuery.value.trim(),
      type: selectedFilter.value,
    };

    if (selectedYearFilter.value === 'kustom') {
      if (fromYear.value) params.from_year = fromYear.value;
      if (toYear.value) params.to_year = toYear.value;
    } else if (selectedYearFilter.value !== 'semua') {
      params.year = selectedYearFilter.value;
    }

    const response = await axios.get('http://localhost:5000/api/search', { params });
    results.value = response.data.data || [];
  } catch (err) {
    errorMsg.value = 'Terjadi kesalahan saat mengambil data dari server. Pastikan backend aktif.';
  } finally {
    isLoading.value = false;
  }
};

const onInput = () => {
  if (inputError.value && searchQuery.value.trim()) {
    inputError.value = '';
  }
};

const quickSearch = (term) => {
  searchQuery.value = term;
  inputError.value = '';
  handleSearch();
};

const clearSearch = () => {
  searchQuery.value = '';
  inputError.value = '';
};
</script>

<template>
  <div class="min-h-screen bg-[#0E0F11] text-[#F3F4F6] flex flex-col items-center px-4 sm:px-6 py-10 selection:bg-[#016A71] selection:text-white">
    <!-- Header Section -->
    <header class="w-full max-w-3xl text-center pt-6 pb-2">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1C1E] border border-white/10 text-xs text-[#2DD4BF] font-medium mb-4 shadow-xs">
        <span class="w-2 h-2 rounded-full bg-[#016A71] animate-pulse"></span>
        Academic Discovery Engine
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
        Cari Literatur
      </h1>
      <p class="mt-2 text-sm sm:text-base text-gray-400 max-w-lg mx-auto">
        Temukan referensi buku, artikel jurnal, dan skripsi ilmiah dalam satu ruang pencarian terpadu.
      </p>
    </header>

    <!-- Main Content Area -->
    <main class="w-full max-w-3xl mt-6 space-y-6">
      <!-- Search Form -->
      <form @submit.prevent="handleSearch" class="flex flex-col gap-4">
        <!-- Input Capsule -->
        <div class="flex flex-col gap-2">
          <div 
            :class="[
              'relative flex items-center bg-[#17181A] border rounded-2xl transition-all duration-200 shadow-sm',
              inputError 
                ? 'border-[#E10600] ring-2 ring-[#E10600]/20' 
                : 'border-white/12 focus-within:border-[#016A71] focus-within:ring-2 focus-within:ring-[#016A71]/25'
            ]"
          >
            <!-- Search Icon -->
            <div class="pl-4.5 pr-2 text-gray-400 flex items-center pointer-events-none">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <!-- Input Field -->
            <input
              v-model="searchQuery"
              @input="onInput"
              type="text"
              placeholder="Ketik topik, judul buku, jurnal, atau skripsi..."
              class="w-full py-4 pr-24 text-white bg-transparent focus:outline-none text-sm sm:text-base placeholder-gray-500"
            />

            <!-- Clear Button -->
            <button
              v-if="searchQuery"
              type="button"
              @click="clearSearch"
              class="absolute right-22 p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              title="Hapus teks"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="absolute right-2 px-5 py-2.5 bg-[#016A71] hover:bg-[#014F54] active:bg-[#013B40] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm rounded-xl transition-all duration-150 cursor-pointer shadow-sm flex items-center gap-1.5"
            >
              <span v-if="!isLoading">Cari</span>
              <span v-else class="flex items-center gap-1.5">
                <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
              </span>
            </button>
          </div>

          <!-- Alert Input Error -->
          <div 
            v-if="inputError" 
            class="flex items-center gap-1.5 text-xs text-[#DC6973] pl-2 animate-fade-in"
          >
            <svg class="w-4 h-4 shrink-0 text-[#E10600]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <span>{{ inputError }}</span>
          </div>
        </div>

        <!-- Filter Control Card -->
        <div class="bg-[#141517] border border-white/8 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xs">
          <!-- Filter Kategori -->
          <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span class="text-gray-400 font-medium w-20 shrink-0">Kategori:</span>
            <div class="flex flex-wrap gap-2">
              <label 
                v-for="cat in categoryOptions" 
                :key="cat.value"
                :class="[
                  'px-3.5 py-1.5 rounded-xl cursor-pointer transition-all duration-150 text-xs sm:text-sm font-medium border select-none',
                  selectedFilter === cat.value 
                    ? 'bg-[#016A71] text-white border-[#016A71] shadow-xs' 
                    : 'bg-[#1C1E21] text-gray-300 border-white/6 hover:bg-[#25282D] hover:text-white'
                ]"
              >
                <input
                  type="radio"
                  name="type_filter"
                  :value="cat.value"
                  v-model="selectedFilter"
                  class="hidden"
                />
                {{ cat.label }}
              </label>
            </div>
          </div>

          <!-- Filter Tahun -->
          <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm pt-3 border-t border-white/6">
            <span class="text-gray-400 font-medium w-20 shrink-0">Tahun:</span>
            <div class="flex flex-wrap gap-2 items-center">
              <label 
                v-for="opt in yearOptions" 
                :key="opt.value"
                :class="[
                  'px-3.5 py-1.5 rounded-xl cursor-pointer transition-all duration-150 text-xs sm:text-sm font-medium border select-none',
                  selectedYearFilter === opt.value 
                    ? 'bg-[#016A71] text-white border-[#016A71] shadow-xs' 
                    : 'bg-[#1C1E21] text-gray-300 border-white/6 hover:bg-[#25282D] hover:text-white'
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
            class="flex items-center gap-3 pt-2 pl-0 sm:pl-24 text-xs sm:text-sm animate-fade-in"
          >
            <div class="flex items-center gap-2">
              <label class="text-xs text-gray-400">Dari:</label>
              <input
                v-model="fromYear"
                type="number"
                placeholder="2018"
                min="1900"
                max="2099"
                class="w-24 px-3 py-1.5 text-xs sm:text-sm bg-[#1A1C1E] border border-white/12 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-[#016A71] focus:border-[#016A71] focus:outline-none"
              />
            </div>
            <span class="text-gray-500">-</span>
            <div class="flex items-center gap-2">
              <label class="text-xs text-gray-400">Sampai:</label>
              <input
                v-model="toYear"
                type="number"
                placeholder="2024"
                min="1900"
                max="2099"
                class="w-24 px-3 py-1.5 text-xs sm:text-sm bg-[#1A1C1E] border border-white/12 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-[#016A71] focus:border-[#016A71] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </form>

      <!-- Suggestion Tags (Ketika belum mencari) -->
      <div v-if="!hasSearched && !isLoading" class="pt-2">
        <span class="text-xs text-gray-500 font-medium block mb-2.5">Topik Populer:</span>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="item in suggestions"
            :key="item"
            @click="quickSearch(item)"
            class="px-3 py-1 rounded-lg bg-[#18191B] hover:bg-[#202226] border border-white/6 text-xs text-gray-300 hover:text-white transition-all cursor-pointer"
          >
            {{ item }}
          </button>
        </div>
      </div>

      <!-- Loading State (Skeleton Sederhana) -->
      <div v-if="isLoading" class="space-y-4 pt-4">
        <div class="flex items-center justify-center gap-2 text-sm text-[#2DD4BF] py-2">
          <svg class="animate-spin h-5 w-5 text-[#016A71]" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <span>Mengambil data literatur...</span>
        </div>
        <div 
          v-for="n in 3" 
          :key="n"
          class="p-5 bg-[#17181A] border border-white/6 rounded-2xl animate-pulse space-y-3"
        >
          <div class="h-4 bg-white/10 rounded w-20"></div>
          <div class="h-5 bg-white/10 rounded w-3/4"></div>
          <div class="h-4 bg-white/5 rounded w-1/2"></div>
        </div>
      </div>

      <!-- Error State -->
      <div 
        v-if="errorMsg" 
        class="p-4 bg-[#E10600]/10 border border-[#E10600]/30 rounded-2xl text-center text-[#DC6973] text-sm"
      >
        {{ errorMsg }}
      </div>

      <!-- Search Results Section -->
      <section v-if="!isLoading && results.length > 0" class="space-y-4 pt-2">
        <div class="flex items-center justify-between px-1 text-xs text-gray-400 font-medium">
          <span>Menampilkan <strong class="text-white">{{ results.length }}</strong> hasil</span>
          <span class="text-gray-500">OpenAlex Knowledge Base</span>
        </div>

        <article
          v-for="item in results"
          :key="item.id"
          class="group p-5 bg-[#161719] hover:bg-[#1C1E21] border border-white/8 hover:border-[#016A71]/50 rounded-2xl transition-all duration-200 shadow-xs flex flex-col gap-3"
        >
          <!-- Badges / Header Card -->
          <div class="flex items-center justify-between gap-2 flex-wrap">
            <div class="flex items-center gap-2">
              <span 
                v-if="item.type === 'book'" 
                class="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-[#0284C7]/15 text-[#38BDF8] border border-[#0284C7]/30 uppercase tracking-wider"
              >
                Buku
              </span>
              <span 
                v-else-if="item.type === 'article'" 
                class="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-[#059669]/15 text-[#34D399] border border-[#059669]/30 uppercase tracking-wider"
              >
                Jurnal
              </span>
              <span 
                v-else-if="item.type === 'dissertation'" 
                class="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-[#DB2777]/15 text-[#F472B6] border border-[#DB2777]/30 uppercase tracking-wider"
              >
                Skripsi
              </span>
              <span 
                v-else 
                class="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-white/10 text-gray-300 border border-white/10 uppercase tracking-wider"
              >
                {{ item.type || 'Dokumen' }}
              </span>

              <span 
                v-if="item.isOpenAccess" 
                class="px-2 py-0.5 text-[11px] font-medium text-[#2DD4BF] bg-[#016A71]/20 border border-[#016A71]/35 rounded-md"
              >
                Open Access
              </span>
            </div>

            <!-- Action Link Button -->
            <a 
              :href="item.link" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-xs text-[#2DD4BF] hover:text-white px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#016A71] transition-all"
            >
              <span>Buka Dokumen</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <!-- Document Title -->
          <h2 class="text-base sm:text-lg font-semibold text-white group-hover:text-[#2DD4BF] transition-colors leading-snug">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
              {{ item.title }}
            </a>
          </h2>

          <!-- Meta Author & Year -->
          <div class="flex items-center gap-4 text-xs sm:text-sm text-gray-400 pt-1 border-t border-white/5">
            <div class="flex items-center gap-1.5 truncate">
              <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="truncate">{{ item.author }}</span>
            </div>
            <div class="flex items-center gap-1.5 shrink-0 text-gray-400">
              <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{{ item.year }}</span>
            </div>
          </div>
        </article>
      </section>

      <!-- Empty State -->
      <div 
        v-else-if="hasSearched && !isLoading && !errorMsg && results.length === 0" 
        class="p-8 text-center bg-[#161719] border border-white/8 rounded-2xl space-y-2"
      >
        <div class="text-3xl mb-2">🔍</div>
        <h3 class="text-base font-semibold text-white">Tidak Ada Hasil Ditemukan</h3>
        <p class="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto">
          Coba ubah kata kunci pencarian atau sesuaikan kembali filter kategori dan tahun yang dipilih.
        </p>
      </div>
    </main>

    <!-- Footer -->
    <footer class="w-full max-w-3xl mt-16 pt-6 border-t border-white/6 text-center text-xs text-gray-500">
      <p>Academic Search Engine &bull; Terhubung dengan OpenAlex Open Access Database</p>
    </footer>
  </div>
</template>
