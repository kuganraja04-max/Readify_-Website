# 📚 Readify

> A full-featured book discovery and reading companion web app — built with pure HTML, CSS & JavaScript.

**🌐 Live Demo → [kuganraja04-max.github.io/Readify_-Website](https://kuganraja04-max.github.io/Readify_-Website/)**

---

## Overview

Readify is a responsive, multi-page web application designed to help readers discover, track, and enjoy books. It includes a book explorer with ratings and reviews, a reading progress tracker, a random book recommender, an ambient reading environment, and a user feedback system — all without any frameworks or libraries.

---

## Features

### 🔍 Book Explorer
Search and browse books with detailed information including prequel/sequel chains, user ratings, and community reviews displayed in a structured table.

### 📊 Reading Progress Tracker
Track reading progress by entering total pages and daily reading pace. Calculates completion percentage dynamically and allows users to save progress to continue later.

### 🎲 Random Book Recommender
Filter books by genre (Fiction, Fantasy, Sci-Fi, Self-Help) and length (Short, Medium, Long) to get personalised recommendations. Save picks to a personal reading list.

### 🎵 Reading Flow
A focused reading environment featuring six ambient soundscapes (Rain, Calm, Classic, Terror, Love, Thunder) to help readers stay in the zone. Includes a completed books log.

### 💬 Feedback
A newsletter subscription and feedback submission system for community engagement.

### 🔐 User Authentication
Sign-in modal with email and password fields integrated across all pages.

---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Responsive styling and layout |
| JavaScript (Vanilla) | Dynamic functionality and DOM manipulation |
| Service Worker (`sw.js`) | PWA offline support and asset caching |
| Web App Manifest | Installable as a Progressive Web App (PWA) |

---

## Project Structure

```
Readify_-Website/
│
├── index.html              # Home page with daily quote and Author of the Day
├── script.js               # Main JS logic
├── signin.js               # Authentication modal logic
├── style.css               # Global styles
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker for offline support
│
├── Explorer/               # Book search and review feature
├── Tracker/                # Reading progress tracker
├── Recommender/            # Random book recommendation engine
├── Flow/                   # Ambient reading environment + sounds
├── Feedback/               # User feedback and newsletter
└── image/                  # All site assets and images
```

---

## Getting Started

No installation needed. Simply open in a browser:

```bash
git clone https://github.com/kuganraja04-max/Readify_-Website.git
cd Readify_-Website
# Open index.html in your browser
```

Or visit the live site directly: **[https://kuganraja04-max.github.io/Readify_-Website/](https://kuganraja04-max.github.io/Readify_-Website/)**

---

## PWA Support

Readify is installable as a Progressive Web App. Visit the live site on a mobile or desktop browser and use the "Add to Home Screen" / "Install" option to use it offline.

---

## Author

**K. Sanjay**  
Undergraduate — BSc (Hons) Information Technology (Cyber Security), APIIT Lanka  
📧 kuganraja04@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/sanjay-raja354281379)

---

## License

This project is open source and available for educational purposes.
