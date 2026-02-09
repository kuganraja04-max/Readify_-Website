
document.addEventListener("DOMContentLoaded", () => {


  const navLinks = document.querySelectorAll(".nav-links a");

  let currentPage = window.location.pathname.split("/").pop();
  if (!currentPage || currentPage === "/") currentPage = "index.html";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    const page = href.split("/").pop();
    if (page === currentPage) link.classList.add("active");
    else link.classList.remove("active");
  });


  const hamburger = document.getElementById("hamburger");
  const navlist = document.querySelector(".nav-links");
  const rightside = document.querySelector(".right-side");

  if (hamburger && navlist && rightside) {
    hamburger.addEventListener("click", () => {
      navlist.classList.toggle("active");
      rightside.classList.toggle("active");
    });
  }


  const form = document.getElementById("feedbackForm");
  const confirmationMsg = document.getElementById("confirmationMsg");


  if (form && confirmationMsg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim() || "";
      const email = document.getElementById("feedbackemail")?.value.trim() || "";
      const message = document.getElementById("feedbackmessage")?.value.trim() || "";

      if (!name || !email || !message) {
        confirmationMsg.textContent = "Please fill all fields.";
        confirmationMsg.style.color = "red";
        return;
      }

      confirmationMsg.textContent = "Successfully submitted!";
      confirmationMsg.style.color = "green";
      form.reset();

      setTimeout(() => {
        confirmationMsg.textContent = "";
      }, 3000);
    });
  }
});



function saveEmail() {
  const emailInput = document.getElementById("email");
  const messageEl = document.getElementById("message");
  if (!emailInput || !messageEl) return;

  const email = emailInput.value.trim();
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(email)) {
    messageEl.textContent = "Please Enter A Valid Email.";
    messageEl.style.color = "red";
    return;
  }

  const saved = JSON.parse(localStorage.getItem("newsletterEmail")) || [];
  if (saved.includes(email)) {
    messageEl.textContent = "You Are Already Subscribed!!!";
    messageEl.style.color = "green";
    return;
  }

  saved.push(email);
  localStorage.setItem("newsletterEmail", JSON.stringify(saved));

  messageEl.textContent = "Subscribed Successfully!!!";
  messageEl.style.color = "green";
  emailInput.value = "";
}








































