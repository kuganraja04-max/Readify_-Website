document.addEventListener("DOMContentLoaded", ()=>{
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


  // Hero section auto rotating quotes and image

  const quotes = [
    {
      text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
      author: "George R.R. Martin",
      image: "image/hero_image1.webp",
    },

    {
      text: "So many books, so little time.",
      author: "Frank Zappa",
      image: "image/hero-image2.jpg",
    },

    {
      text: "Books are a uniquely portable magic.",
      author: "Stephen King",
      image: "image/hero-image3.webp",
    },

    {
      text: "And, when you want something, all the universe conspires in helping you to achieve it.",
      author: "Paulo Coelho",
      image: "image/hero-image4.webp",
    },

    {
      text: "Even the smallest person can change the course of the future.",
      author: "J.R.R. Tolkien",
      image: "image/hero-image5.jpg",
    },

    {
      text: "What is essential is invisible to the eye.",
      author: "Antoine de Saint-Exupéry",
      image: "image/hero-image6.webp",
    }
  ];

  let quoteIndex = 0;

function rotateQuotes() {
  const quotetext = document.getElementById("quote-text");
  const quoteauthor = document.getElementById("quote-author");
  const heroimage = document.getElementById("hero-image");

  console.log("🔎 elements:", quotetext, quoteauthor, heroimage);

  if (!quotetext || !quoteauthor || !heroimage) {
    console.error("Missing hero element.");
    return;
  }

  quotetext.classList.add("quote-fade-out");
  quoteauthor.classList.add("quote-fade-out");
  heroimage.classList.add("fade-out");

  setTimeout(() => {
    quotetext.textContent = quotes[quoteIndex].text;
    quoteauthor.textContent = "- " + quotes[quoteIndex].author;
    heroimage.style.backgroundImage = `url(${quotes[quoteIndex].image})`;

    quotetext.classList.remove("quote-fade-out");
    quoteauthor.classList.remove("quote-fade-out");
    heroimage.classList.remove("fade-out");

    quoteIndex = (quoteIndex + 1) % quotes.length;
  }, 600);
}


rotateQuotes();
setInterval(rotateQuotes, 6000);



  // Author of the day and it will change day by day

  const authorimage = document.getElementById("authorImg");
  const authorname = document.getElementById("authorName");
  const authordesc = document.getElementById("authorDesc");

  if(authorimage && authorname && authordesc){
    const authors = [
      { name: "J.K. Rowling", desc: "Known for the Harry Potter series, inspiring millions of readers.", img: "image/author-image1.jpg" },
      { name: "Paulo Coelho", desc: "Author of The Alchemist, famous for motivational storytelling.", img: "image/author-image1.jpg" },
      { name: "Jane Austen", desc: "Classic novelist known for Pride and Prejudice and social humour.", img: "image/author-image1.jpg" },
      { name: "George R.R. Martin", desc: "Writes epic fantasy with deep characters and world-building.", img: "image/author-image1.jpg" },
      { name: "Stephen King", desc: "Popular author known for thrilling and suspenseful novels.", img: "image/author-image1.jpg" }
    ];

    const today = new Date();
    const daynumber = Math.floor(today.getTime() / 86400000);
    const pick = daynumber % authors.length;
    const a = authors[pick];

    authorname.textContent = a.name;
    authordesc.textContent = a.desc;
    authorimage.src = a.img;
    authorimage.alt = `Author Of The Day: ${a.name}`;
  }

});

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