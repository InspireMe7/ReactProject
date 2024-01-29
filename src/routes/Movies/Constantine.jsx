import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function Constantine() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Constantine</h1>
          <p>Constantine ist ein Superhelden-Film von Francis Lawrence mit Keanu Reeves und Rachel Weisz. In der Comicverfilmung Constantine untersucht Keanu Reeves als Detektiv des Übernatürlichen John Constantine einen vermeintlichen Selbstmord. Die Spur führt direkt in die Hölle.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/AWBRelPvko4?si=ldiRz6nHtxArBIE2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageConstantine"></div>

      </div>
    </section>
  )
}

export default Constantine