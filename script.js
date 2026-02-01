// ambil data dari localStorage
let data = JSON.parse(localStorage.getItem("expenseData")) || [];

// ambil elemen
const form = document.getElementById("form");
const list = document.getElementById("list");
const saldoEl = document.getElementById("saldo");

// render ulang UI
function render() {
  list.innerHTML = "";
  let saldo = 0;

  data.forEach((item, index) => {
    // hitung saldo
    if (item.tipe === "pemasukan") {
      saldo += item.nominal;
    } else {
      saldo -= item.nominal;
    }

    // bikin list item
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
      <div>
        <strong>${item.kategori}</strong><br>
        <small class="text-muted">${item.tanggal} • ${item.keterangan || "-"}</small>
      </div>

      <div class="text-end">
        <span class="${
          item.tipe === "pemasukan" ? "text-success" : "text-danger"
        }">
          Rp ${item.nominal.toLocaleString("id-ID")}
        </span>
        <br>
        <button class="btn btn-sm btn-outline-danger mt-1" onclick="hapus(${index})">
          Hapus
        </button>
      </div>
    `;

    list.appendChild(li);
  });

  saldoEl.textContent = "Rp " + saldo.toLocaleString("id-ID");

  // simpan ulang ke localStorage
  localStorage.setItem("expenseData", JSON.stringify(data));
}

// submit form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const item = {
    tanggal: tanggal.value,
    tipe: tipe.value,
    kategori: kategori.value,
    nominal: Number(nominal.value),
    keterangan: keterangan.value,
  };

  data.push(item);
  form.reset();
  render();
});

// hapus data
function hapus(index) {
  data.splice(index, 1);
  render();
}

// render awal
render();
