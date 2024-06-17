// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    styles.contains("decrease") ? count-- : styles.contains("increase") ? count++ : count = 0
    value.style.color = (count > 0) ? "green" : (count < 0) ? "red" : "#222"
    value.textContent = count;
  });
});
function speak() {
  var text = document.getElementById("input").value;
  var speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}
