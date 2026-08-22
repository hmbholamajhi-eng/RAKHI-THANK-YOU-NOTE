# Rakhi Thank-You

A completely static, GitHub Pages-ready Rakhi thank-you experience built with HTML5, CSS3, SVG, Canvas, and vanilla JavaScript.

## Structure

```text
rakhi-thank-you/
├── index.html
├── css/style.css
├── js/app.js
├── js/letter.js
├── js/celebration.js
├── js/fireworks.js
├── js/effects.js
├── assets/music/tu-bhai-hai-apna.mp3
├── assets/images/sibling.svg
├── assets/icons/
└── README.md
```

## Customize everything from one place

Open `js/app.js` and edit `RAKHI_CONFIG`:

- `receiverName`: sibling's name
- `senderName`: your name
- `initialQuestion`: first question
- `songPath`: relative MP3 path
- `letter`: opening message
- `noMessages`: first two NO responses

The third NO question and the final celebration copy are in the small interaction modules so the exact requested behavior remains easy to find. Colors are CSS variables at the top of `css/style.css`.

## Add the MP3

Place a legally usable audio file at:

```text
assets/music/tu-bhai-hai-apna.mp3
```

The site starts music only after YES or Okay is clicked. If the file is missing or playback is blocked, it displays a non-blocking message and continues with fireworks, confetti, flowers, and the sibling illustration.

## Test locally

From the project directory:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/`. A static server is recommended for audio behavior.

## GitHub Pages

1. Create a GitHub repository named `rakhi-thank-you`.
2. Upload the complete project.
3. Go to **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Select branch **main**.
6. Select **/root**.
7. Click **Save**.
8. Wait for deployment.

The URL will look like:
(https://hmbholamajhi-eng.github.io/RAKHI-THANK-YOU-NOTE/)

All asset paths are relative, so repository subpaths are supported.

## Testing checklist

- [ ] Gift bounces and opens.
- [ ] Typewriter message appears.
- [ ] NO #1 shows the first message.
- [ ] NO #2 shows the second message.
- [ ] NO #3 replaces the original question and buttons.
- [ ] YES 🎁 launches the celebration.
- [ ] NOT TODAY 😂 shows the funny message and Okay button.
- [ ] Okay launches the celebration.
- [ ] Fireworks stop after about 8 seconds.
- [ ] Missing MP3 does not break the celebration.
- [ ] Music controls work when an MP3 exists.
- [ ] Mobile widths from 320px upward have no horizontal scrolling.
- [ ] Keyboard focus is visible.
- [ ] Reduced-motion mode remains functional.
