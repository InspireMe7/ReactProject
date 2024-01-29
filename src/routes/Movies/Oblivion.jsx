import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function Oblivion() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Oblivion</h1>
          <p>Handlung. Im Jahr 2077 ist die Erde nach einem Krieg mit Außerirdischen, den sogenannten Plünderern, welche die Erde 60 Jahre zuvor attackiert hatten, unbewohnbar und entvölkert. Während des Krieges zerstörten die Außerirdischen den Mond, was eine Reihe von Naturkatastrophen wie Erdbeben und Tsunamis verursachte.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/tjgNgJsT92k?si=GipHKWlyvR4i_bcp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageOblivion"></div>

      </div>
    </section>
  )
}

export default Oblivion