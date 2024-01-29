import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function CatchMe() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Catch me if you can</h1>
          <p>Der Spielfilm erzählt die Geschichte dieses jungen Mannes, der durch ganz Amerika und um die halbe Welt reiste, um sein Auskommen zu finden und zu überleben. Dicht auf den Fersen ist ihm stets Carl Hanratty, einer der besten Männer aus dem FBI und Spezialist für Scheckbetrug.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/_ohuJjjnWP4?si=HUtq37SwrYEivpbj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageCatchMe"></div>

      </div>
    </section>
  )
}

export default CatchMe