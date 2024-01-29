import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function LeonDerProfi() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Leon der Profi</h1>
          <p>Léon ist ein Auftragsmörder, der in New York in Diensten der Italo-Mafia steht. Er erledigt schwierige Aufträge, die ihm der ältere, berechnende Tony gibt. So schaltet er alleine, prompt und zuverlässig eine im Drogenhandel konkurrierende Bande aus, wobei er mehrere Kriminelle umbringt.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/3XgSLq-CePM?si=iw64RRujJQgg84I_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageLeonDerProfi"></div>

      </div>
    </section>
  )
}

export default LeonDerProfi