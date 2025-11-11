<div align="center">

# 🎯 Tic Tac Toe Game

### *A Modern Take on a Classic Game*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A sleek, interactive Tic Tac Toe game with dark/light mode toggle and smooth animations**

[Play Now](#-getting-started) • [Features](#-features) • [How to Play](#-how-to-play)

---

</div>

## ✨ Features

<table>
<tr>
<td width="50%">

🎮 **Two Player Mode**  
Play against a friend locally

🌓 **Dark/Light Mode**  
Toggle between themes for comfortable gameplay

🏆 **Win Detection**  
Automatically detects winning combinations

</td>
<td width="50%">

🤝 **Draw Detection**  
Recognizes when the game ends in a draw

🔄 **Restart Functionality**  
Easy game reset with the restart button

🎨 **Responsive Design**  
Clean UI with smooth transitions

</td>
</tr>
</table>

---

## 🎯 How to Play

```
Step 1  →  Open index.html in your browser
Step 2  →  Player 1 (O) clicks any empty box - Your turn!
Step 3  →  Player 2 (X) clicks any empty box - Your turn!
Step 4  →  Players alternate turns
Step 5  →  Get 3 in a row to WIN! 🎉
Step 6  →  All boxes filled? It's a DRAW 🤝
Step 7  →  Click RESTART to play again! 🔄
```

> 💡 **Pro Tip**: Try the dark mode for a cooler gaming experience!

---

## 🕹️ Game Controls

| Control | Action |
|---------|--------|
| 🖱️ **Click on boxes** | Make your move |
| 🌓 **DARK/LIGHT MODE** | Toggle theme (top-right) |
| 🔄 **RESTART** | Reset the game board |

---

## 📁 Project Structure

```
📦 TIC TAC TOE
 ┣ 📜 index.html      # Main HTML structure
 ┣ 📜 script.js       # Game logic and functionality
 ┣ 📜 style.css       # Styling and visual design
 ┗ 📜 README.md       # Project documentation
```

---

## 🎲 Game Rules

<div align="center">

### The Classic 3×3 Grid Battle

</div>

| Element | Description |
|---------|-------------|
| 🟢 **Player 1** | Plays as **O** (Green) |
| 🔴 **Player 2** | Plays as **X** (Red) |
| 🎯 **Objective** | Align 3 marks in a row |
| ↔️ **Horizontal** | Win by completing any row |
| ↕️ **Vertical** | Win by completing any column |
| ↗️ **Diagonal** | Win by completing either diagonal |
| 🤝 **Draw** | All 9 squares filled, no winner |

---

## 🌈 Themes

<table>
<tr>
<td width="50%">

### ☀️ Light Mode (Default)
- 🌊 Light cyan background
- ⬜ White boxes with subtle shadows
- 🎨 Colorful header
- ✨ Clean and bright interface

</td>
<td width="50%">

### 🌙 Dark Mode
- ⬛ Black background
- 💚 Dark boxes with green glow effect
- 🖤 Sleek dark theme throughout
- 👁️ Easy on the eyes

</td>
</tr>
</table>

---

## 🚀 Getting Started

```bash
# Step 1: Clone or download this repository
git clone https://github.com/Jaydeep-popat/TIC-TAC-TOE.git

# Step 2: Navigate to the project folder
cd TIC-TAC-TOE

# Step 3: Open index.html in your browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

**Or simply:**  
📂 Download → 📄 Open `index.html` → 🎮 Start Playing!

> No installation, no dependencies, just pure fun! 🎉

---

## 💻 Technologies Used

<div align="center">

| Technology | Purpose |
|:----------:|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Structure and layout |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Styling, animations, and responsive design |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Game logic and interactivity |

</div>

---

## 🎓 Key Features Implementation

<details>
<summary><b>🎯 Win Detection Algorithm</b></summary>

<br>

The game intelligently checks for **7 possible winning patterns**:
- ➡️ 3 horizontal rows
- ⬇️ 3 vertical columns  
- ↘️ 2 diagonal lines

```javascript
// Smart pattern matching for instant win detection
const patterns = [
  [3, 4, 5], [6, 7, 8],  // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
  [0, 4, 8], [2, 4, 6]  // Diagonals
];
```

</details>

<details>
<summary><b>🌓 Theme Toggle System</b></summary>

<br>

Dynamic theme switching with **smooth transitions** using JavaScript DOM manipulation
- Instant color scheme changes
- 1-second smooth transitions
- Persistent state management
- Toggle between light and dark themes

</details>

<details>
<summary><b>🎮 Game State Management</b></summary>

<br>

Robust state tracking system:
- ✅ Tracks current player turn
- ✅ Counts moves to detect draw conditions
- ✅ Disables boxes after selection (no cheating!)
- ✅ Manages winner state and game conclusion

</details>

---

## 🌐 Browser Compatibility

<div align="center">

![Chrome](https://img.shields.io/badge/Chrome-✓-brightgreen?style=for-the-badge&logo=googlechrome&logoColor=white&color=4285F4)
![Firefox](https://img.shields.io/badge/Firefox-✓-brightgreen?style=for-the-badge&logo=firefoxbrowser&logoColor=white&color=FF7139)
![Safari](https://img.shields.io/badge/Safari-✓-brightgreen?style=for-the-badge&logo=safari&logoColor=white&color=000000)
![Edge](https://img.shields.io/badge/Edge-✓-brightgreen?style=for-the-badge&logo=microsoftedge&logoColor=white&color=0078D7)
![Opera](https://img.shields.io/badge/Opera-✓-brightgreen?style=for-the-badge&logo=opera&logoColor=white&color=FF1B2D)

**Works flawlessly on all modern browsers!**

</div>

---

## 📱 Responsive Design

<div align="center">

💻 **Desktop** • 📱 **Tablet** • 📞 **Mobile**

The game adapts seamlessly to different screen sizes using **viewport-based units (vh/vw)**  
for a consistent experience across all devices!

</div>

---

## 🎉 Future Enhancements

<table>
<tr>
<td width="50%">

### 🔮 Planned Features
- 🤖 Single player mode with AI opponent
- 📊 Score tracking across multiple games
- ✨ Animations for winning combinations
- 🔊 Sound effects and background music

</td>
<td width="50%">

### 💡 Ideas for V2.0
- 📱 Mobile touch optimization
- 🌍 Online multiplayer mode
- 🏆 Leaderboard system
- 🎨 Custom themes and skins

</td>
</tr>
</table>

---

## 👤 Author

<div align="center">

### **Jaydeep Popat**

[![GitHub](https://img.shields.io/badge/GitHub-Jaydeep--popat-181717?style=for-the-badge&logo=github)](https://github.com/Jaydeep-popat)

*Built with 💚 and JavaScript*

</div>

---

## 📄 License

<div align="center">

📝 This project is **open source** and available for personal and educational use.

Feel free to fork, modify, and enhance! 🚀

</div>

---

<div align="center">

### 🎮 **Ready to Play?** 🎮

**Clone the repo and start gaming now!**

⭐ *Don't forget to star this repo if you enjoyed the game!* ⭐

---

**Enjoy playing Tic Tac Toe!** ✨�✨

</div>
