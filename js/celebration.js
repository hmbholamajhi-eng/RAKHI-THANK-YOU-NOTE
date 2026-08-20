(() => {
  'use strict';

  function init({ state, config, elements }) {

    const start = () => {
      window.Celebration.start(elements);
    };

    // -----------------------------
    // NO BUTTON
    // -----------------------------
    elements.no.addEventListener('click', () => {
      state.noClickCount += 1;

      if (state.noClickCount <= 2) {
        elements.reaction.textContent =
          config.noMessages[state.noClickCount - 1];

        if (elements.reaction.animate) {
          elements.reaction.animate(
            [
              {
                opacity: 0,
                transform: 'translateY(8px)'
              },
              {
                opacity: 1,
                transform: 'none'
              }
            ],
            {
              duration: 450,
              easing: 'ease-out'
            }
          );
        }

        return;
      }

      // Third NO
      elements.question.textContent =
        'Accha... gift accept nahi karoge? 😏';

      elements.actions.replaceChildren();

      const yes = document.createElement('button');
      yes.className = 'btn btn-primary';
      yes.type = 'button';
      yes.textContent = 'YES 🎁';

      const later = document.createElement('button');
      later.className = 'btn btn-secondary';
      later.type = 'button';
      later.textContent = 'NOT TODAY 😂';

      elements.actions.append(yes, later);

      yes.addEventListener('click', start);

      later.addEventListener('click', () => {

        elements.reaction.textContent =
          'Theek hai bhai 😂\n' +
          'Gift tumhara hi rahega...\n' +
          'Lekin thank you toh bolunga hi ❤️';

        elements.actions.replaceChildren();

        const okay = document.createElement('button');
        okay.className = 'btn btn-primary';
        okay.type = 'button';
        okay.textContent = 'Okay 😎';

        elements.actions.append(okay);

        okay.addEventListener('click', start);
      });
    });

    // -----------------------------
    // ORIGINAL YES BUTTON
    // -----------------------------
    elements.yes.addEventListener('click', start);

    // -----------------------------
    // MUSIC BUTTON
    // -----------------------------
    elements.music.addEventListener('click', async () => {

      try {

        if (elements.song.paused) {

          await elements.song.play();

          elements.music.textContent = 'Ⅱ';

          if (elements.notice) {
            elements.notice.textContent = '';
          }

        } else {

          elements.song.pause();
          elements.music.textContent = '▶';

        }

      } catch (error) {

        console.error('Music playback error:', error);

        if (elements.notice) {
          elements.notice.textContent =
            'Music could not be played. Check the MP3 file and path.';
        }

      }
    });

    // -----------------------------
    // MUTE BUTTON
    // -----------------------------
    elements.mute.addEventListener('click', () => {

      elements.song.muted = !elements.song.muted;

      elements.mute.textContent =
        elements.song.muted ? '×' : '♪';

    });
  }


  window.Celebration = {

    init,

    // -----------------------------
    // START CELEBRATION
    // -----------------------------
    async start(elements) {

      if (window.RakhiApp.state.finaleStarted) {
        return;
      }

      window.RakhiApp.state.finaleStarted = true;

      // Hide letter
      document
        .getElementById('letterScreen')
        .classList.add('hidden');

      // Show finale
      elements.finale.classList.remove('hidden');

      // Start visual effects
      window.Fireworks?.start(
        document.getElementById('fireworks')
      );

      window.Effects?.celebrate();

      // -----------------------------
      // SET AUDIO SOURCE
      // -----------------------------
      const songPath =
        window.RakhiApp.CONFIG.songPath;

      console.log('Loading song:', songPath);

      elements.song.src = songPath;

      // Force browser to reload the source
      elements.song.load();

      // -----------------------------
      // CHECK AUDIO LOAD
      // -----------------------------
      elements.song.addEventListener(
        'error',
        () => {

          console.error(
            'Audio file could not be loaded:',
            songPath,
            elements.song.error
          );

          if (elements.notice) {
            elements.notice.textContent =
              'Song file could not be loaded. Check: ' +
              songPath;
          }

        },
        { once: true }
      );

      // -----------------------------
      // PLAY SONG
      // -----------------------------
      try {

        await elements.song.play();

        elements.music.textContent = 'Ⅱ';

        if (elements.notice) {
          elements.notice.textContent = '';
        }

        console.log('Song playing successfully.');

      } catch (error) {

        console.error(
          'Audio playback failed:',
          error
        );

        elements.music.textContent = '▶';

        if (elements.notice) {
          elements.notice.textContent =
            'Tap ▶ to play the music.';
        }
      }
    }
  };

})();