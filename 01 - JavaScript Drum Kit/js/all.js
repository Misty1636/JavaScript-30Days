(function Playkey() {
  function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!sound) return;

    sound.currentTime = 0;
    sound.play();

    key.classList.add('active');
  }

  function finishTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.currentTarget.classList.remove('active');
  }

  document.querySelectorAll('.key').forEach((key) => {
    key.addEventListener('transitionend', finishTransition);
  });
  window.addEventListener('keydown', playSound);
}());
