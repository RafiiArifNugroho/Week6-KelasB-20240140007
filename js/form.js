const form = document.getElementById("registerForm");
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

Object.keys(rules).forEach((id) => {
  const input = document.getElementById(id);
  const eventName = input.type === "checkbox" ? "change" : "input";

  input.addEventListener(eventName, () => {
    validateField(id);
    if (id === "password") {
      if (document.getElementById("konfirmasi").value) validateField("konfirmasi");
    }
  });

  input.addEventListener("blur", () => validateField(id));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const invalidIds = Object.keys(rules).filter((id) => !validateField(id));

  if (invalidIds.length > 0) {
    document.getElementById(invalidIds[0]).focus();
    return;
  }
});
