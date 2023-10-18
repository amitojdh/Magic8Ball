// Magic 8 Ball

//HTML Variables
let output = document.getElementById("output");

// Button Event Listener
document.getElementById("img").addEventListener("click", btnClicked);

function btnClicked() {
  let input = document.getElementById("input").value.toLowerCase();
  let randNum = Math.random();
  console.log(randNum);

  if (input === "") {
    output.innerHTML = `<p>"Please ask a question..."</p>`;
  } else if (input === "does a magic 8 ball actually work?") {
    output.innerHTML = `<p>"How dare you doubt me!"</p>`;
  } else if (input === "is javascript awesome?") {
    output.innerHTML = `<p>"Of Course!"</p>`;
  } else if (input === "does a magic 8 ball actually work?") {
    output.innerHTML = `<p>"How dare you doubt me!"</p>`;
  } else if (randNum < 0.2) {
    output.innerHTML = `<p>"Without a Doubt."</p>`;
  } else if (randNum < 0.4) {
    output.innerHTML = `<p>"As I see it, yes."</p>`;
  } else if (randNum < 0.6) {
    output.innerHTML = `<p>"Concentrate and ask again."</p>`;
  } else if (randNum < 0.8) {
    output.innerHTML = `<p>"Don't count on it."</p>`;
  } else if (randNum < 1) {
    output.innerHTML = `<p>"Outlook not so good."</p>`;
  }
}
