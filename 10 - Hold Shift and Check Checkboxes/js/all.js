(function shiftCheckbox() {
  const checkboxs = document.querySelectorAll('.content input[type="checkbox"]');
  let lastCheck;

  function clickHandle(e) {
    let inbetween = false;
    if (e.shiftKey && this.checked && lastCheck !== undefined) {
      checkboxs.forEach((checkbox) => {
        console.log(this);
        if (checkbox === this || checkbox === lastCheck) {
          inbetween = !inbetween;
        }
        if (inbetween) {
          checkbox.checked = true;
        }
      });
    }
    lastCheck = this;
  }

  checkboxs.forEach(item => item.addEventListener('click', clickHandle));
}());
