import { FormulaData, CategoryData, CategoryName } from './types';

export const CATEGORIES: CategoryData[] = [
  { name: "Math & Statistics", description: "Fungsi matematika dasar dan analisis statistik.", icon: "Calculator" },
  { name: "Lookup & Reference", description: "Mencari dan mereferensikan data dalam tabel.", icon: "Search" },
  { name: "Text Functions", description: "Manipulasi dan format string teks.", icon: "Type" },
  { name: "Date & Time", description: "Mengelola tanggal, waktu, dan durasi.", icon: "Calendar" },
  { name: "Logical", description: "Logika Boolean dan pengambilan keputusan.", icon: "GitFork" },
  { name: "Financial", description: "Perhitungan keuangan, pinjaman, dan investasi.", icon: "DollarSign" },
  { name: "Array & Dynamic Array", description: "Fungsi array modern untuk manipulasi data kompleks.", icon: "Grid" },
  { name: "Database Functions", description: "Analisis statistik pada database terstruktur.", icon: "Database" },
];

export const FORMULAS: FormulaData[] = [
  // --- 1. Math & Statistics ---
  {
    id: "sum",
    name: "SUM",
    category: "Math & Statistics",
    definition: "Menjumlahkan semua angka dalam rentang sel yang dipilih.",
    syntax: "=SUM(number1, [number2], ...)",
    parameters: [
      { name: "number1", description: "Angka pertama atau rentang sel yang ingin dijumlahkan." },
      { name: "[number2]", description: "Angka atau rentang tambahan (opsional)." }
    ],
    exampleScenario: "Menghitung total penjualan bulanan.",
    exampleTable: [
      ["A", "B"],
      ["Item", "Harga"],
      ["Apel", "5000"],
      ["Jeruk", "3000"],
      ["Mangga", "7000"]
    ],
    exampleCode: "=SUM(B2:B4)",
    expectedResult: "15000",
    tips: ["Gunakan pintasan Alt + = untuk AutoSum."]
  },
  {
    id: "sumif",
    name: "SUMIF",
    category: "Math & Statistics",
    definition: "Menjumlahkan sel yang memenuhi satu kriteria tertentu.",
    syntax: "=SUMIF(range, criteria, [sum_range])",
    parameters: [
      { name: "range", description: "Rentang sel yang dievaluasi." },
      { name: "criteria", description: "Kriteria penjumlahan (misal: \">100\", \"Teks\")." },
      { name: "[sum_range]", description: "Sel yang dijumlahkan (jika beda dari range)." }
    ],
    exampleScenario: "Total penjualan kategori 'Elektronik'.",
    exampleTable: [
      ["A", "B", "C"],
      ["Produk", "Kategori", "Nilai"],
      ["Laptop", "Elektronik", "5000"],
      ["Baju", "Pakaian", "150"],
      ["Mouse", "Elektronik", "200"]
    ],
    exampleCode: "=SUMIF(B2:B4, \"Elektronik\", C2:C4)",
    expectedResult: "5200",
    tips: ["Gunakan wildcard (*) untuk kriteria teks sebagian."]
  },
  {
    id: "sumifs",
    name: "SUMIFS",
    category: "Math & Statistics",
    definition: "Menjumlahkan sel berdasarkan beberapa kriteria sekaligus.",
    syntax: "=SUMIFS(sum_range, criteria_range1, criteria1, ...)",
    parameters: [
      { name: "sum_range", description: "Sel yang akan dijumlahkan." },
      { name: "criteria_range1", description: "Rentang kriteria pertama." },
      { name: "criteria1", description: "Kriteria pertama." }
    ],
    exampleScenario: "Penjualan 'Elektronik' yang nilainya di atas 1000.",
    exampleTable: [
      ["A", "B", "C"],
      ["Produk", "Kategori", "Nilai"],
      ["Laptop", "Elektronik", "5000"],
      ["Mouse", "Elektronik", "200"],
      ["TV", "Elektronik", "3000"]
    ],
    exampleCode: "=SUMIFS(C2:C4, B2:B4, \"Elektronik\", C2:C4, \">1000\")",
    expectedResult: "8000",
    tips: ["Urutan argumen berbeda dengan SUMIF. Di sini sum_range ada di awal."]
  },
  {
    id: "average",
    name: "AVERAGE",
    category: "Math & Statistics",
    definition: "Menghitung nilai rata-rata dari sekumpulan angka.",
    syntax: "=AVERAGE(number1, [number2], ...)",
    parameters: [
      { name: "number1", description: "Angka atau rentang pertama." }
    ],
    exampleScenario: "Rata-rata nilai ujian siswa.",
    exampleTable: [
      ["A", "B"],
      ["Siswa", "Nilai"],
      ["Andi", "80"],
      ["Budi", "90"]
    ],
    exampleCode: "=AVERAGE(B2:B3)",
    expectedResult: "85",
    tips: ["Sel kosong diabaikan, tapi sel berisi 0 dihitung."]
  },
  {
    id: "averageif",
    name: "AVERAGEIF",
    category: "Math & Statistics",
    definition: "Menghitung rata-rata sel yang memenuhi kriteria tertentu.",
    syntax: "=AVERAGEIF(range, criteria, [average_range])",
    parameters: [
      { name: "range", description: "Rentang kriteria." },
      { name: "criteria", description: "Kondisi yang harus dipenuhi." },
      { name: "[average_range]", description: "Rentang nilai rata-rata (opsional)." }
    ],
    exampleScenario: "Rata-rata nilai siswa yang Lulus (>70).",
    exampleTable: [
      ["A", "B"],
      ["Nilai", "Status"],
      ["80", "Lulus"],
      ["50", "Gagal"],
      ["90", "Lulus"]
    ],
    exampleCode: "=AVERAGEIF(B2:B4, \"Lulus\", A2:A4)",
    expectedResult: "85",
    tips: []
  },
  {
    id: "count",
    name: "COUNT",
    category: "Math & Statistics",
    definition: "Menghitung jumlah sel yang berisi angka.",
    syntax: "=COUNT(value1, [value2], ...)",
    parameters: [
      { name: "value1", description: "Item, referensi sel, atau rentang." }
    ],
    exampleScenario: "Menghitung berapa banyak siswa yang sudah mendapat nilai.",
    exampleTable: [
      ["A", "B"],
      ["Siswa", "Nilai"],
      ["Andi", "80"],
      ["Budi", "Absen"]
    ],
    exampleCode: "=COUNT(B2:B3)",
    expectedResult: "1",
    tips: ["Hanya menghitung angka. Gunakan COUNTA untuk menghitung sel tidak kosong (teks & angka)."]
  },
  {
    id: "countif",
    name: "COUNTIF",
    category: "Math & Statistics",
    definition: "Menghitung jumlah sel yang memenuhi satu kriteria.",
    syntax: "=COUNTIF(range, criteria)",
    parameters: [
      { name: "range", description: "Kelompok sel yang akan dihitung." },
      { name: "criteria", description: "Kriteria penentu penghitungan." }
    ],
    exampleScenario: "Menghitung jumlah kehadiran 'Hadir'.",
    exampleTable: [
      ["A", "B"],
      ["Siswa", "Ket"],
      ["Andi", "Hadir"],
      ["Budi", "Sakit"],
      ["Citra", "Hadir"]
    ],
    exampleCode: "=COUNTIF(B2:B4, \"Hadir\")",
    expectedResult: "2",
    tips: ["Tidak case-sensitive."]
  },
  {
    id: "countifs",
    name: "COUNTIFS",
    category: "Math & Statistics",
    definition: "Menghitung jumlah sel berdasarkan banyak kriteria.",
    syntax: "=COUNTIFS(criteria_range1, criteria1, ...)",
    parameters: [
      { name: "criteria_range1", description: "Rentang kriteria pertama." },
      { name: "criteria1", description: "Kriteria pertama." }
    ],
    exampleScenario: "Menghitung pria yang lulus.",
    exampleTable: [
      ["A", "B", "C"],
      ["Nama", "Gender", "Status"],
      ["Ali", "L", "Lulus"],
      ["Budi", "L", "Gagal"],
      ["Siti", "P", "Lulus"]
    ],
    exampleCode: "=COUNTIFS(B2:B4, \"L\", C2:C4, \"Lulus\")",
    expectedResult: "1",
    tips: []
  },
  {
    id: "max",
    name: "MAX",
    category: "Math & Statistics",
    definition: "Mencari nilai terbesar dalam sekumpulan data.",
    syntax: "=MAX(number1, [number2], ...)",
    parameters: [
      { name: "number1", description: "Angka atau rentang." }
    ],
    exampleScenario: "Mencari nilai ujian tertinggi.",
    exampleTable: [
      ["A"],
      ["Nilai"],
      ["75"],
      ["98"],
      ["80"]
    ],
    exampleCode: "=MAX(A2:A4)",
    expectedResult: "98",
    tips: []
  },
  {
    id: "min",
    name: "MIN",
    category: "Math & Statistics",
    definition: "Mencari nilai terkecil dalam sekumpulan data.",
    syntax: "=MIN(number1, [number2], ...)",
    parameters: [
      { name: "number1", description: "Angka atau rentang." }
    ],
    exampleScenario: "Mencari harga termurah.",
    exampleTable: [
      ["A"],
      ["Harga"],
      ["5000"],
      ["2000"],
      ["10000"]
    ],
    exampleCode: "=MIN(A2:A4)",
    expectedResult: "2000",
    tips: []
  },
  {
    id: "round",
    name: "ROUND",
    category: "Math & Statistics",
    definition: "Membulatkan angka ke jumlah digit yang ditentukan.",
    syntax: "=ROUND(number, num_digits)",
    parameters: [
      { name: "number", description: "Angka yang akan dibulatkan." },
      { name: "num_digits", description: "Jumlah digit desimal (0 untuk bilangan bulat)." }
    ],
    exampleScenario: "Membulatkan nilai rata-rata menjadi 2 desimal.",
    exampleTable: [
      ["A", "B"],
      ["Nilai", "Hasil"],
      ["123.4567", ""]
    ],
    exampleCode: "=ROUND(A2, 2)",
    expectedResult: "123.46",
    tips: ["Gunakan ROUNDUP untuk selalu ke atas, ROUNDDOWN untuk selalu ke bawah."]
  },
  {
    id: "ceiling",
    name: "CEILING",
    category: "Math & Statistics",
    definition: "Membulatkan angka ke atas, ke kelipatan bilangan bulat terdekat atau signifikansi tertentu.",
    syntax: "=CEILING(number, significance)",
    parameters: [
      { name: "number", description: "Nilai yang akan dibulatkan." },
      { name: "significance", description: "Kelipatan tujuan pembulatan (misal: 500, 1000)." }
    ],
    exampleScenario: "Membulatkan harga ke kelipatan 500 terdekat.",
    exampleTable: [
      ["A"],
      ["Harga"],
      ["12300"]
    ],
    exampleCode: "=CEILING(A2, 500)",
    expectedResult: "12500",
    tips: ["Berguna untuk penetapan harga ritel."]
  },
  {
    id: "floor",
    name: "FLOOR",
    category: "Math & Statistics",
    definition: "Membulatkan angka ke bawah, ke kelipatan signifikansi terdekat.",
    syntax: "=FLOOR(number, significance)",
    parameters: [
      { name: "number", description: "Nilai yang akan dibulatkan." },
      { name: "significance", description: "Kelipatan tujuan pembulatan." }
    ],
    exampleScenario: "Membulatkan ke bawah ke kelipatan 1000.",
    exampleTable: [
      ["A"],
      ["Harga"],
      ["12800"]
    ],
    exampleCode: "=FLOOR(A2, 1000)",
    expectedResult: "12000",
    tips: []
  },

  // --- 2. Lookup & Reference ---
  {
    id: "vlookup",
    name: "VLOOKUP",
    category: "Lookup & Reference",
    definition: "Mencari nilai di kolom kiri tabel dan mengembalikan nilai di baris yang sama.",
    syntax: "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
    parameters: [
      { name: "lookup_value", description: "Nilai yang dicari." },
      { name: "col_index", description: "Nomor kolom pengembalian." }
    ],
    exampleScenario: "Cari harga berdasarkan ID.",
    exampleTable: [
      ["A", "B", "C"],
      ["ID", "Item", "Harga"],
      ["101", "Buku", "5000"]
    ],
    exampleCode: "=VLOOKUP(101, A2:C2, 3, FALSE)",
    expectedResult: "5000",
    tips: []
  },
  {
    id: "hlookup",
    name: "HLOOKUP",
    category: "Lookup & Reference",
    definition: "Mencari nilai di baris atas tabel dan mengembalikan nilai di kolom yang sama.",
    syntax: "=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])",
    parameters: [
      { name: "lookup_value", description: "Nilai yang dicari di baris pertama." },
      { name: "row_index_num", description: "Nomor baris untuk mengambil data." }
    ],
    exampleScenario: "Mencari persentase diskon berdasarkan kode di tabel horizontal.",
    exampleTable: [
      ["A", "B", "C"],
      ["Kode", "A", "B"],
      ["Diskon", "10%", "20%"]
    ],
    exampleCode: "=HLOOKUP(\"B\", B1:C2, 2, FALSE)",
    expectedResult: "20%",
    tips: ["Jarang digunakan dibandingkan VLOOKUP, kecuali data tersusun horizontal."]
  },
  {
    id: "xlookup",
    name: "XLOOKUP",
    category: "Lookup & Reference",
    definition: "Pengganti VLOOKUP modern yang lebih fleksibel dan aman.",
    syntax: "=XLOOKUP(lookup_value, lookup_array, return_array, ...)",
    parameters: [
      { name: "lookup_array", description: "Dimana mencari." },
      { name: "return_array", description: "Apa yang dikembalikan." }
    ],
    exampleScenario: "Mencari Nama dari NIK (pencarian kiri).",
    exampleTable: [
      ["A", "B"],
      ["Nama", "NIK"],
      ["Budi", "123"]
    ],
    exampleCode: "=XLOOKUP(\"123\", B2:B2, A2:A2)",
    expectedResult: "Budi",
    tips: []
  },
  {
    id: "lookup",
    name: "LOOKUP",
    category: "Lookup & Reference",
    definition: "Fungsi kompatibilitas untuk mencari nilai dalam satu baris atau satu kolom.",
    syntax: "=LOOKUP(lookup_value, lookup_vector, [result_vector])",
    parameters: [
      { name: "lookup_value", description: "Nilai yang dicari." },
      { name: "lookup_vector", description: "Rentang satu baris/kolom untuk dicari." }
    ],
    exampleScenario: "Mencari nilai terakhir dalam kolom.",
    exampleTable: [
      ["A"],
      ["Data"],
      ["10"],
      ["20"],
      [""]
    ],
    exampleCode: "=LOOKUP(2, 1/(A2:A4<>\"\"), A2:A4)",
    expectedResult: "20",
    tips: ["Sering digunakan untuk trik 'last non-empty value'."]
  },
  {
    id: "index",
    name: "INDEX",
    category: "Lookup & Reference",
    definition: "Mengembalikan nilai pada posisi baris dan kolom tertentu dalam rentang.",
    syntax: "=INDEX(array, row_num, [column_num])",
    parameters: [
      { name: "array", description: "Rentang data." },
      { name: "row_num", description: "Nomor baris." },
      { name: "column_num", description: "Nomor kolom." }
    ],
    exampleScenario: "Mengambil data di baris ke-2, kolom ke-1.",
    exampleTable: [
      ["A"],
      ["Kota"],
      ["Jakarta"],
      ["Bandung"]
    ],
    exampleCode: "=INDEX(A2:A3, 2, 1)",
    expectedResult: "Bandung",
    tips: ["Sangat kuat jika digabungkan dengan MATCH (INDEX-MATCH)."]
  },
  {
    id: "match",
    name: "MATCH",
    category: "Lookup & Reference",
    definition: "Mencari posisi (indeks) suatu item dalam rentang sel.",
    syntax: "=MATCH(lookup_value, lookup_array, [match_type])",
    parameters: [
      { name: "lookup_value", description: "Nilai yang dicari." },
      { name: "match_type", description: "0 untuk persis, 1/-1 untuk pendekatan." }
    ],
    exampleScenario: "Mencari urutan posisi 'Bandung' dalam daftar.",
    exampleTable: [
      ["A"],
      ["Kota"],
      ["Jakarta"],
      ["Bandung"]
    ],
    exampleCode: "=MATCH(\"Bandung\", A2:A3, 0)",
    expectedResult: "2",
    tips: ["Mengembalikan angka posisi, bukan nilainya."]
  },
  {
    id: "offset",
    name: "OFFSET",
    category: "Lookup & Reference",
    definition: "Mengembalikan referensi rentang yang digeser sejumlah baris dan kolom dari sel awal.",
    syntax: "=OFFSET(reference, rows, cols, [height], [width])",
    parameters: [
      { name: "reference", description: "Titik awal." },
      { name: "rows", description: "Geser ke bawah (positif) atau atas (negatif)." },
      { name: "cols", description: "Geser ke kanan (positif) atau kiri (negatif)." }
    ],
    exampleScenario: "Mengambil nilai 1 baris di bawah sel A1.",
    exampleTable: [
      ["A"],
      ["Header"],
      ["Data 1"]
    ],
    exampleCode: "=OFFSET(A1, 1, 0)",
    expectedResult: "Data 1",
    tips: ["Fungsi volatile (bisa memperlambat jika terlalu banyak)."]
  },
  {
    id: "choose",
    name: "CHOOSE",
    category: "Lookup & Reference",
    definition: "Memilih nilai dari daftar argumen berdasarkan nomor indeks.",
    syntax: "=CHOOSE(index_num, value1, [value2], ...)",
    parameters: [
      { name: "index_num", description: "Nomor urut pilihan (1-254)." },
      { name: "value1", description: "Nilai pertama." }
    ],
    exampleScenario: "Mengubah angka 1-3 menjadi nama medali.",
    exampleTable: [
      ["A"],
      ["Rank"],
      ["2"]
    ],
    exampleCode: "=CHOOSE(A2, \"Emas\", \"Perak\", \"Perunggu\")",
    expectedResult: "Perak",
    tips: []
  },

  // --- 3. Text Functions ---
  {
    id: "left",
    name: "LEFT",
    category: "Text Functions",
    definition: "Mengambil karakter dari kiri.",
    syntax: "=LEFT(text, [num_chars])",
    parameters: [{name: "text", description: "Teks sumber."}],
    exampleScenario: "Ambil 3 huruf awal.",
    exampleTable: [["A"],["Jakarta"]],
    exampleCode: "=LEFT(A2, 3)",
    expectedResult: "Jak",
    tips: []
  },
  {
    id: "right",
    name: "RIGHT",
    category: "Text Functions",
    definition: "Mengambil sejumlah karakter dari akhir (kanan) string teks.",
    syntax: "=RIGHT(text, [num_chars])",
    parameters: [
      { name: "text", description: "Teks sumber." },
      { name: "num_chars", description: "Jumlah karakter yang diambil." }
    ],
    exampleScenario: "Mengambil 4 digit tahun dari kode 'INV-2023'.",
    exampleTable: [
      ["A"],
      ["Kode"],
      ["INV-2023"]
    ],
    exampleCode: "=RIGHT(A2, 4)",
    expectedResult: "2023",
    tips: []
  },
  {
    id: "mid",
    name: "MID",
    category: "Text Functions",
    definition: "Mengambil karakter dari tengah string teks, dimulai dari posisi tertentu.",
    syntax: "=MID(text, start_num, num_chars)",
    parameters: [
      { name: "start_num", description: "Posisi karakter pertama yang ingin diambil." },
      { name: "num_chars", description: "Jumlah karakter yang diambil." }
    ],
    exampleScenario: "Mengambil 'B' dari kode 'A-B-C'.",
    exampleTable: [
      ["A"],
      ["Kode"],
      ["A-B-C"]
    ],
    exampleCode: "=MID(A2, 3, 1)",
    expectedResult: "B",
    tips: []
  },
  {
    id: "len",
    name: "LEN",
    category: "Text Functions",
    definition: "Menghitung jumlah karakter dalam string teks.",
    syntax: "=LEN(text)",
    parameters: [
      { name: "text", description: "Teks yang akan dihitung panjangnya." }
    ],
    exampleScenario: "Validasi panjang NIK (harus 16 digit).",
    exampleTable: [
      ["A"],
      ["NIK"],
      ["1234567890123456"]
    ],
    exampleCode: "=LEN(A2)",
    expectedResult: "16",
    tips: ["Spasi dihitung sebagai karakter."]
  },
  {
    id: "trim",
    name: "TRIM",
    category: "Text Functions",
    definition: "Menghapus semua spasi dari teks kecuali spasi tunggal di antara kata.",
    syntax: "=TRIM(text)",
    parameters: [
      { name: "text", description: "Teks yang ingin dibersihkan." }
    ],
    exampleScenario: "Membersihkan input nama yang berantakan.",
    exampleTable: [
      ["A"],
      ["Nama"],
      ["  Budi   Santoso  "]
    ],
    exampleCode: "=TRIM(A2)",
    expectedResult: "Budi Santoso",
    tips: ["Sangat penting sebelum melakukan VLOOKUP pada data impor."]
  },
  {
    id: "concat",
    name: "CONCAT",
    category: "Text Functions",
    definition: "Menggabungkan teks tanpa pemisah.",
    syntax: "=CONCAT(text1, ...)",
    parameters: [{name: "text1", description: "Teks 1"}],
    exampleScenario: "Gabung nama.",
    exampleTable: [["A", "B"], ["Dpn", "Blk"], ["Ali", "Topan"]],
    exampleCode: "=CONCAT(A2, B2)",
    expectedResult: "AliTopan",
    tips: []
  },
  {
    id: "textjoin",
    name: "TEXTJOIN",
    category: "Text Functions",
    definition: "Menggabungkan teks dengan pembatas (delimiter) dan opsi mengabaikan sel kosong.",
    syntax: "=TEXTJOIN(delimiter, ignore_empty, text1, ...)",
    parameters: [
      { name: "delimiter", description: "Pemisah antar teks (misal: \", \")." },
      { name: "ignore_empty", description: "TRUE untuk lewati sel kosong." }
    ],
    exampleScenario: "Membuat daftar hobi dipisahkan koma.",
    exampleTable: [
      ["A", "B", "C"],
      ["H1", "H2", "H3"],
      ["Baca", "", "Lari"]
    ],
    exampleCode: "=TEXTJOIN(\", \", TRUE, A2:C2)",
    expectedResult: "Baca, Lari",
    tips: ["Fitur favorit di Excel modern."]
  },
  {
    id: "upper",
    name: "UPPER",
    category: "Text Functions",
    definition: "Mengubah semua huruf dalam teks menjadi huruf besar.",
    syntax: "=UPPER(text)",
    parameters: [],
    exampleScenario: "Standarisasi kode negara.",
    exampleTable: [
      ["A"],
      ["Kode"],
      ["id"]
    ],
    exampleCode: "=UPPER(A2)",
    expectedResult: "ID",
    tips: []
  },
  {
    id: "lower",
    name: "LOWER",
    category: "Text Functions",
    definition: "Mengubah semua huruf menjadi huruf kecil.",
    syntax: "=LOWER(text)",
    parameters: [],
    exampleScenario: "Format email.",
    exampleTable: [
      ["A"],
      ["Email"],
      ["BUDI@GMAIL.COM"]
    ],
    exampleCode: "=LOWER(A2)",
    expectedResult: "budi@gmail.com",
    tips: []
  },
  {
    id: "proper",
    name: "PROPER",
    category: "Text Functions",
    definition: "Mengubah huruf pertama setiap kata menjadi besar, sisanya kecil.",
    syntax: "=PROPER(text)",
    parameters: [],
    exampleScenario: "Memperbaiki penulisan nama.",
    exampleTable: [
      ["A"],
      ["Nama"],
      ["budi santoso"]
    ],
    exampleCode: "=PROPER(A2)",
    expectedResult: "Budi Santoso",
    tips: []
  },

  // --- 4. Date & Time ---
  {
    id: "today",
    name: "TODAY",
    category: "Date & Time",
    definition: "Tanggal hari ini.",
    syntax: "=TODAY()",
    parameters: [],
    exampleScenario: "Tanggal cetak.",
    exampleTable: [["A"], ["Date"]],
    exampleCode: "=TODAY()",
    expectedResult: "25/10/2023",
    tips: ["Volatile."]
  },
  {
    id: "now",
    name: "NOW",
    category: "Date & Time",
    definition: "Mengembalikan tanggal dan waktu saat ini.",
    syntax: "=NOW()",
    parameters: [],
    exampleScenario: "Mencatat timestamp laporan.",
    exampleTable: [
      ["A"],
      ["Waktu"]
    ],
    exampleCode: "=NOW()",
    expectedResult: "25/10/2023 14:30",
    tips: ["Akan berubah setiap kali sheet dihitung."]
  },
  {
    id: "date",
    name: "DATE",
    category: "Date & Time",
    definition: "Membuat tanggal yang valid dari angka tahun, bulan, dan hari.",
    syntax: "=DATE(year, month, day)",
    parameters: [
      { name: "year", description: "Angka tahun (4 digit)." },
      { name: "month", description: "Angka bulan." },
      { name: "day", description: "Angka hari." }
    ],
    exampleScenario: "Menggabungkan kolom Tgl, Bln, Thn.",
    exampleTable: [
      ["A", "B", "C"],
      ["Tgl", "Bln", "Thn"],
      ["1", "5", "2023"]
    ],
    exampleCode: "=DATE(C2, B2, A2)",
    expectedResult: "01/05/2023",
    tips: []
  },
  {
    id: "month",
    name: "MONTH",
    category: "Date & Time",
    definition: "Mengambil angka bulan (1-12) dari tanggal.",
    syntax: "=MONTH(serial_number)",
    parameters: [],
    exampleScenario: "Analisis penjualan per bulan.",
    exampleTable: [
      ["A"],
      ["Tanggal"],
      ["25/12/2023"]
    ],
    exampleCode: "=MONTH(A2)",
    expectedResult: "12",
    tips: []
  },
  {
    id: "year",
    name: "YEAR",
    category: "Date & Time",
    definition: "Mengambil angka tahun dari tanggal.",
    syntax: "=YEAR(serial_number)",
    parameters: [],
    exampleScenario: "Ekstrak tahun lahir.",
    exampleTable: [
      ["A"],
      ["Lahir"],
      ["01/01/1990"]
    ],
    exampleCode: "=YEAR(A2)",
    expectedResult: "1990",
    tips: []
  },
  {
    id: "day",
    name: "DAY",
    category: "Date & Time",
    definition: "Mengambil angka hari (1-31) dari tanggal.",
    syntax: "=DAY(serial_number)",
    parameters: [],
    exampleScenario: "Mencari tanggal gajian.",
    exampleTable: [
      ["A"],
      ["Tanggal"],
      ["25/10/2023"]
    ],
    exampleCode: "=DAY(A2)",
    expectedResult: "25",
    tips: []
  },
  {
    id: "edate",
    name: "EDATE",
    category: "Date & Time",
    definition: "Menghitung tanggal sekian bulan sebelum atau sesudah tanggal awal.",
    syntax: "=EDATE(start_date, months)",
    parameters: [
      { name: "months", description: "Jumlah bulan (positif/negatif)." }
    ],
    exampleScenario: "Menghitung tanggal jatuh tempo 3 bulan lagi.",
    exampleTable: [
      ["A"],
      ["Mulai"],
      ["01/01/2023"]
    ],
    exampleCode: "=EDATE(A2, 3)",
    expectedResult: "01/04/2023",
    tips: ["Sangat berguna untuk perhitungan kontrak/langganan."]
  },
  {
    id: "eomonth",
    name: "EOMONTH",
    category: "Date & Time",
    definition: "Mengembalikan tanggal hari terakhir bulan tersebut.",
    syntax: "=EOMONTH(start_date, months)",
    parameters: [
      { name: "months", description: "0 untuk bulan yang sama, 1 untuk bulan depan." }
    ],
    exampleScenario: "Menentukan batas akhir laporan bulanan.",
    exampleTable: [
      ["A"],
      ["Tanggal"],
      ["15/02/2023"]
    ],
    exampleCode: "=EOMONTH(A2, 0)",
    expectedResult: "28/02/2023",
    tips: []
  },
  {
    id: "datedif",
    name: "DATEDIF",
    category: "Date & Time",
    definition: "Selisih antara dua tanggal.",
    syntax: "=DATEDIF(start, end, unit)",
    parameters: [{name: "unit", description: "\"Y\", \"M\", \"D\""}],
    exampleScenario: "Hitung umur.",
    exampleTable: [["A", "B"], ["Lahir", "Kini"], ["1990", "2020"]],
    exampleCode: "=DATEDIF(A2, B2, \"Y\")",
    expectedResult: "30",
    tips: ["Hidden function."]
  },

  // --- 5. Logical ---
  {
    id: "if",
    name: "IF",
    category: "Logical",
    definition: "Logika Jika-Maka.",
    syntax: "=IF(test, val_true, val_false)",
    parameters: [],
    exampleScenario: "Lulus/Gagal.",
    exampleTable: [["A"], ["75"]],
    exampleCode: "=IF(A2>70, \"Lulus\", \"Gagal\")",
    expectedResult: "Lulus",
    tips: []
  },
  {
    id: "and",
    name: "AND",
    category: "Logical",
    definition: "Mengembalikan TRUE jika SEMUA argumen bernilai TRUE.",
    syntax: "=AND(logical1, [logical2], ...)",
    parameters: [
      { name: "logical1", description: "Kondisi pertama." }
    ],
    exampleScenario: "Bonus cair jika Penjualan > 100 DAN Absensi = 0.",
    exampleTable: [
      ["A", "B"],
      ["Jual", "Absen"],
      ["150", "0"]
    ],
    exampleCode: "=AND(A2>100, B2=0)",
    expectedResult: "TRUE",
    tips: ["Biasanya dimasukkan di dalam rumus IF."]
  },
  {
    id: "or",
    name: "OR",
    category: "Logical",
    definition: "Mengembalikan TRUE jika SALAH SATU argumen bernilai TRUE.",
    syntax: "=OR(logical1, [logical2], ...)",
    parameters: [],
    exampleScenario: "Diskon jika Member ATAU Belanja > 1juta.",
    exampleTable: [
      ["A", "B"],
      ["Member", "Belanja"],
      ["Tidak", "1500000"]
    ],
    exampleCode: "=OR(A2=\"Ya\", B2>1000000)",
    expectedResult: "TRUE",
    tips: []
  },
  {
    id: "not",
    name: "NOT",
    category: "Logical",
    definition: "Membalik nilai logika (TRUE jadi FALSE, dan sebaliknya).",
    syntax: "=NOT(logical)",
    parameters: [],
    exampleScenario: "Mengecek jika status BUKAN 'Selesai'.",
    exampleTable: [
      ["A"],
      ["Status"],
      ["Proses"]
    ],
    exampleCode: "=NOT(A2=\"Selesai\")",
    expectedResult: "TRUE",
    tips: []
  },
  {
    id: "iferror",
    name: "IFERROR",
    category: "Logical",
    definition: "Menangani error.",
    syntax: "=IFERROR(value, value_if_error)",
    parameters: [],
    exampleScenario: "Atasi #DIV/0!.",
    exampleTable: [["A", "B"], ["10", "0"]],
    exampleCode: "=IFERROR(A2/B2, 0)",
    expectedResult: "0",
    tips: []
  },
  {
    id: "switch",
    name: "SWITCH",
    category: "Logical",
    definition: "Mengevaluasi ekspresi terhadap daftar nilai dan mengembalikan hasil yang cocok.",
    syntax: "=SWITCH(expression, val1, result1, [default])",
    parameters: [
      { name: "expression", description: "Nilai yang dicek." },
      { name: "val1", description: "Kasus pertama." },
      { name: "result1", description: "Hasil jika kasus pertama cocok." }
    ],
    exampleScenario: "Mengubah kode 1,2,3 menjadi Kecil, Sedang, Besar.",
    exampleTable: [
      ["A"],
      ["Kode"],
      ["2"]
    ],
    exampleCode: "=SWITCH(A2, 1, \"Kecil\", 2, \"Sedang\", 3, \"Besar\")",
    expectedResult: "Sedang",
    tips: ["Lebih rapi daripada Nested IF."]
  },

  // --- 6. Financial ---
  {
    id: "pmt",
    name: "PMT",
    category: "Financial",
    definition: "Hitung cicilan.",
    syntax: "=PMT(rate, nper, pv)",
    parameters: [],
    exampleScenario: "Cicilan KPR.",
    exampleTable: [["A", "B"], ["Pinjam", "100jt"], ["Bunga", "10%"]],
    exampleCode: "=PMT(10%/12, 60, -100000000)",
    expectedResult: "2jt-an",
    tips: []
  },
  {
    id: "fv",
    name: "FV",
    category: "Financial",
    definition: "Menghitung Nilai Masa Depan (Future Value) dari investasi.",
    syntax: "=FV(rate, nper, pmt, [pv], [type])",
    parameters: [
      { name: "rate", description: "Suku bunga per periode." },
      { name: "nper", description: "Total periode." },
      { name: "pmt", description: "Pembayaran per periode." }
    ],
    exampleScenario: "Menabung 1 juta/bulan selama 5 tahun bunga 5%.",
    exampleTable: [
      ["A", "B"],
      ["Simpanan", "-1000000"],
      ["Bunga/Th", "5%"]
    ],
    exampleCode: "=FV(5%/12, 60, A2)",
    expectedResult: "68.006.083",
    tips: ["Pastikan PMT negatif jika uang keluar (menabung)."]
  },
  {
    id: "npv",
    name: "NPV",
    category: "Financial",
    definition: "Menghitung Net Present Value dari arus kas.",
    syntax: "=NPV(rate, value1, [value2], ...)",
    parameters: [
      { name: "rate", description: "Tingkat diskonto." },
      { name: "value1", description: "Arus kas (negatif=keluar, positif=masuk)." }
    ],
    exampleScenario: "Evaluasi investasi proyek.",
    exampleTable: [
      ["A", "B"],
      ["Rate", "10%"],
      ["Cashflow", "100, 200, 300"]
    ],
    exampleCode: "=NPV(0.1, 100, 200, 300)",
    expectedResult: "481.59",
    tips: ["NPV mengasumsikan arus kas terjadi di akhir periode."]
  },
  {
    id: "irr",
    name: "IRR",
    category: "Financial",
    definition: "Menghitung Internal Rate of Return (tingkat pengembalian).",
    syntax: "=IRR(values, [guess])",
    parameters: [
      { name: "values", description: "Array sel berisi arus kas." }
    ],
    exampleScenario: "Mencari % keuntungan investasi.",
    exampleTable: [
      ["A"],
      ["Cashflow"],
      ["-1000"],
      ["300"],
      ["400"],
      ["500"]
    ],
    exampleCode: "=IRR(A2:A5)",
    expectedResult: "8.9%",
    tips: ["Harus ada minimal satu nilai positif dan satu negatif."]
  },
  {
    id: "rate",
    name: "RATE",
    category: "Financial",
    definition: "Menghitung suku bunga per periode dari anuitas.",
    syntax: "=RATE(nper, pmt, pv, ...)",
    parameters: [],
    exampleScenario: "Menghitung bunga cicilan motor.",
    exampleTable: [
      ["A", "B"],
      ["Pinjam", "10jt"],
      ["Cicilan", "-500rb"],
      ["Bulan", "24"]
    ],
    exampleCode: "=RATE(24, -500000, 10000000)*12",
    expectedResult: "18.16% (per thn)",
    tips: []
  },

  // --- 7. Array ---
  {
    id: "filter",
    name: "FILTER",
    category: "Array & Dynamic Array",
    definition: "Filter data.",
    syntax: "=FILTER(arr, include)",
    parameters: [],
    exampleScenario: "Filter stok > 50.",
    exampleTable: [["A", "B"], ["Barang", "Stok"], ["Buku", "100"]],
    exampleCode: "=FILTER(A2:B2, B2>50)",
    expectedResult: "Buku 100",
    tips: []
  },
  {
    id: "unique",
    name: "UNIQUE",
    category: "Array & Dynamic Array",
    definition: "Ambil data unik.",
    syntax: "=UNIQUE(array)",
    parameters: [],
    exampleScenario: "List divisi unik.",
    exampleTable: [["A"], ["Div"], ["IT"], ["IT"]],
    exampleCode: "=UNIQUE(A2:A3)",
    expectedResult: "IT",
    tips: []
  },
  {
    id: "sort",
    name: "SORT",
    category: "Array & Dynamic Array",
    definition: "Mengurutkan isi rentang atau array.",
    syntax: "=SORT(array, [sort_index], [sort_order])",
    parameters: [
      { name: "array", description: "Data yang akan diurutkan." },
      { name: "sort_index", description: "Nomor kolom pengurutan (default 1)." },
      { name: "sort_order", description: "1 = Naik (A-Z), -1 = Turun (Z-A)." }
    ],
    exampleScenario: "Mengurutkan daftar nama siswa A-Z.",
    exampleTable: [
      ["A"],
      ["Nama"],
      ["Caca"],
      ["Budi"],
      ["Ali"]
    ],
    exampleCode: "=SORT(A2:A4)",
    expectedResult: "Ali \n Budi \n Caca",
    tips: ["Rumus ini 'tumpah' (spill) ke sel bawahnya."]
  },
  {
    id: "sequence",
    name: "SEQUENCE",
    category: "Array & Dynamic Array",
    definition: "Menghasilkan daftar angka berurutan dalam array.",
    syntax: "=SEQUENCE(rows, [columns], [start], [step])",
    parameters: [
      { name: "rows", description: "Jumlah baris." },
      { name: "start", description: "Angka awal." }
    ],
    exampleScenario: "Membuat nomor urut 1 sampai 10 otomatis.",
    exampleTable: [
      ["A"],
      ["No"]
    ],
    exampleCode: "=SEQUENCE(5)",
    expectedResult: "1 \n 2 \n 3 \n 4 \n 5",
    tips: ["Bagus untuk membuat penomoran otomatis yang dinamis."]
  },
  {
    id: "transpose",
    name: "TRANSPOSE",
    category: "Array & Dynamic Array",
    definition: "Menukar baris menjadi kolom, dan sebaliknya.",
    syntax: "=TRANSPOSE(array)",
    parameters: [
      { name: "array", description: "Rentang yang akan diputar." }
    ],
    exampleScenario: "Mengubah tabel vertikal menjadi horizontal.",
    exampleTable: [
      ["A", "B"],
      ["1", "2"]
    ],
    exampleCode: "=TRANSPOSE(A2:B2)",
    expectedResult: "1 (di baris 1) \n 2 (di baris 2)",
    tips: []
  },

  // --- 8. Database Functions ---
  {
    id: "dsum",
    name: "DSUM",
    category: "Database Functions",
    definition: "Menjumlahkan angka dalam kolom database yang memenuhi kriteria.",
    syntax: "=DSUM(database, field, criteria)",
    parameters: [
      { name: "database", description: "Seluruh rentang tabel termasuk header." },
      { name: "field", description: "Nama kolom/header yang dijumlahkan." },
      { name: "criteria", description: "Rentang sel kriteria." }
    ],
    exampleScenario: "Menjumlahkan Omzet Cabang 'Jakarta'.",
    exampleTable: [
      ["A", "B", "C"],
      ["Cabang", "Omzet", ""],
      ["Jakarta", "500", "Kriteria:"],
      ["Bandung", "300", "Cabang"],
      ["Jakarta", "200", "Jakarta"]
    ],
    exampleCode: "=DSUM(A2:B5, \"Omzet\", C4:C5)",
    expectedResult: "700",
    tips: ["Format kriteria harus Header di atas dan Syarat di bawahnya."]
  },
  {
    id: "dcount",
    name: "DCOUNT",
    category: "Database Functions",
    definition: "Menghitung sel berisi angka dalam database yang memenuhi kriteria.",
    syntax: "=DCOUNT(database, field, criteria)",
    parameters: [
      { name: "field", description: "Kolom yang akan dihitung." }
    ],
    exampleScenario: "Menghitung jumlah transaksi > 1 Juta.",
    exampleTable: [
      ["A", "B"],
      ["Trx", "Nilai"],
      ["T1", "500000"],
      ["T2", "2000000"]
    ],
    exampleCode: "=DCOUNT(A2:B4, \"Nilai\", CriteriaRange)",
    expectedResult: "1",
    tips: []
  },
  {
    id: "daverage",
    name: "DAVERAGE",
    category: "Database Functions",
    definition: "Menghitung rata-rata nilai dalam database yang memenuhi kriteria.",
    syntax: "=DAVERAGE(database, field, criteria)",
    parameters: [],
    exampleScenario: "Rata-rata gaji Divisi IT.",
    exampleTable: [
      ["A", "B"],
      ["Divisi", "Gaji"],
      ["IT", "5000"],
      ["HR", "4000"],
      ["IT", "6000"]
    ],
    exampleCode: "=DAVERAGE(A2:B5, \"Gaji\", CriteriaRange)",
    expectedResult: "5500",
    tips: []
  }
];
