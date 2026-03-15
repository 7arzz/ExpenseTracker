// ===== STATE =====
let data = JSON.parse(localStorage.getItem("expenseData")) || [];
let editIndex = -1;
let deleteIndex = -1;
let activeFilter = "semua";
let searchQuery = "";

// ===== DOM ELEMENTS =====
const form = document.getElementById("form");
const formTitle = document.getElementById("formTitle");
const btnSubmit = document.getElementById("btnSubmit");
const list = document.getElementById("list");
const totalIncomeEl = document.getElementById("totalIncome");
const totalExpenseEl = document.getElementById("totalExpense");
const totalBalanceEl = document.getElementById("totalBalance");
const searchInput = document.getElementById("searchInput");
const confirmModal = document.getElementById("confirmModal");
const btnCancelDelete = document.getElementById("btnCancelDelete");
const btnConfirmDelete = document.getElementById("btnConfirmDelete");

// Form fields
const tanggalInput = document.getElementById("tanggal");
const tipeInput = document.getElementById("tipe");
const kategoriInput = document.getElementById("kategori");
const nominalInput = document.getElementById("nominal");
const keteranganInput = document.getElementById("keterangan");

// ===== UTILITIES =====
function formatRupiah(amount) {
  const abs = Math.abs(amount);
  const formatted = abs.toLocaleString("id-ID");
  return (amount < 0 ? "-Rp " : "Rp ") + formatted;
}

function setDefaultDate() {
  const today = new Date().toISOString().split("T")[0];
  tanggalInput.value = today;
}

// ===== RENDER =====
function render() {
  list.innerHTML = "";

  let totalIncome = 0;
  let totalExpense = 0;

  // Sort by date, newest first
  const sorted = [...data]
    .map((item, originalIndex) => ({ ...item, _index: originalIndex }))
    .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));

  // Filter and search
  const filtered = sorted.filter((item) => {
    // Filter by type
    if (activeFilter !== "semua" && item.tipe !== activeFilter) return false;

    // Search by category or description
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchCategory = item.kategori.toLowerCase().includes(q);
      const matchNote = (item.keterangan || "").toLowerCase().includes(q);
      if (!matchCategory && !matchNote) return false;
    }

    return true;
  });

  // Calculate totals from ALL data (not filtered)
  data.forEach((item) => {
    if (item.tipe === "pemasukan") {
      totalIncome += item.nominal;
    } else {
      totalExpense += item.nominal;
    }
  });

  const balance = totalIncome - totalExpense;

  // Update dashboard
  totalIncomeEl.textContent = formatRupiah(totalIncome);
  totalExpenseEl.textContent = formatRupiah(totalExpense);
  totalBalanceEl.textContent = formatRupiah(balance);

  // Empty state
  if (filtered.length === 0) {
    const emptyDiv = document.createElement("div");
    emptyDiv.className = "empty-state";

    if (data.length === 0) {
      emptyDiv.innerHTML = `
        <div class="empty-icon">📋</div>
        <p>Belum ada transaksi</p>
        <p class="empty-hint">Tambahkan transaksi pertamamu di atas</p>
      `;
    } else {
      emptyDiv.innerHTML = `
        <div class="empty-icon">🔍</div>
        <p>Tidak ada hasil</p>
        <p class="empty-hint">Coba ubah filter atau kata kunci pencarian</p>
      `;
    }
    list.appendChild(emptyDiv);
  }

  // Render filtered items
  filtered.forEach((item, i) => {
    const li = document.createElement("li");
    li.className = `transaction-item ${item.tipe === "pemasukan" ? "income-item" : "expense-item"}`;
    li.style.animationDelay = `${i * 0.05}s`;

    const isIncome = item.tipe === "pemasukan";
    const sign = isIncome ? "+" : "-";
    const amountClass = isIncome ? "income" : "expense";

    li.innerHTML = `
      <div class="tx-info">
        <div class="tx-category">${escapeHtml(item.kategori)}</div>
        <div class="tx-meta">
          <i class="fa-regular fa-calendar"></i> ${item.tanggal}
          ${item.keterangan ? `<span>•</span> ${escapeHtml(item.keterangan)}` : ""}
        </div>
      </div>
      <div class="tx-amount ${amountClass}">${sign}Rp ${item.nominal.toLocaleString("id-ID")}</div>
      <div class="tx-actions">
        <button class="btn-icon btn-edit" title="Edit" onclick="startEdit(${item._index})">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn-icon btn-delete" title="Hapus" onclick="confirmDelete(${item._index})">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;

    list.appendChild(li);
  });

  // Save to localStorage
  localStorage.setItem("expenseData", JSON.stringify(data));
}

// ===== XSS PROTECTION =====
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ===== FORM SUBMIT =====
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const item = {
    tanggal: tanggalInput.value,
    tipe: tipeInput.value,
    kategori: kategoriInput.value.trim(),
    nominal: Number(nominalInput.value),
    keterangan: keteranganInput.value.trim(),
  };

  // Validation
  if (!item.kategori) {
    kategoriInput.focus();
    return;
  }
  if (item.nominal <= 0) {
    nominalInput.focus();
    return;
  }

  if (editIndex >= 0) {
    // Update existing item
    data[editIndex] = item;
    cancelEdit();
  } else {
    // Add new item
    data.push(item);
  }

  form.reset();
  setDefaultDate();
  render();
});

// ===== EDIT =====
function startEdit(index) {
  editIndex = index;
  const item = data[index];

  tanggalInput.value = item.tanggal;
  tipeInput.value = item.tipe;
  kategoriInput.value = item.kategori;
  nominalInput.value = item.nominal;
  keteranganInput.value = item.keterangan || "";

  formTitle.textContent = "Edit Transaksi";
  btnSubmit.innerHTML = '<i class="fa-solid fa-check"></i>&nbsp; Update';

  // Scroll to form
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelEdit() {
  editIndex = -1;
  formTitle.textContent = "Tambah Transaksi";
  btnSubmit.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>&nbsp; Simpan';
}

// ===== DELETE WITH CONFIRMATION =====
function confirmDelete(index) {
  deleteIndex = index;
  confirmModal.classList.add("visible");
}

btnCancelDelete.addEventListener("click", function () {
  deleteIndex = -1;
  confirmModal.classList.remove("visible");
});

btnConfirmDelete.addEventListener("click", function () {
  if (deleteIndex >= 0) {
    data.splice(deleteIndex, 1);

    // If we were editing this item, cancel edit
    if (editIndex === deleteIndex) {
      cancelEdit();
      form.reset();
      setDefaultDate();
    } else if (editIndex > deleteIndex) {
      editIndex--;
    }

    deleteIndex = -1;
    confirmModal.classList.remove("visible");
    render();
  }
});

// Close modal on overlay click
confirmModal.addEventListener("click", function (e) {
  if (e.target === confirmModal) {
    deleteIndex = -1;
    confirmModal.classList.remove("visible");
  }
});

// ===== FILTER =====
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    activeFilter = this.dataset.filter;
    render();
  });
});

// ===== SEARCH =====
searchInput.addEventListener("input", function () {
  searchQuery = this.value.trim();
  render();
});

// ===== KEYBOARD SHORTCUT: Escape to cancel edit =====
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (confirmModal.classList.contains("visible")) {
      deleteIndex = -1;
      confirmModal.classList.remove("visible");
    } else if (editIndex >= 0) {
      cancelEdit();
      form.reset();
      setDefaultDate();
    }
  }
});

// ===== INIT =====
setDefaultDate();
render();
