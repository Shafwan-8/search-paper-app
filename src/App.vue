<script setup>
import { ref } from 'vue';
import axios from 'axios';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';

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
  { label: '1 Tahun Terakhir', value: '1_tahun' },
  { label: '3 Tahun Terakhir', value: '3_tahun' },
  { label: '5 Tahun Terakhir', value: '5_tahun' },
  { label: 'Kustom', value: 'kustom' }
];

const categoryOptions = [
  { label: 'Buku', value: 'buku' },
  { label: 'Jurnal', value: 'jurnal' },
  { label: 'Skripsi', value: 'skripsi' }
];

const suggestions = [
  'Artificial Intelligence',
  'Pendidikan Karakter',
  'Deep Learning',
  'Sistem Informasi Manajemen',
  'Metodologi Penelitian'
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
    errorMsg.value = 'Gagal menghubungi server. Pastikan backend service sedang berjalan di port 5000.';
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
  <div class="min-h-screen bg-[#231E15] text-[#FAF9F6] flex flex-col items-center px-4 sm:px-8 py-12">
    <!-- Header Section -->
    <header class="w-full max-w-3xl text-center pt-6 pb-6">
      <h1 class="font-serif-heading text-4xl sm:text-6xl font-normal text-[#FAF9F6] tracking-tight leading-[1.15]">
        Cari Literatur
      </h1>
      <div class="border-t-2 border-[#FFE01B] my-4 w-112.5 mx-auto border-dashed"></div>
      <p class="mt-4 text-base sm:text-lg text-[#DBD9D2] max-w-xl mx-auto leading-relaxed">
        Eksplorasi Buku Referensi, Artikel Jurnal Ilmiah, dan Skripsi dalam Satu Antarmuka yang Rapi dan Terstruktur.
      </p>
    </header>

    <!-- Main Content Area -->
    <main class="w-full max-w-3xl mt-8 space-y-6">
      <!-- Search Form -->
      <form @submit.prevent="handleSearch" class="flex flex-col gap-4">
        <!-- Input Search Bar -->
        <div class="flex flex-col gap-2">
          <div 
            :class="[
              'relative flex items-center bg-[#2D261C] border-2 rounded-[44px] transition-colors duration-150 shadow-sm pl-5 pr-3 py-2',
              inputError 
                ? 'border-[#E12437] ring-2 ring-[#E12437]/20' 
                : 'border-[#4A3F30] focus-within:border-[#FFE01B]'
            ]"
          >
            <!-- Search Icon -->
            <svg class="w-5 h-5 text-[#DBD9D2] shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

            <!-- Text Input -->
            <input
              v-model="searchQuery"
              @input="onInput"
              type="text"
              placeholder="Cari judul buku, topik riset, atau nama penulis..."
              class="w-full py-2.5 pr-20 text-[#FAF9F6] bg-transparent focus:outline-none text-base placeholder-[#8E8679]"
            />

            <!-- Clear Button -->
            <button
              v-if="searchQuery"
              type="button"
              @click="clearSearch"
              class="p-1.5 mr-2 text-[#DBD9D2] hover:text-[#FAF9F6] rounded-full hover:bg-[#3D3426] transition-colors"
              title="Hapus pencarian"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Primary Action Button (Mailchimp Signature Yellow Pill) -->
            <button
              type="submit"
              :disabled="isLoading"
              class="px-6 py-2.5 bg-[#FFE01B] hover:bg-[#E6CB00] active:bg-[#CCB000] disabled:opacity-50 disabled:cursor-not-allowed text-[#000000] font-semibold text-sm rounded-[44px] transition-colors duration-150 cursor-pointer shrink-0 shadow-xs flex items-center gap-2"
            >
              <span v-if="!isLoading">Cari</span>
              <span v-else class="flex items-center gap-2">
                <svg class="animate-spin h-4 w-4 text-[#000000]" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>Mencari...</span>
              </span>
            </button>
          </div>

          <!-- Alert Error Input -->
          <div 
            v-if="inputError" 
            class="flex items-center gap-2 text-xs font-medium text-[#FF7346] pl-5 pt-1"
          >
            <svg class="w-4 h-4 shrink-0 text-[#E12437]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <span>{{ inputError }}</span>
          </div>
        </div>

        <!-- Filter Control Card (Tailwind Plus Dropdown 1 Baris) -->
        <div class="bg-[#2B251B] border border-[#443B2E] rounded-[10px] p-4 sm:p-5 shadow-sm space-y-3">
          <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm">
            <!-- Tailwind Plus Dropdown Kategori -->
            <Listbox v-model="selectedFilter" as="div" class="flex items-center gap-3 flex-1 relative">
              <span class="text-[#DBD9D2] font-semibold text-xs uppercase tracking-wider shrink-0">
                Kategori:
              </span>
              <div class="relative w-full">
                <ListboxButton
                  class="relative w-full cursor-pointer bg-[#1F1A12] border-2 border-[#4A3F30] hover:border-[#6B5E4A] focus:border-[#FFE01B] rounded-sm py-2 pl-3.5 pr-9 text-left text-xs sm:text-sm font-medium text-[#FAF9F6] focus:outline-none transition-colors"
                >
                  <span class="block truncate">
                    {{ categoryOptions.find(c => c.value === selectedFilter)?.label }}
                  </span>
                  <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#DBD9D2]">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute z-50 mt-1.5 max-h-60 w-full overflow-auto rounded-[10px] bg-[#2B251B] border border-[#443B2E] p-1 text-xs sm:text-sm shadow-xl ring-1 ring-black/10 focus:outline-none"
                  >
                    <ListboxOption
                      v-slot="{ active, selected }"
                      v-for="cat in categoryOptions"
                      :key="cat.value"
                      :value="cat.value"
                      as="template"
                    >
                      <li
                        :class="[
                          active ? 'bg-[#3E3426] text-[#FFE01B]' : 'text-[#FAF9F6]',
                          'relative cursor-pointer select-none py-2 pl-8 pr-4 rounded-md transition-colors'
                        ]"
                      >
                        <span :class="[selected ? 'font-semibold text-[#FFE01B]' : 'font-normal', 'block truncate']">
                          {{ cat.label }}
                        </span>
                        <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-2 text-[#FFE01B]">
                          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>

            <!-- Tailwind Plus Dropdown Tahun -->
            <Listbox v-model="selectedYearFilter" as="div" class="flex items-center gap-3 flex-1 relative">
              <span class="text-[#DBD9D2] font-semibold text-xs uppercase tracking-wider shrink-0">
                Tahun:
              </span>
              <div class="relative w-full">
                <ListboxButton
                  class="relative w-full cursor-pointer bg-[#1F1A12] border-2 border-[#4A3F30] hover:border-[#6B5E4A] focus:border-[#FFE01B] rounded-sm py-2 pl-3.5 pr-9 text-left text-xs sm:text-sm font-medium text-[#FAF9F6] focus:outline-none transition-colors"
                >
                  <span class="block truncate">
                    {{ yearOptions.find(y => y.value === selectedYearFilter)?.label }}
                  </span>
                  <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#DBD9D2]">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute z-50 mt-1.5 max-h-60 w-full overflow-auto rounded-[10px] bg-[#2B251B] border border-[#443B2E] p-1 text-xs sm:text-sm shadow-xl ring-1 ring-black/10 focus:outline-none"
                  >
                    <ListboxOption
                      v-slot="{ active, selected }"
                      v-for="opt in yearOptions"
                      :key="opt.value"
                      :value="opt.value"
                      as="template"
                    >
                      <li
                        :class="[
                          active ? 'bg-[#3E3426] text-[#FFE01B]' : 'text-[#FAF9F6]',
                          'relative cursor-pointer select-none py-2 pl-8 pr-4 rounded-md transition-colors'
                        ]"
                      >
                        <span :class="[selected ? 'font-semibold text-[#FFE01B]' : 'font-normal', 'block truncate']">
                          {{ opt.label }}
                        </span>
                        <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-2 text-[#FFE01B]">
                          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </div>

          <!-- Input Rentang Tahun Kustom (Muncul di bawahnya jika memilih Kustom) -->
          <div 
            v-if="selectedYearFilter === 'kustom'" 
            class="flex items-center justify-end gap-3 pt-2 border-t border-[#3D3427] text-xs sm:text-sm"
          >
            <span class="text-xs text-[#8E8679] font-medium">Rentang Tahun:</span>
            <div class="flex items-center gap-2">
              <label class="text-xs text-[#DBD9D2]">Dari</label>
              <input
                v-model="fromYear"
                type="number"
                placeholder="2018"
                min="1900"
                max="2099"
                class="w-20 px-2.5 py-1.5 text-xs bg-[#1F1A12] border-2 border-[#4A3F30] rounded-sm text-[#FAF9F6] placeholder-[#7E776C] focus:border-[#FFE01B] focus:outline-none"
              />
            </div>
            <span class="text-[#7E776C]">-</span>
            <div class="flex items-center gap-2">
              <label class="text-xs text-[#DBD9D2]">Sampai</label>
              <input
                v-model="toYear"
                type="number"
                placeholder="2024"
                min="1900"
                max="2099"
                class="w-20 px-2.5 py-1.5 text-xs bg-[#1F1A12] border-2 border-[#4A3F30] rounded-sm text-[#FAF9F6] placeholder-[#7E776C] focus:border-[#FFE01B] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </form>

      <!-- Topic Suggestions (Sebelum User Mencari) -->
      <div v-if="!hasSearched && !isLoading" class="pt-2">
        <span class="text-xs text-[#8E8679] font-semibold uppercase tracking-wider block mb-3">Topik yang Sering Ditelusuri:</span>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="item in suggestions"
            :key="item"
            @click="quickSearch(item)"
            class="px-3.5 py-1.5 rounded-[200px] bg-[#2E271D] hover:bg-[#3B3226] border border-[#443B2E] text-xs text-[#DBD9D2] hover:text-[#FAF9F6] transition-colors cursor-pointer"
          >
            {{ item }}
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="space-y-4 pt-4">
        <div class="flex items-center justify-center gap-2 text-sm text-[#FFE01B] py-3">
          <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <span class="text-[#FAF9F6]">Sedang menelusuri basis data literatur...</span>
        </div>
        <div 
          v-for="n in 3" 
          :key="n"
          class="p-6 bg-[#2B251B] border border-[#443B2E] rounded-[10px] animate-pulse space-y-3"
        >
          <div class="h-4 bg-[#3E3426] rounded w-24"></div>
          <div class="h-6 bg-[#3E3426] rounded w-4/5"></div>
          <div class="h-4 bg-[#362E21] rounded w-1/2"></div>
        </div>
      </div>

      <!-- Error State -->
      <div 
        v-if="errorMsg" 
        class="p-5 bg-[#3B1F23] border border-[#E12437]/50 rounded-[10px] text-center text-[#FF9675] text-sm leading-relaxed"
      >
        {{ errorMsg }}
      </div>

      <!-- Search Results Section -->
      <section v-if="!isLoading && results.length > 0" class="space-y-4 pt-2">
        <div class="flex items-center justify-between px-1 text-xs text-[#DBD9D2]">
          <span>Ditemukan <strong class="text-[#FAF9F6] font-semibold">{{ results.length }}</strong> dokumen</span>
          <span class="text-[#8E8679]">Data bersumber dari OpenAlex API</span>
        </div>

        <article
          v-for="item in results"
          :key="item.id"
          class="p-6 bg-[#2B251B] hover:bg-[#322B20] border border-[#443B2E] hover:border-[#6B5E4A] rounded-[10px] transition-colors duration-150 shadow-sm flex flex-col gap-3.5"
        >
          <!-- Header Card & Badges -->
          <div class="flex items-center justify-between gap-3 flex-wrap">
            <div class="flex items-center gap-2">
              <!-- Type Badges -->
              <span 
                v-if="item.type === 'book'" 
                class="px-3 py-0.5 text-xs font-semibold rounded-[200px] bg-[#BBAADD]/15 text-[#D4CAEC] border border-[#BBAADD]/30"
              >
                Buku
              </span>
              <span 
                v-else-if="item.type === 'article'" 
                class="px-3 py-0.5 text-xs font-semibold rounded-[200px] bg-[#AADDAA]/15 text-[#AADDAA] border border-[#AADDAA]/30"
              >
                Jurnal
              </span>
              <span 
                v-else-if="item.type === 'dissertation'" 
                class="px-3 py-0.5 text-xs font-semibold rounded-[200px] bg-[#FF7346]/15 text-[#FF9675] border border-[#FF7346]/30"
              >
                Skripsi
              </span>
              <span 
                v-else 
                class="px-3 py-0.5 text-xs font-semibold rounded-[200px] bg-[#3E3426] text-[#DBD9D2] border border-[#524736]"
              >
                {{ item.type || 'Dokumen' }}
              </span>

              <!-- Open Access Pill -->
              <span 
                v-if="item.isOpenAccess" 
                class="px-2.5 py-0.5 text-[11px] font-semibold rounded-[200px] bg-[#004E56]/40 text-[#4EE5D2] border border-[#004E56]"
              >
                Open Access
              </span>
            </div>

            <!-- Read / External Link CTA -->
            <a 
              :href="item.link" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs font-medium text-[#FFE01B] hover:text-[#000000] hover:bg-[#FFE01B] px-3 py-1 rounded-[44px] border border-[#FFE01B]/40 transition-colors duration-150"
            >
              <span>Buka Dokumen</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <!-- Document Title (Serif Headline) -->
          <h2 class="font-serif-heading text-xl sm:text-2xl font-normal text-[#FAF9F6] hover:text-[#FFE01B] transition-colors leading-snug">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
              {{ item.title }}
            </a>
          </h2>

          <!-- Meta Author & Year -->
          <div class="flex items-center gap-4 text-xs sm:text-sm text-[#BCBAB6] pt-2 border-t border-[#3D3427]">
            <div class="flex items-center gap-1.5 truncate">
              <span class="text-[#8E8679]">Penulis:</span>
              <span class="font-medium text-[#DBD9D2] truncate">{{ item.author }}</span>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <span class="text-[#8E8679]">Tahun:</span>
              <span class="font-medium text-[#DBD9D2]">{{ item.year }}</span>
            </div>
          </div>
        </article>
      </section>

      <!-- Empty State -->
      <div 
        v-else-if="hasSearched && !isLoading && !errorMsg && results.length === 0" 
        class="p-10 text-center bg-[#2B251B] border border-[#443B2E] rounded-[10px] space-y-3"
      >
        <div class="text-3xl mb-1">📖</div>
        <h3 class="font-serif-heading text-2xl font-normal text-[#FAF9F6]">Tidak Ada Dokumen yang Cocok</h3>
        <p class="text-sm text-[#DBD9D2] max-w-md mx-auto leading-relaxed">
          Kami tidak dapat menemukan literatur yang sesuai dengan kata kunci tersebut. Cobalah menggunakan istilah umum atau ganti pilihan filter tahun dan kategori.
        </p>
      </div>
    </main>

    <!-- Footer -->
    <footer class="w-full max-w-3xl mt-20 pt-8 border-t border-[#3D3427] text-center text-xs text-[#8E8679] space-y-1">
      <p>Cari Literatur &bull; Platform Pencarian Karya Ilmiah & Akademik</p>
    </footer>
  </div>
</template>
