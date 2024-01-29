import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function DarkCity() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Dark City</h1>
          <p>Dark City ist einer jener Filme, die ihre eigenen Welten erschaffen, in denen eigene Regeln losgelöst von der Realität gelten und die mit ihnen derart sorgsam umgehen, dass selbst unlogische Momente in dieser Welt einzigartig und nachvollziehbar erscheinen.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/0ZANpBvTAuQ?si=ptgZrW3eHYwYYGec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageDarkCity"></div>

      </div>
    </section>
  )
}

export default DarkCity
