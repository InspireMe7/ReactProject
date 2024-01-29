import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function StarGate() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Star Gate</h1>
          <p>Ein wegen seiner ungewöhnlichen Theorien über die Ursprünge der ägyptischen Kultur belächelter junger Wissenschaftler löst das Rätsel eines "Sternentors" und läßt sich mit einer US-Spezialeinheit auf einen fernen Planeten transformieren. Dort besiegen sie einen despotischen Herrscher, und er findet die große Liebe.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/fkO6bIphWgE?si=sMsRdi-JhL0qFgtZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageStarGate"></div>

      </div>
    </section>
  )
}

export default StarGate