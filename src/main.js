import App from "./components/App.js";
import data from "./data/lol/lol.js";

console.log("hola");
document.getElementById("app").appendChild(App());

const render = (champions) => {
  let html = "";
  champions.forEach(function (champion) {
    html += `
      <div class="card">
        <div class="image--circular">
          <img src="${champion.splash}">
        </div>
        <h5>${champion.name}</h5>
      </div>
    `;
  });

  //cardsContainer.innerHTML = html;
};

//render(champions);
