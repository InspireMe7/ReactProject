import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function MatrixReloaded() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Matrix Reloaded</h1>
          <p>Matrix Reloaded ist ein Endzeitfilm aus dem Jahr 2003 von Lilly Wachowski und Lana Wachowski mit Keanu Reeves und Carrie-Anne Moss. Mit Matrix Reloaded kam 2003 die fällige Fortsetzung von Keanu Reeves' Freiheitskampf der Menschen gegen die Maschinen und die Befreiung aus der künstlichen Computerwelt.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/dGHqXNn8FlM?si=MqXZ810gHJDQ3yQa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageMatrixReloaded"></div>

      </div>
    </section>
  )
}

export default MatrixReloaded