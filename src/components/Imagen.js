import React from "react";

const Imagen = (props) => {
  const { largeImageURL, imageWidth, previewURL, tags, imageHeight } = props.imagen;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card" >
        <img src={previewURL} alt={tags} className="card-img-top"/>
        <div className="card-body">
          <p className="card-text">
            {imageWidth}
            <span className="font-weight-400"> px Ancho</span>
          </p>
          <p className="card-text">
            {imageHeight}
            <span className="font-weight-400"> px Alto</span>
          </p>
          <a
            href={largeImageURL}
            target="_blank"
            className="btn btn-info btn-block"
          >
            Ver Imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;