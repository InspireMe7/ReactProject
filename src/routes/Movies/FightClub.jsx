import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function FightClub() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Fight Club</h1>
          <p>Ein junger, von Schlaflosigkeit geplagter Yuppie lernt den charismatischen Tyler Durden kennen und findet bei ihm Unterschlupf, als seine Wohnung in die Luft gejagt wird. Gemeinsam gründen sie den Fight Club, in dem sich Männer gegenseitig vermöbeln - und gestärkt wieder in den Alltag gehen.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/G7tr7xcUCFA?si=flI4gE7XT3No9Myj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageFightClub"></div>

      </div>
    </section>
  )
}

export default FightClub