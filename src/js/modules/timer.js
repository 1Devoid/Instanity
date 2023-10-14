function timer() {
  const balanceCounter = document.querySelector('.balance__presale-counter');

  if (balanceCounter) {
    let timer;
    let compareDate = new Date();
    compareDate.setDate(compareDate.getDate() + 7); //just for this demo today + 7 days

    timer = setInterval(function () {
      timeBetweenDates(compareDate);
    }, 1000);

    function timeBetweenDates(toDate) {
      let dateEntered = toDate;
      let now = new Date();
      let difference = dateEntered.getTime() - now.getTime();

      if (difference <= 0) {
        // Timer done
        clearInterval(timer);
      } else {
        let seconds = Math.floor(difference / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        document.querySelector('#hours').textContent = hours;
        document.querySelector('#minutes').textContent = minutes;
        document.querySelector('#seconds').textContent = seconds;
      }
    }
  }
}

export default timer;
