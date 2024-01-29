import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function Oceans12() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1> Oceans 12</h1>
          <p>Inhaltsangabe. Terry Benedict (Andy Garcia) will sein Geld, das ihm die „Oceans Eleven“ vor drei Jahren gestohlen haben, zurück. Nicht nur das, für die Unannehmlichkeiten verlangt er zu den 160 Millionen Dollar auch noch Zinsen und gibt ihnen gerade mal zwei Wochen Zeit, um das Geld aufzutreiben.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/7xkG8QY-PrI?si=I3Z8kY8K76SJxkuX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageOceans12"></div>

      </div>
    </section>
  )
}

export default Oceans12