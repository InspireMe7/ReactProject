import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function MatrixRevolutions() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Matrix Revolutions</h1>
          <p>Matrix Revolutions ist ein Endzeitfilm aus dem Jahr 2003 von Lilly Wachowski und Lana Wachowski mit Keanu Reeves und Carrie-Anne Moss. Matrix Revolutions ist der dritte und letzte Teil der Sciene-Fiction-Trilogie um Neo Keanu Reeves und seine verbündeten Freiheitskämpfer.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/DWFzYQEnl9s?si=WxEUSDuaSkgpAeOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageMatrixRevolutions"></div>

      </div>
    </section>
  )
}

export default MatrixRevolutions