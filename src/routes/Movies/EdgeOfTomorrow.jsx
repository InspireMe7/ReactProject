import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function EdgeofTomorrow() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Edge of Tomorrow</h1>
          <p>In „Edge of Tomorrow“ überrennen Aliens die Welt. Die Menschheit hat es schwer, sich gegen die sogenannten Mimics zur Wehr zu setzen. Das liegt hauptsächlich an den Alpha-Mimics, welche die Fähigkeit haben, die Zeit für 24 Stunden zurückzudrehen, falls sie sterben sollten.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/oZcBls4IugA?si=oPS07-hm_jxRCm6b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageEdgeOfTomorrow"></div>

      </div>
    </section>
  )
}

export default EdgeofTomorrow