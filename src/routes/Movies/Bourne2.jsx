import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function Bourne2() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Die Bourne Verschwörung</h1>
          <p>Da Bourne unklare Erinnerungsfetzen an einen Mord in Berlin hat und Pamela Landy (Joan Allen), die Verantwortliche für den verpatzten CIA-Einsatz, den Fingerabdruck inzwischen mit ihm in Verbindung bringen kann, kommt der ehemalige CIA-Killer aus seinem indischen Schlupfwinkel heraus, um der Sache nachzugehen.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/12DLYndz2wQ?si=drZrVhKsGdPTYAhK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageBourne2"></div>

      </div>
    </section>
  )
}

export default Bourne2