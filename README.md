# Guessing Game

A simple and interactive **number guessing game** built with **React** and **Lucide Icons**.
Choose your difficulty and try to guess the secret number!

---

## Features

* **3 Difficulty Levels**:
  - Easy: 5 attempts, range 1-50
  - Medium: 3 attempts, range 1-100
  - Hard: 2 attempts, range 1-100
* Random number generation based on difficulty
* Instant feedback (Go Higher / Go Lower / Correct)
* Press Enter to submit your guess
* New Game button to restart anytime
* Automatic reset after game over or correct guess
* Input validation with helpful error messages
* Styled using **Tailwind CSS**
* Fun gamepad icons from **Lucide React**

---

## How to Play

1. Select a difficulty level (Easy, Medium, or Hard)
2. Enter a number in the input box
3. Press **Submit** or hit **Enter** to check your guess
4. The game will tell you whether to go **higher** or **lower**
5. Try to guess the number before running out of attempts!
6. Click **New Game** to start over at any time

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
git clone https://github.com/Spagero763/game.git
cd game
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
