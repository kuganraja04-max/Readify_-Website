
  updateSignInUI();
  setupSignInModal();

  function updateSignInUI() {
    const loginBtn = document.querySelector(".login-button");
    if (!loginBtn) return;

    const isSignedIn = localStorage.getItem("isSignedIn") === "true";
    const user = localStorage.getItem("signedUser") || "User";

    if (isSignedIn) {
      loginBtn.textContent = `Signed in (${user})`;
      loginBtn.style.cursor = "pointer";

      loginBtn.onclick = (e) => {
        e.preventDefault();
        if (confirm("Sign out?")) {
          localStorage.removeItem("isSignedIn");
          localStorage.removeItem("signedUser");
          updateSignInUI();
        }
      };
    } else {
      loginBtn.textContent = "Sign-In";
      loginBtn.onclick = null;
    }
  }

  function setupSignInModal() {
    const loginBtn = document.querySelector(".login-button");
    const modal = document.getElementById("signInModal");
    const closeBtn = document.getElementById("closeSignIn");
    const form = document.getElementById("signInForm");

    if (!loginBtn || !modal || !closeBtn || !form) return;

    loginBtn.addEventListener("click", (e) => {
      if (localStorage.getItem("isSignedIn") === "true") return;
      e.preventDefault();
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => modal.style.display = "none");

    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("signinEmail").value.trim();
      const password = document.getElementById("signinPassword").value.trim();

      if (!email || !password) {
        alert("Please enter email and password");
        return;
      }

      localStorage.setItem("isSignedIn", "true");
      localStorage.setItem("signedUser", email);

      modal.style.display = "none";
      form.reset();
      updateSignInUI();
    });
  }
