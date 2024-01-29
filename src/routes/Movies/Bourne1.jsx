import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function Bourne1() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Die Bourne Identität</h1>
          <p>Im Mittelmeer wird ein Mann mit Schusswunden, aber ohne Gedächtnis von Fischern gerettet. Auf der Suche nach seiner verlorenen Identität entdeckt der Held durch ein Schließfach in einer Züricher Bank, dass er CIA-Geheimagent mit dem Decknamen Bourne und mit Wohnsitz in Paris war.</p>
          <div />

          <div>
          <iframe  className="Trailer" src="https://www.youtube.com/embed/E07oHfKrfpE?si=ty7jieV7BumDVM-a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageBourne"></div>

      </div>
    </section>
  )
}

export default Bourne1