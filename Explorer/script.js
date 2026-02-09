
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

// main explorer function section

// reset button
document.addEventListener("DOMContentLoaded", () => {

  const titleSearch = document.getElementById("titleSearch");
  const authorSearch = document.getElementById("authorSearch");

  document.querySelector(".search-row button").addEventListener("click", () => {
    titleSearch.value = "";
    authorSearch.value = "";
    selectedGenre = "all";
    buildGenreButtons();
    displayBooks(books);
  });

});


// books in explorer
const books = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "fantasy",
    image: "../image/Book_Coverpage/Book1.jpg",
    synopsis: "A young boy discovers he is a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
    series: ["Harry Potter Series"],
    ratings: [
      { user: "Anna", rating: "⭐⭐⭐⭐⭐", comment: "Magical and unforgettable." },
      { user: "Tom", rating: "⭐⭐⭐⭐", comment: "A perfect start to the series." }
    ]
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "fantasy",
    image: "../image/Book_Coverpage/book2.jpg",
    synopsis: "Bilbo Baggins joins a group of dwarves on a quest to reclaim their homeland from a dragon.",
    series: ["Middle-earth Universe"],
    ratings: [
      { user: "Lia", rating: "⭐⭐⭐⭐⭐", comment: "Classic adventure." },
      { user: "Ben", rating: "⭐⭐⭐⭐", comment: "Charming and exciting." }
    ]
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "historical",
    image: "../image/Book_Coverpage/book3.jpg",
    synopsis: "A young girl grows up in the American South while her father defends a wrongly accused man.",
    series: [],
    ratings: [
      { user: "Sara", rating: "⭐⭐⭐⭐⭐", comment: "Powerful and emotional." },
      { user: "Jake", rating: "⭐⭐⭐⭐", comment: "A timeless story." }
    ]
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "sci-fi",
    image: "../image/Book_Coverpage/book4.jpg",
    synopsis: "In a dystopian future, a man struggles against a totalitarian regime that controls everything.",
    series: [],
    ratings: [
      { user: "Maya", rating: "⭐⭐⭐⭐⭐", comment: "Thought-provoking." },
      { user: "Ryan", rating: "⭐⭐⭐⭐", comment: "Still relevant today." }
    ]
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "romance",
    image: "../image/Book_Coverpage/book5.jpg",
    synopsis: "Elizabeth Bennet navigates love, class, and misunderstandings in 19th-century England.",
    series: [],
    ratings: [
      { user: "Ella", rating: "⭐⭐⭐⭐⭐", comment: "A beautiful love story." },
      { user: "Leo", rating: "⭐⭐⭐⭐", comment: "Witty and charming." }
    ]
  },
  {
    title: "The Shining",
    author: "Stephen King",
    genre: "horror",
    image: "../image/Book_Coverpage/book6.jpg",
    synopsis: "A family stays in an isolated hotel where dark forces slowly drive the father insane.",
    series: [],
    ratings: [
      { user: "Chris", rating: "⭐⭐⭐⭐⭐", comment: "Creepy and intense." },
      { user: "Nina", rating: "⭐⭐⭐⭐", comment: "Psychological horror masterpiece." }
    ]
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "classic",
    image: "../image/Book_Coverpage/book7.jpg",
    synopsis: "A mysterious millionaire and his obsession with a lost love in the Roaring Twenties.",
    series: [],
    ratings: [
      { user: "Ivy", rating: "⭐⭐⭐⭐", comment: "Beautiful writing." },
      { user: "Paul", rating: "⭐⭐⭐⭐⭐", comment: "A tragic masterpiece." }
    ]
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "sci-fi",
    image: "../image/Book_Coverpage/book8.jpg",
    synopsis: "A teenage girl volunteers to take her sister's place in a deadly televised competition.",
    series: ["The Hunger Games Series"],
    ratings: [
      { user: "Kyle", rating: "⭐⭐⭐⭐⭐", comment: "So gripping!" },
      { user: "Ria", rating: "⭐⭐⭐⭐", comment: "Action-packed." }
    ]
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "adventure",
    image: "../image/Book_Coverpage/book9.jpg",
    synopsis: "A shepherd boy travels in search of treasure and discovers his destiny.",
    series: [],
    ratings: [
      { user: "Zara", rating: "⭐⭐⭐⭐⭐", comment: "Inspiring journey." },
      { user: "Jon", rating: "⭐⭐⭐⭐", comment: "Simple but deep." }
    ]
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "thriller",
    image: "../image/Book_Coverpage/book10.jpg",
    synopsis: "A symbologist uncovers a religious mystery that could shake the foundations of history.",
    series: ["Robert Langdon Series"],
    ratings: [
      { user: "Sam", rating: "⭐⭐⭐⭐", comment: "Fast-paced mystery." },
      { user: "Lara", rating: "⭐⭐⭐⭐⭐", comment: "So many twists!" }
    ]
  },

  // Stephen King Books

  {
    title: "It",
    author: "Stephen King",
    genre: "horror",
    image: "../image/Book_Coverpage/book11.jpg",
    synopsis: "A group of kids face a terrifying shape-shifting monster that feeds on fear in their small town.",
    series: [],
    ratings: [
      { user: "Sam", rating: "⭐⭐⭐⭐⭐", comment: "Terrifying and emotional." },
      { user: "Lara", rating: "⭐⭐⭐⭐", comment: "Pennywise is unforgettable." }
    ]
  },
  {
    title: "Doctor Sleep",
    author: "Stephen King",
    genre: "horror",
    image: "../image/Book_Coverpage/book12.jpg",
    synopsis: "Years after the Overlook Hotel, Danny Torrance struggles with his past and uses his psychic 'shining' ability to protect a young girl from a sinister cult.",
    series: ["The Shining Series"],
    ratings: [
      { user: "Liam", rating: "⭐⭐⭐⭐⭐", comment: "Great sequel to The Shining!" },
      { user: "Mia", rating: "⭐⭐⭐⭐", comment: "Emotional and creepy." }
    ]
  },
  {
    title: "Pet Sematary",
    author: "Stephen King",
    genre: "horror",
    image: "../image/Book_Coverpage/book13.jpg",
    synopsis: "A burial ground with dark powers brings back the dead — but not as they once were.",
    series: [],
    ratings: [
      { user: "Tom", rating: "⭐⭐⭐⭐⭐", comment: "Deeply disturbing." },
      { user: "Nina", rating: "⭐⭐⭐⭐", comment: "One of his darkest stories." }
    ]
  },
  {
    title: "Carrie",
    author: "Stephen King",
    genre: "horror",
    image: "../image/Book_Coverpage/book14.jpg",
    synopsis: "A bullied teenage girl discovers she has telekinetic powers — and takes revenge.",
    series: [],
    ratings: [
      { user: "Ella", rating: "⭐⭐⭐⭐", comment: "Classic revenge horror." },
      { user: "Ryan", rating: "⭐⭐⭐⭐⭐", comment: "Short but powerful." }
    ]
  },
  {
    title: "Misery",
    author: "Stephen King",
    genre: "thriller",
    image: "../image/Book_Coverpage/book15.jpg",
    synopsis: "An author is held captive by his 'biggest fan' who demands he rewrite his novel.",
    series: [],
    ratings: [
      { user: "Chris", rating: "⭐⭐⭐⭐⭐", comment: "So tense!" },
      { user: "Amy", rating: "⭐⭐⭐⭐", comment: "Psychological nightmare." }
    ]
  },
  {
    title: "The Stand",
    author: "Stephen King",
    genre: "horror",
    image: "../image/Book_Coverpage/book16.jpg",
    synopsis: "After a deadly virus wipes out most of humanity, survivors face a battle between good and evil.",
    series: [],
    ratings: [
      { user: "Paul", rating: "⭐⭐⭐⭐⭐", comment: "Epic and intense." },
      { user: "Ivy", rating: "⭐⭐⭐⭐", comment: "Huge but worth it." }
    ]
  }
];


// book card display
const container = document.getElementById("bookContainer");
const titleSearch = document.getElementById("titleSearch");
const authorSearch = document.getElementById("authorSearch");
const genreButtonsDiv = document.getElementById("genreButtons");

const modal = document.getElementById("bookModal");
const closeModalBtn = document.getElementById("closeModal");


let selectedGenre = "all";

function displayBooks(bookList) {
  container.innerHTML = "";

  if (bookList.length === 0) {
    container.innerHTML = `<p style="text-align:center; width:100%;">No books found.</p>`;
    return;
  }

  bookList.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <img
        src="${book.image}" 
        alt="${book.title}"
        loading="lazy"
        decoding="async"
        width="220"
        height="250"
      >
      <h3>${book.title}</h3>
      <p>${book.author}</p>
    `;

    card.addEventListener("click", () => openModal(book));
    container.appendChild(card);
  });
}

// book modal
function openModal(book) {
  modal.style.display = "block";

  document.getElementById("modalTitle").textContent = book.title;
  document.getElementById("modalSynopsis").textContent = `"${book.synopsis}"`;

  const seriesList = document.getElementById("modalSeries");
  seriesList.innerHTML = "";
  book.series.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    seriesList.appendChild(li);
  });

  const ratingsBody = document.getElementById("modalRatings");
  ratingsBody.innerHTML = "";
  book.ratings.forEach(r => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${r.user}</td>
      <td>${r.rating}</td>
      <td>"${r.comment}"</td>
    `;
    ratingsBody.appendChild(row);
  });
}

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});


// fillter section

function filterBooks() {
  const titleText = titleSearch.value.toLowerCase().trim();
  const authorText = authorSearch.value.toLowerCase().trim();

  const filtered = books.filter(book => {
    const matchTitle = book.title.toLowerCase().includes(titleText);
    const matchAuthor = book.author.toLowerCase().includes(authorText);
    const matchGenre = (selectedGenre === "all" || book.genre === selectedGenre);

    return matchTitle && matchAuthor && matchGenre;
  });

  displayBooks(filtered);
}

// genre section
function buildGenreButtons() {
  const genres = ["all", ...new Set(books.map(b => b.genre))];

  genreButtonsDiv.innerHTML = "";

  genres.forEach(g => {
    const btn = document.createElement("button");
    btn.textContent = (g === "all") ? "All" : g.toUpperCase();

    if (g === selectedGenre) btn.classList.add("active");

    btn.addEventListener("click", () => {
      selectedGenre = g;

      document.querySelectorAll(".genre-buttons button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      filterBooks();
    });

    genreButtonsDiv.appendChild(btn);
  });
}


// all events

titleSearch.addEventListener("input", filterBooks);
authorSearch.addEventListener("input", filterBooks);

buildGenreButtons();
displayBooks(books);


  


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



  
  





