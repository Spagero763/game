# Guessing Game

A simple and interactive **number guessing game** built with **React** and **Lucide Icons**.
Players have **3 attempts** to guess a randomly generated number between **1 and 100**.

---

## Features

* Random number generation between **1–100**
* Limited to **3 attempts** per game
* Instant feedback (Higher / Lower / Correct)
* Automatic reset after game over or correct guess
* Styled using **Tailwind CSS**
* Fun gamepad icons from **Lucide React**

---

## How to Play

1. Enter a number between **1 and 100** in the input box.
2. Click **Submit** to check your guess.
3. The game will tell you whether the correct number is **higher** or **lower**.
4. You have **3 attempts** to guess correctly.
5. If you guess the number or run out of attempts, the game resets automatically.

---

## Tech Stack

* **React** (Vite)
* **Lucide React** (for icons)
* **Tailwind CSS** (for styling)

---

## Project Structure

```
guessing-game/
│
├── src/
│   ├── App.jsx          # Main game logic
│   ├── App.css          # import tailwind
│   ├── main.jsx         # Entry point
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Spagero763/guessing-game.git
cd guessing-game
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the App

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧠 Code Overview

### 🔹 `useEffect`

Initializes a random target number between 1 and 100 when the app loads.

### 🔹 `handleCheckGuess`

Handles user input validation and displays alerts for:

* Correct guesses 🎉
* Incorrect guesses (Higher/Lower hints)
* Game Over when attempts reach 3

### 🔹 `resetGame`

Resets attempts, clears input, and generates a new random number.

---
