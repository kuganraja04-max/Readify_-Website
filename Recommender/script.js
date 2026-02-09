

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


  // recommend book fuction

  const default_image = "../image/Recommend_book/R_image.webp"
  const storage_key = "readify_reading_list"

  // book stored 
  const book = [
  { title: "The Midnight Library", author: "Matt Haig", genre: "fiction", length: "medium", image: "../image/Recommend_book/R_image2.jpg" },
  { title: "The Hunger Games", author: "Suzanne Collins", genre: "fantasy", length: "medium", image: "../image/Recommend_book/R_image3.jpg" },
  { title: "Gone Girl", author: "Gillian Flynn", genre: "fiction", length: "long", image: "../image/Recommend_book/R_image4.png" },
  { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", genre: "self-help", length: "medium", image: "../image/Recommend_book/R_image5.jpg" },
  { title: "Ender's Game", author: "Orson Scott Card", genre: "sci-fi", length: "medium", image: "../image/Recommend_book/R_image6.jpg" },
  { title: "The Fault in Our Stars", author: "John Green", genre: "fiction", length: "medium", image: "../image/Recommend_book/R_image7.jpg" },
  { title: "Think and Grow Rich", author: "Napoleon Hill", genre: "self-help", length: "long", image: "../image/Recommend_book/R_image8.jpg" },
  { title: "The Giver of Stars", author: "Jojo Moyes", genre: "fiction", length: "long", image: "../image/Recommend_book/R_image9.jpg" },
  { title: "The Maze Runner", author: "James Dashner", genre: "fantasy", length: "medium", image: "../image/Recommend_book/R_image10.jpg" },
  { title: "A Brief History of Time", author: "Stephen Hawking", genre: "self-help", length: "medium", image: "../image/Recommend_book/R_image11.jpg" },
  { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", genre: "fiction", length: "long", image: "../image/Recommend_book/R_image12.jpg" },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "fantasy", length: "long", image: "../image/Recommend_book/R_image13.jpg" },
  { title: "Life of Pi", author: "Yann Martel", genre: "fiction", length: "medium", image: "../image/Recommend_book/R_image14.jpg" },
  ];

  // save the books

  let currentBook = null;

  window.recommendBook = recommendBook;
  window.pickAgain = pickAgain;
  window.saveToReadingList = saveToReadingList;

  function recommender() {
    const img = document.getElementById("bookImage");
    if (img) {
      img.src = default_image;
      img.alt = "Default Book Cover Image"
    }

    renderReadingList();
  }

  // filter section

  function getFilterBooks() {
    const genreEl = document.getElementById("genre");
    const lenghtEL = document.getElementById("length");

    const selectedGenre = genreEl ? genreEl.value : "all";
    const selectedLength = lenghtEL ? lenghtEL.value : "all";

    return book.filter((b) =>{
      const genreOk = selectedGenre === "all" || b.genre === selectedGenre;
      const lengthOk = selectedLength === "all" || b.length === selectedLength;
      return genreOk && lengthOk;
    });
  }

  // random function book selection

  function getRandomBook(list) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
  } 

  // dispaly book 

  function displayBook(book) {
    currentBook = book;

    const titleEl = document.getElementById("bookTitle");
    const authorEl = document.getElementById("bookAuthor");
    const genreEl = document.getElementById("bookGenre");
    const lengthEl = document.getElementById("bookLength");
    const imgEl = document.getElementById("bookImage");

    if (titleEl) titleEl.innerText = book.title;
    if (authorEl) authorEl.innerText = "Author: " + book.author;
    if (genreEl)  genreEl.innerText = "Genre: " + book.genre;
    if (lengthEl) lengthEl.innerText = "Length: " + book.length;

    if (imgEl) {
      imgEl.src = book.image ? book.image : default_image;
      imgEl.alt = book.title + "Cover";
    }
  }


  // recommend button

  function recommendBook() {
    const msg = document.getElementById("msg");
    const filtered = getFilterBooks();

    if (filtered.length === 0){
      if (msg) msg.innerText = "No Books Match For Your Selection. Try Different Filters.";
      return;
    }

    if(msg) msg.innerText = "";

    const book = getRandomBook(filtered);
    displayBook(book);
    animateCard();
  }

  // Pick again button
  function pickAgain(){
    recommendBook();
  }

  // Animation

  function animateCard(){
    const card = document.getElementById("card");
    if (!card) return;

    card.classList.remove("animate");
    void card.offsetWidth; 
    card.classList.add("animate");
  }

  // save the current book to the local storage

  function saveToReadingList() {
    const msg = document.getElementById("msg");

    if(!currentBook) {
      if (msg) msg.innerText = "Please Recommend A Book First.";
      return;
    }

    const list = loadReadingList();
    const exists = list.some((b) => b.title === currentBook.title);
    if (exists) {
      if (msg) msg.innerText = "This Book Is Already In Your Reading List."
      return;
    }

    list.push(currentBook);
    localStorage.setItem(storage_key, JSON.stringify(list));

    if(msg) msg.innerText = "Saved To Your Reading List."
    renderReadingList();
  }


  // load the list 

  function loadReadingList(){
    const raw = localStorage.getItem(storage_key);
    if(!raw) return [];

    try{
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed: [];
    } 

    catch (e) {
      return[];
    }
  }


  // render the list in website

  function renderReadingList(){
    const ul = document.getElementById("readingList");
    if (!ul) return;

    ul.innerHTML = "";

    const list = loadReadingList();
    if (list.length === 0){
      ul.innerHTML = "<li>No Saved Books Yet.</li>";
      return;
    }

    list.forEach((b)=> {
      const li = document.createElement("li");
      li.innerText = `${b.title} - ${b.author}`;
      ul.appendChild(li);
    });
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



