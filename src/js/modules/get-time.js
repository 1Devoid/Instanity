function getTime() {
  const clock = document.querySelector('#clock');

  if (clock) {
    function updateTime() {
      const cd = new Date();
      const clockValue =
        zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2);
      clock.textContent = clockValue;
    }

    function zeroPadding(num, digit) {
      let zero = '';
      for (let i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    }

    updateTime();
  }
}

export default getTime;
