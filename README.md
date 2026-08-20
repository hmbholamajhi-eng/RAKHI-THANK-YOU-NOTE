# 🎁 Rakhi Thank-You ❤️

> ### *A little website. A little mischief. A lot of sibling love.* 😎

A playful and interactive **Rakhi Thank-You experience** created to turn a simple "thank you" into a memorable digital surprise.

Instead of sending a normal message, this project turns the thank-you into a mini interactive journey—with a gift, playful questions, sibling jokes, music, fireworks, and a final celebration. 🎆

---

## ✨ The Experience

```text
🎁 Open the Gift
       ↓
💌 Read the Message
       ↓
😂 Try Saying NO
       ↓
😏 Question Changes
       ↓
🎁 Accept / Not Today
       ↓
🎵 Music Starts
       ↓
🎆 Fireworks
       ↓
❤️ Thank You, Bhai!
```

---

## 🧡 Features

| Feature                    | Description                                      |
| -------------------------- | ------------------------------------------------ |
| 🎁 Interactive Gift        | Animated gift-opening experience                 |
| 💌 Digital Letter          | Personalized Rakhi thank-you message             |
| ⌨️ Typewriter Effect       | Messages appear with a smooth typing animation   |
| 😂 Playful NO Flow         | Different reactions to every NO                  |
| 😏 Question Switch         | After 3 NOs, the experience changes              |
| 🎁 Gift Acceptance         | YES / NOT TODAY interaction                      |
| 🎵 Music                   | Plays the selected Rakhi song during celebration |
| 🎆 Fireworks               | Canvas-powered celebration animation             |
| 🎉 Confetti                | Festive celebration effects                      |
| 🧑‍🤝‍🧑 Sibling Animation | Cute animated sibling illustration               |
| 📱 Responsive              | Works across mobile, tablet and desktop          |
| ♿ Reduced Motion           | Respects `prefers-reduced-motion`                |
| 🌐 GitHub Pages            | Fully static and deployment-ready                |

---

## 🎮 Interactive Flow

### 01 — The Surprise

The experience starts with:

> **"Oyeee... tere liye kuch hai 👀"**

Tap the gift and let the surprise begin.

### 02 — The Question

The letter asks:

> **"Will you accept your gift? 🎁😂"**

Two choices appear:

**YES 😎**
**NO 🙈**

### 03 — The NO Challenge 😂

The first three NO clicks trigger different sibling-style reactions.

After the third NO, the original question disappears and a new one appears:

> **"Accha... gift accept nahi karoge? 😏"**

Now the choices become:

**YES 🎁**
**NOT TODAY 😂**

### 04 — The Celebration 🎆

Once the gift is accepted:

* 🎵 Music starts
* 🎆 Fireworks launch
* 🎉 Confetti appears
* ✨ Festive particles animate
* 🧑‍🤝‍🧑 Sibling illustration appears
* ❤️ Final thank-you message is revealed

---

## 🛠️ Built With

```text
HTML5
CSS3
JavaScript
SVG
Canvas API
GitHub Pages
```

No backend.
No database.
No framework.

Just a lightweight static website.

---

## 📂 Project Structure

```text
rakhi-thank-you/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── letter.js
│   ├── celebration.js
│   ├── fireworks.js
│   └── effects.js
│
└── assets/
    ├── music/
    │   └── tu-bhai-hai-apna.mp3
    │
    ├── images/
    │   └── sibling.svg
    │
    └── icons/
```

---

## 🎨 Personalization

Want to make it truly yours?

Open:

```text
js/app.js
```

Find:

```javascript
const RAKHI_CONFIG = {
    receiverName: "NAME",
    senderName: "YOUR NAME",
    initialQuestion: "Will you accept your gift? 🎁",
    songPath: "assets/music/tu-bhai-hai-apna.mp3"
};
```

Change:

* 👤 Sibling's name
* 🙋 Your name
* ❓ Question
* 🎵 Song
* 💬 Messages

The colors can be customized from the CSS variables at the top of:

```text
css/style.css
```

---

## 🎵 Add Your Song

Place your legally usable MP3 here:

```text
assets/music/tu-bhai-hai-apna.mp3
```

The website only starts the music after the user interacts with the page.

If the MP3 is missing, the celebration still works—the website simply displays a small music notice instead of breaking.

---

## 💻 Run Locally

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/rakhi-thank-you.git
```

Enter the project:

```bash
cd rakhi-thank-you
```

Start a local server:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

A local server is recommended because browsers handle local audio differently when opening `index.html` directly.

---

## 🚀 Deploy With GitHub Pages

### 1. Push the project

```bash
git add .
git commit -m "Create Rakhi thank-you experience"
git push origin main
```

### 2. Enable GitHub Pages

Go to:

```text
Repository
→ Settings
→ Pages
```

Select:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

Click **Save**.

Your website will be available at:

```text
https://YOUR-USERNAME.github.io/rakhi-thank-you/
```

---

## 📱 Compatibility

Designed for:

```text
✓ Mobile
✓ Tablet
✓ Laptop
✓ Desktop
```

Tested design targets:

```text
320px
375px
390px
414px
768px
1024px
1440px+
```

The layout is designed to avoid horizontal scrolling and keep the interactive elements touch-friendly.

---

## ⚡ Performance

The project is intentionally lightweight.

### Performance principles

* Vanilla JavaScript
* CSS-based animations
* SVG graphics
* Canvas fireworks
* Controlled particle counts
* `requestAnimationFrame`
* No unnecessary frameworks
* No backend
* No database

The goal is simple:

> **More emotion. Less loading time.** ⚡

---

## ❤️ Why I Made This

Sometimes saying **"thank you"** with a normal text feels too ordinary.

So I built a tiny interactive experience instead.

A few clicks.

A little teasing.

Some fireworks.

And one simple message:

> ### **"Tu bhai hai apna. ❤️"**

---

## 🧪 Testing Checklist

* [ ] Gift animation works
* [ ] Letter opens correctly
* [ ] Typewriter animation works
* [ ] NO #1 reaction appears
* [ ] NO #2 reaction appears
* [ ] NO #3 changes the question
* [ ] YES launches celebration
* [ ] NOT TODAY shows the alternate message
* [ ] Okay launches celebration
* [ ] Fireworks work
* [ ] Confetti works
* [ ] Sibling illustration loads
* [ ] Music works when MP3 exists
* [ ] Missing MP3 doesn't break the site
* [ ] Mobile layout works
* [ ] Keyboard navigation works
* [ ] Reduced-motion mode works
* [ ] GitHub Pages deployment works

---

## 🌐 Live Demo

### 👉 [Open the Rakhi Experience](https://YOUR-USERNAME.github.io/rakhi-thank-you/)

Replace the URL above with your actual GitHub Pages URL after deployment.

---

## 👨‍💻 Author

**HM**

Built with:

```text
☕ Code
🎨 Creativity
😂 Sibling Energy
❤️ A Lot of Rakhi Love
```

---

### ⭐ If you like the idea

Give the repository a ⭐

And maybe...

**send the website to your sibling instead of just saying "Happy Rakhi." 😎🎁**

---

<p align="center">

### 🎁 Happy Raksha Bandhan ❤️

**Made with code. Delivered with love.**

</p>
