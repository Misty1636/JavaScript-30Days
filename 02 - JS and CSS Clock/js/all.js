(function clock() {
  const hourHand = document.querySelector('.clock__hour');
  const minHand = document.querySelector('.clock__min');
  const secHand = document.querySelector('.clock__sec');

  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  const s = sec * 360 / 60;
  const m = min * 360 / 60 + sec / 60 * 6;
  const h = hour * 360 / 12 + min / 60 * 30;

  hourHand.style.transform = `rotate(${h}deg)`;
  minHand.style.transform = `rotate(${m}deg)`;
  secHand.style.transform = `rotate(${s}deg)`;

  setTimeout(clock, 1000);
}());
