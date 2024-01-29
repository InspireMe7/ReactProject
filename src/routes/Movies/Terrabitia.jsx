import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function Terrabitia() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Brücke nach Terrabitia </h1>
          <p>Ein tragischer Unfall. Mit Hilfe ihrer Fantasie wird Terabithia zu einem täglichen Abenteuer und die beiden Außenseiter schöpfen aus ihren Erfolgserlebnissen im Kampf gegen das Böse die Kraft, ihre Probleme mit Mitschülern, Lehrern und Eltern anzugehen.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/t74Rqd8Up9c?si=RfGRA3PFtwJwdkZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageTerrabitia"></div>

      </div>
    </section>
  )
}

export default Terrabitia