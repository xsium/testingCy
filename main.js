import { setupCounter } from "./counter.js";
import javascriptLogo from "./javascript.svg";
import "./style.css";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

function addition(num1, num2) {
  return num1 + num2;
}

function calculate() {
  let firstNumber = parseFloat(document.getElementById("firstNumber").value);
  let secondNumber = parseFloat(document.getElementById("secondNumber").value);

  let result = addition(firstNumber, secondNumber);

  document.getElementById("result").innerText = result;
}
let btn = document.querySelector("#calculBtn");
btn.addEventListener("click", calculate);

const pokemonListe = document.getElementById("pokeListe");
console.log(pokemonListe);
const pokemonApiContact = async () => {
  const pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon");
  console.log("pokemonData", pokemonData);
  const pokemonDataTransformed = await pokemonData.json();
  console.log("pokemonDataTransformed", pokemonDataTransformed);
  console.log(pokemonDataTransformed.results[0].name);
  for (let i = 0; i < pokemonDataTransformed.results.length; i++) {
    let listElement = document.createElement("p");
    listElement.innerText = pokemonDataTransformed.results[i].name;
    pokemonListe.append(listElement);
  }
};
pokemonApiContact();
