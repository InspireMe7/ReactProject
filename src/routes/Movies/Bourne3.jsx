import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function Bourne3() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Das Bourne Ultimatum</h1>
          <p>Jason Bourne ist der CIA-Elitekiller, der jede Erinnerung an seine Identität verloren hat. Mit Hilfe der Treadstone-Mitarbeiterin Nicky Parsons und des Journalisten Sam Ross jagt Jason um den halben Erdball, um endlich den Mann zu stellen, der ihn zu einem willenlosen Auftragsmörder umformte.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/WGUvwLhF8xQ?si=vVsM2DB6CArzMSl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageBourne3"></div>

      </div>
    </section>
  )
}

export default Bourne3