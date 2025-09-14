document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", (e) => {
    // Basic client-side validation (helps user; does NOT replace server checks).
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    // simple email regex (basic)
    const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email || !message) {
      e.preventDefault();
      status.textContent = "Please fill all fields.";
      return;
    }
    if (!emailOK) {
      e.preventDefault();
      status.textContent = "Please enter a valid email address.";
      return;
    }

    // All good — show sending state and allow the normal form submit to proceed.
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    status.textContent = "";
    // do NOT call e.preventDefault() — we want the browser to submit to Netlify,
    // which will redirect to thankyou.html on success.
  });
});
