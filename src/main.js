import App from "./components/App.js";
import data from "./data/lol/lol.js";

document.getElementById("app").appendChild(App({
  title: data.name,
  cards: data.items
}));

