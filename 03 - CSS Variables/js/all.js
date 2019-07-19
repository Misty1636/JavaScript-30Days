(function changeCss() {
  const inputs = document.querySelectorAll('.option input');
  function updateCSS() {
    const unit = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${unit}`);
  }


  inputs.forEach((item) => {
    item.addEventListener('change', updateCSS);
    item.addEventListener('mousemove', updateCSS);
  });
}());
