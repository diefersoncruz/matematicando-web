import { database } from "./connectionBD.js";
import {
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

class Jogadores {
  carregaDadosJogadores() {
    const dadosJogadores = ref(database, "jogadores");
    onValue(dadosJogadores, (snapshot) => {
      const data = snapshot.val();
    });
  }
}

export default new Jogadores();
