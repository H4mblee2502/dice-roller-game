# 🎲 Custom Dice Roller Game

Welcome to the **Custom Dice Roller**! This is a dynamic, web-based two-player dice game built to practice responsive UI design and vanilla JavaScript DOM manipulation. 

### ✨ What Makes It Fun?
* **Personalized Greeting:** The game starts by greeting you personally! It uses a browser prompt to ask for your name, dynamically updating the scoreboard while keeping "Player 2" as your static rival. 
* **Casino Vibes:** Features a smooth, green-felt casino table background layout using HTML tables and custom CSS.
* **Sleek UI Effects:** Includes responsive, smooth hover animations on the "Roll Dice" button that shifts colors and shadows for an arcade-like feel.

### 🧠 What I Learned (The Technical Stuff)
Building this project was a fantastic way to master core front-end concepts:
* **DOM Manipulation:** Learning how to target HTML elements using `document.getElementById()` and dynamically updating their visual state using `.textContent`.
* **Dynamic Attributes:** Using `.setAttribute("src", ...)` paired with JavaScript **template literals** (backticks) to instantly swap out images based on user actions.
* **The Math Behind Randomness:** Figuring out how to combine `Math.random()` and `Math.floor()` to shift, scale, and round decimals into a perfect 1 to 6 random integer generator.
* **Input Validation & Fallbacks:** Implementing safe logic to handle scenarios where a user cancels the prompt or types nothing, ensuring the app defaults gracefully back to `"Player 1"` without breaking.

---

### 🚀 How to Play
1. Load up the page and type your custom username into the prompt.
2. Click the **Roll Dice** button.
3. Watch the dice randomly roll and see the header instantly declare the winner or a draw!