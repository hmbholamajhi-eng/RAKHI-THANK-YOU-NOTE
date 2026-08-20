(() => {
  'use strict';
  const CONFIG = window.RAKHI_CONFIG = {
    receiverName: 'MERI BEHEN', senderName: 'HM BHOLA', initialQuestion: 'Will you accept your gift? \u{1F381}', songPath: 'assets/music/tu-bhai-hai-apna.mp3',
    letter: `Rakhi pe gift dene ke liye thank you! \u2764\uFE0F\n\nOye bhai/sis, gift se zyada special hai tera pyaar, effort aur woh sibling wali lifetime bak-bak.\n\nLekin pehle ek chhota sa sawaal hai... \u{1F440}`,
    noMessages: ['Areee... gift bhi nahi loge? \u{1F602}', 'Itna attitude? Gift lene ke liye bhi permission chahiye kya? \u{1F602}']
  };
  const state = { noClickCount: 0, letterOpened: false, finaleStarted: false };
  const $ = id => document.getElementById(id);
  document.querySelectorAll('[data-receiver]').forEach(el => { el.textContent = CONFIG.receiverName; });
  document.querySelectorAll('[data-sender]').forEach(el => { el.textContent = CONFIG.senderName; });
  window.RakhiApp = { CONFIG, state, $ };
  window.addEventListener('DOMContentLoaded', () => {
    window.Effects?.init();
    window.Letter?.init({ state, config: CONFIG, elements: { trigger: $('giftTrigger'), opening: $('opening'), letter: $('letterScreen'), copy: $('letterCopy'), questionArea: $('questionArea'), question: $('questionText') } });
    window.Celebration?.init({ state, config: CONFIG, elements: { yes: $('yesButton'), no: $('noButton'), actions: $('firstActions'), question: $('questionText'), reaction: $('reaction'), finale: $('finale'), song: $('song'), notice: $('songNotice'), music: $('musicButton'), mute: $('muteButton') } });
  });
})();
