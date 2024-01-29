import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function Jumanji() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Jumanji</h1>
          <p>Jumanji ist das geheimnisvolle, uralte Spiel, aus dem der unberechenbare Geist des Dschungels ausbricht, um die Welt zu beherrschen. Alle, die dieses Spiel je gespielt haben, kennen nur zu gut seine Gefahren. So auch Alan Parrish, der bereits als kleiner Junge in die gefährliche Welt von Jumanji entführt wurde.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/B0xHHoyN7X4?si=bIzLJlQ4XtcezzKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageJumanji"></div>

      </div>
    </section>
  )
}

export default Jumanji