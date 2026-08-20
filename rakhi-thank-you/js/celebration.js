(() => {
  'use strict';
  function init({ state, config, elements }) {
    const start = () => window.Celebration.start(elements);
    elements.no.addEventListener('click', () => {
      state.noClickCount += 1;
      if (state.noClickCount <= 2) {
        elements.reaction.textContent = config.noMessages[state.noClickCount - 1];
        if (elements.reaction.animate) elements.reaction.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 450, easing: 'ease-out' });
        return;
      }
      elements.question.textContent = 'Accha... gift accept nahi karoge? \u{1F60F}';
      elements.actions.replaceChildren();
      const yes = document.createElement('button'); yes.className = 'btn btn-primary'; yes.type = 'button'; yes.textContent = 'YES \u{1F381}';
      const later = document.createElement('button'); later.className = 'btn btn-secondary'; later.type = 'button'; later.textContent = 'NOT TODAY \u{1F602}';
      elements.actions.append(yes, later); yes.addEventListener('click', start);
      later.addEventListener('click', () => {
        elements.reaction.textContent = 'Theek hai bhai \u{1F602}\nGift tumhara hi rahega...\nLekin thank you toh bolunga hi \u2764\uFE0F';
        elements.actions.replaceChildren();
        const okay = document.createElement('button'); okay.className = 'btn btn-primary'; okay.type = 'button'; okay.textContent = 'Okay \u{1F60E}';
        elements.actions.append(okay); okay.addEventListener('click', start);
      });
    });
    elements.yes.addEventListener('click', start);
    elements.music.addEventListener('click', () => {
      if (elements.song.paused) elements.song.play().then(() => { elements.music.textContent = '\u2161'; }).catch(() => { elements.notice.textContent = `Add your song to ${config.songPath}`; });
      else { elements.song.pause(); elements.music.textContent = '\u25B6'; }
    });
    elements.mute.addEventListener('click', () => { elements.song.muted = !elements.song.muted; elements.mute.textContent = elements.song.muted ? '\u00D7' : '\u266A'; });
  }
  window.Celebration = {
    init,
    start(elements) {
      if (window.RakhiApp.state.finaleStarted) return;
      window.RakhiApp.state.finaleStarted = true;
      document.getElementById('letterScreen').classList.add('hidden'); elements.finale.classList.remove('hidden');
      window.Fireworks?.start(document.getElementById('fireworks')); window.Effects?.celebrate();
      elements.song.src = window.RakhiApp.CONFIG.songPath;
      elements.song.play().then(() => { elements.music.textContent = '\u2161'; }).catch(() => { elements.notice.textContent = `Add your song to ${window.RakhiApp.CONFIG.songPath}`; elements.music.textContent = '\u25B6'; });
    }
  };
})();
