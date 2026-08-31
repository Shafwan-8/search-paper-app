import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());

app.get('/api/search', async (req, res) => {
  const { q, type, year, from_year, to_year } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Query pencarian kosong' });
  }

  // 1. Menerjemahkan filter lokal ke format tipe OpenAlex
  let openAlexType = '';
  if (type === 'buku') openAlexType = 'book';
  else if (type === 'jurnal') openAlexType = 'article';
  else if (type === 'skripsi') openAlexType = 'dissertation';

  // 2. Menyiapkan parameter ke OpenAlex
  let apiUrl = `https://api.openalex.org/works`;
  let queryParams = {
    search: q,
    per_page: 15, // Membatasi hasil awal agar UI tidak berat
    api_key: process.env.OPENALEX_API_KEY // API key dari .env
  };

  // 3. Memasukkan filter tipe & tahun ke OpenAlex
  const filters = [];

  if (openAlexType) {
    filters.push(`type:${openAlexType}`);
  }

  // Filter tahun pembuatan / publikasi
  const currentYear = new Date().getFullYear();
  if (from_year && to_year) {
    filters.push(`publication_year:${from_year}-${to_year}`);
  } else if (from_year) {
    filters.push(`publication_year:${from_year}-${currentYear}`);
  } else if (to_year) {
    filters.push(`publication_year:1900-${to_year}`);
  } else if (year && year !== 'semua') {
    if (year === '1_tahun') {
      filters.push(`publication_year:${currentYear - 1}-${currentYear}`);
    } else if (year === '3_tahun') {
      filters.push(`publication_year:${currentYear - 3}-${currentYear}`);
    } else if (year === '5_tahun') {
      filters.push(`publication_year:${currentYear - 5}-${currentYear}`);
    } else if (year === '10_tahun') {
      filters.push(`publication_year:${currentYear - 10}-${currentYear}`);
    } else {
      // Jika format tahun langsung (misal: "2023" atau "2020-2024")
      filters.push(`publication_year:${year}`);
    }
  }

  if (filters.length > 0) {
    queryParams.filter = filters.join(',');
  }

  try {
    const response = await axios.get(apiUrl, {
      params: queryParams,
      // 4. Fitur Polite Pool: Menggunakan email dari .env
      headers: {
        'User-Agent': `mailto:${process.env.OPENALEX_EMAIL}`
      }
    });

    // 5. Menyaring data yang berantakan dari OpenAlex menjadi rapi untuk Vue
    const results = response.data.results.map(item => ({
      id: item.id,
      title: item.title || 'Judul tidak tersedia',
      // Mengambil nama penulis pertama jika ada
      author: item.authorships?.[0]?.author?.display_name || 'Penulis tidak diketahui',
      year: item.publication_year || 'Tahun N/A',
      type: item.type, 
      // Memprioritaskan link DOI, jika tidak ada pakai link web aslinya
      link: item.doi || item.primary_location?.landing_page_url || '#',
      isOpenAccess: item.open_access?.is_oa || false
    }));

    res.json({ success: true, data: results });

  } catch (error) {
    console.error('Error dari OpenAlex:', error.message);
    res.status(500).json({ error: 'Gagal mengambil data dari server OpenAlex' });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));