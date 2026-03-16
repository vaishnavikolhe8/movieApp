# 🎬 MovieHive

MovieHive is a **React movie browsing web app** that allows users to explore movies, view details, search movies, and save their favourite movies. The project uses the OMDb API to fetch movie data and displays it in a clean, modern card layout.

---
## Live Link
https://moviehive0.netlify.app/

---
## 🚀 Features

* 🔎 **Search Movies** by name
* 🎥 **View Movie Details** in a popup
* ❤️ **Add / Remove Favourite Movies**
* 💾 **LocalStorage Support** (favourites stay after refresh)
* 📄 **Pagination** for browsing multiple pages of movies
* 🌙 **Dark Theme UI**

---

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **CSS3**
* **OMDb API**
* **Vite**

---

## 📡 API Used

This project uses the **OMDb API** to fetch movie data.

Example API:

```
https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=movie&page=1
```

Get your free API key here:
https://www.omdbapi.com/apikey.aspx

---

## ⚙️ Installation

1. Clone the repository

```
git clone https://github.com/yourusername/moviehive.git
```

2. Navigate to the project folder

```
cd moviehive
```

3. Install dependencies

```
npm install
```

4. Create a `.env` file in the root folder

```
VITE_OMDB_API_KEY=your_api_key
```

5. Start the development server

```
npm run dev
```

---

## 📂 Project Structure

```
src
 ├── comp
 │   ├── Card.jsx
 │   ├── Nav.jsx
 │   ├── Page.jsx
 │   └── DetailCard.jsx
 |   |____....
 ├── App.jsx
 ├── main.jsx
 └── styles
```

---

## 🎯 Key Functionalities

### Movie Fetching

Movies are fetched using the OMDb search API.

### Favourite System

Users can add or remove favourite movies. The favourite list is stored using **localStorage**.

### Pagination

Pagination allows users to browse multiple pages of movie results.

---

## 👨‍💻 Author

Developed by **Vaishnavi kolhe**

---

