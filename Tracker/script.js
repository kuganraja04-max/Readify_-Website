// navbar select show highlighted
  const navLinks = document.querySelectorAll(".nav-links a")

  let currentPage = window.location.pathname.split("/").pop();
  if (!currentPage || currentPage === "/") currentPage = "index.html";

  navLinks.forEach(link =>{
    const href = link.getAttribute("href")
    if(!href || href==="#") return;

    const page = href.split("/").pop();
    if(page === currentPage) link.classList.add("active");
    else link.classList.remove("active");
  });



  // Hamburger section for mobile

  const hamburger = document.getElementById("hamburger");
  const navlist = document.querySelector(".nav-links");
  const rightside = document.querySelector(".right-side");

  if(hamburger && navlist && rightside){
    hamburger.addEventListener("click", () => {
      navlist.classList.toggle("active");
      rightside.classList.toggle("active");
    });
  }


  // calculating the reading progress
  function calculate(){
    const total = parseInt(document.getElementById("totalPages").value);
    const read = parseInt(document.getElementById("pagesRead").value);
    const speed = parseInt(document.getElementById("speed").value);
    
    const resultEl = document.getElementById("result");
    const bar = document.getElementById("progressBar");
    const txt = document.getElementById("progressText");

    if ( !total || !speed || read<0 || read > total ){
      resultEl.textContent = "Please Enter Valid Number."
      if (bar) bar.style.width = "0%";
      if (txt) txt.textContent = "0%";
      return;
    }

    const percent = Math.floor((read / total)*100);
    const remaining = total -read;
    const days = Math.ceil(remaining / speed);
    
    resultEl.textContent = `Completed: ${percent}% | Days To Fininsh: ${days}`;

    if (bar) {
      bar.style.width = percent + "%";

      bar.classList.remove("bump");
      void bar.offsetWidth;
      bar.classList.add("bump");
    }

    if (txt) txt.textContent = percent + "%";
  }

  // save the progress to local storage

  function saveData() {
    localStorage.setItem("totalPage", document.getElementById("totalPages").value);
    localStorage.setItem("pagesRead", document.getElementById("pagesRead").value);
    localStorage.setItem("speed", document.getElementById("speed").value);
    alert("Progress Saved!!");
  }


  // Load Data function form local storage

  function resetInputs(){
    document.getElementById("totalPages").value = "";
    document.getElementById("pagesRead").value = "";
    document.getElementById("speed").value = "";

    calculate();
  }

  
// Footer email subscription fuction
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
  if (saved.includes(email)){
    messageEl.textContent = "You Are Already Subscribed!!!"
    messageEl.style.color = "green";
    return;
  }

  saved.push(email);
  localStorage.setItem("newsletterEmail", JSON.stringify(saved));

  messageEl.textContent = "Subscribed Successfully!!!"
  messageEl.style.color = "green";
  emailInput.value ="";
}