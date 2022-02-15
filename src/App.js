import React, { Component } from "react";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component {
  state = {
    termino: "",
    imagenes: [],
    pagina: "",
  };

  scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smooth", "end");
  };

  paginaAnterior = () => {
     let pagina = this.state.pagina;
    if (pagina === 1) return null;

    pagina--;

    this.setState(
      {
        pagina,
      },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );

  };
  paginaSiguiente = () => {

    let pagina = this.state.pagina;

    pagina++;

    this.setState(
      {
        pagina,
      },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );

  };

  consultarApi = () => {
    const termino = this.state.termino;
    const key = "25669659-829a159d1f42dcddb40bb6fa1";
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=12&page=${pagina}`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino: termino,
        pagina: 1,
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">
            App en react que consume la api de Pixabay. TonyReact
          </p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
