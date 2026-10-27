const form = document.getElementById("registerForm");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const togglePasswordBtn = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

const rules = {
  nama() {
    const v = document.getElementById("nama").value.trim();
    if (!v) return "Nama lengkap wajib diisi.";
    if (v.length < 3) return "Nama minimal 3 karakter.";
    if (!/^[\p{L}\s.'-]+$/u.test(v)) return "Nama hanya boleh berisi huruf dan spasi.";
    return "";
  },

  email() {
    const v = document.getElementById("email").value.trim();
    if (!v) return "Email wajib diisi.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Format email tidak valid.";
    return "";
  },

  password() {
    const v = passwordInput.value;
    if (!v) return "Password wajib diisi.";
    if (v.length < 8) return `Password minimal 8 karakter (sekarang ${v.length}).`;
    if (!/[A-Za-z]/.test(v) || !/\d/.test(v)) return "Password harus mengandung huruf dan angka.";
    return "";
  },

  konfirmasi() {
    const v = document.getElementById("konfirmasi").value;
    if (!v) return "Konfirmasi password wajib diisi.";
    if (v !== passwordInput.value) return "Konfirmasi password tidak sama.";
    return "";
  },

  setuju() {
    return document.getElementById("setuju").checked
      ? ""
      : "Kamu harus menyetujui syarat dan ketentuan.";
  },
};

function validateField(id) {
  const input = document.getElementById(id);
  const message = rules[id]();
  document.getElementById(`${id}-error`).textContent = message;

  if (input.type !== "checkbox") {
    input.setAttribute("aria-invalid", message ? "true" : "false");
  }
  return message === "";
}

function updateStrength(value) {
  let score = 0;
  if (value.length >= 8) score++;
  if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score++;
  if (/\d/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;
  if (!value) score = 0;

  const labels = ["-", "Lemah", "Cukup", "Bagus", "Kuat"];
  strengthBar.dataset.level = String(score);
  strengthText.textContent = `Kekuatan password: ${labels[score]}`;
}

Object.keys(rules).forEach((id) => {
  const input = document.getElementById(id);
  const eventName = input.type === "checkbox" ? "change" : "input";

  input.addEventListener(eventName, () => {
    validateField(id);
    if (id === "password") {
      updateStrength(passwordInput.value);
      if (document.getElementById("konfirmasi").value) validateField("konfirmasi");
    }
  });

  input.addEventListener("blur", () => validateField(id));
});

togglePasswordBtn.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  document.getElementById("konfirmasi").type = isHidden ? "text" : "password";
  togglePasswordBtn.textContent = isHidden ? "Sembunyikan" : "Tampilkan";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const invalidIds = Object.keys(rules).filter((id) => !validateField(id));

  if (invalidIds.length > 0) {
    document.getElementById(invalidIds[0]).focus();
    return;
  }
});
