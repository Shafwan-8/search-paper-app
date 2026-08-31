// server.js (Node.js Express)
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/search', async (req, res) => {
  try {
    const { q, type } = req.query;

    if (!q) {
      return res.status(400).json({ error: 'Query pencarian tidak boleh kosong' });
    }

    // Logika penyesuaian query berdasarkan filter
    let searchQuery = q;
    if (type === 'skripsi') {
      searchQuery += ' skripsi OR thesis site:ac.id';
    } else if (type === 'jurnal') {
      searchQuery += ' journal OR jurnal';
    } else if (type === 'buku') {
      searchQuery += ' book OR buku';
    }

    // Contoh request ke OpenAlex API (Bisa diganti ke CORE / SerpApi)
    const response = await axios.get('https://api.openalex.org/works', {
      params: {
        search: searchQuery,
        per_page: 10
      }
    });

    // Normalisasi struktur data agar frontend menerima format yang konsisten
    const results = response.data.results.map(item => ({
      id: item.id,
      title: item.title || 'Judul tidak tersedia',
      author: item.authorships?.[0]?.author?.display_name || 'Penulis tidak diketahui',
      year: item.publication_year || 'Tahun N/A',
      type: item.type || type,
      link: item.doi || item.landing_page_url || item.id
    }));

    return res.json({ success: true, data: results });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return res.status(500).json({ error: 'Gagal mengambil data dari server' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));