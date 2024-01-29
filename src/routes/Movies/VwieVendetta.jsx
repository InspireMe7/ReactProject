import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function VwieVendetta() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>v wie Vendetta</h1>
          <p>Der Film spielt im dystopischen, futuristischen London um das Jahr 2020. Die Geschichte folgt V, einem maskierten Freiheitskämpfer, der im Kampf gegen den totalitären Staat gleichzeitig persönliche Rache verfolgt (ital. vendetta für Blutrache) und eine gesellschaftliche sowie politische Revolution vorbereitet.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/hgEqogQaoWQ?si=Q_TzQMSk-0KimXpV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageVwieVendetta"></div>

      </div>
    </section>
  )
}

export default VwieVendetta