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


// sound function section

let currentAudio = null;

function playSound(id) {
  stopSound();

  const audio = document.getElementById(id);
  if(!audio){
    alert("Sound Not Found!");
    return;
  }

  audio.currentTime = 0;
  audio.play().then(()=>{
    currentAudio = audio;
  }).catch(()=>{
    alert("Audio Could Not Play. Check File Path");
  });
}

function stopSound(){
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}

// books from localstorage

const STORAGE_KEY = "completedBooks";

function getBooks(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(!raw) return [];
  try{
    return JSON.parse(raw);
  }
  catch{
    return[];
  }
}

function saveBooks(list){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function addBook() {
  const input = document.getElementById("titleSearch");
  if (!input) return;

  const bookName = input.value.trim();
  if (bookName === "") {
    alert("Enter The Boook Name!");
    return;
  }

  const books = getBooks();

  if (books.includes(bookName)){
    alert("Book Already Added");
    return;
  }

  books.push(bookName);
  saveBooks(books);

  input.value = "";
  displayBooks();
}

// remove function

function removeBook(index) {
  const books = getBooks();
  books.splice(index,1);
  saveBooks(books);
  displayBooks();
}

function displayBooks() {
  const list = document.getElementById("bookList");
  if (!list) return;

  list.innerHTML = "";
  const books = getBooks();

  if (books.length === 0) {
    list.innerHTML = "<li>No Completed Books</li>";
    return;
  }

  books.forEach((book, index) =>{
    const li = document.createElement("li");
    li.textContent = book;

    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.onclick = () => removeBook(index);

    li.appendChild(btn);
    list.appendChild(li);
  })
}


// function for the html

window.playSound = playSound;
window.stopSound = stopSound;
window.addBook = addBook;






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
