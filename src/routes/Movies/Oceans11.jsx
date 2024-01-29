import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function Oceans11() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1> Oceans 11</h1>
          <p>Danny Ocean (George Clooney) ist gerade aus dem Knast raus, hat jedoch überhaupt nicht vor, sich im bürgerlichen Leben einzurichten. Lieber setzt er alles daran, einen Supercoup zu landen. Ziel: Drei Casinos im Spielerparadies Las Vegas. Geschätzter Wert der Beute: 160 Millionen Dollar.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/tcOYh_lNsaw?si=kTJCkCd2uD5dx9xf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageOceans11"></div>

      </div>
    </section>
  )
}

export default Oceans11