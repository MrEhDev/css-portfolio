document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const inputs = form.querySelectorAll("input[required], textarea[required]");

  function showError(input, message) {
    const errorSpan = document.getElementById(`error-${input.id}`);
    input.classList.remove("success");
    input.classList.add("error");
    errorSpan.textContent = message;
  }

  function showSuccess(input) {
    const errorSpan = document.getElementById(`error-${input.id}`);
    input.classList.remove("error");
    input.classList.add("success");
    errorSpan.textContent = "";
  }

  function validateInput(input) {
    if (!input.value.trim()) {
      showError(input, "This field is required");
      return false;
    }
    if (input.type === "email") {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(input.value.trim())) {
        showError(input, "Please enter a valid email");
        return false;
      }
    }
    showSuccess(input);
    return true;
  }

  // 🔹 Validación en tiempo real
  inputs.forEach((input) => {
    input.addEventListener("input", () => validateInput(input));
  });

  // 🔹 Validación al enviar
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    inputs.forEach((input) => {
      if (!validateInput(input)) valid = false;
    });

    if (valid) {
      form.reset();
      inputs.forEach((input) => input.classList.remove("success"));
      alert("Message sent successfully ✅");
    }
  });
});
