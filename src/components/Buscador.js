import React, { Component } from "react";

class Buscador extends Component {
  buscadorRef = React.createRef();

  obtenerDatos = (e) => {
    e.preventDefault();
    
    const termino = this.buscadorRef.current.value;
    this.props.datosBusqueda(termino);
  };

  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.buscadorRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Buscador de imagenes por nombre"
            />
          </div>
          <div className="from-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-block btn-info"
              value="Buscar..."
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;