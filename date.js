const end = new Date("06/02/2023 10:1 AM");

const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;
let timer;

function showRemaining() {
  const now = new Date();
  const distance = end - now;
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "EXPIRED!";

    return;
  }
  const days = Math.floor(distance / _day);
  const hours = Math.floor((distance % _day) / _hour);

  document.getElementById("countdown").innerHTML = `
<div>
    <span>${days}</span>
    <span>DAYS</span>
</div>
<div>
    <span>${hours}</span>
    <span>HOURS</span>
</div>
`;
}

timer = setInterval(showRemaining, 1000);
