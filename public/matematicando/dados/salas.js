const url = `https://matematicando-ce9cb-default-rtdb.firebaseio.com/matematicando/`;

class Salas {
  async getSalas() {
    try {
      const response = await fetch(url + "salas.json");
      if (!response.ok) {
        throw new Error("Erro na requisição: " + response.statusText);
      }
      const data = await response.json();
      console.log("data", data);
      return data;
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  async addSala(sala) {
    try {
      const response = await fetch(url + "salas.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sala),
      });
      if (!response.ok) {
        throw new Error("Erro na requisição: " + response.statusText);
      }
      const data = await response.json();
      console.log("Sala adicionada:", data);
      return data;
    } catch (error) {
      console.error("Erro:", error);
    }
  }
}

export default new Salas();
