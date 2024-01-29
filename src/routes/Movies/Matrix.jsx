import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function Matrix() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Matrix</h1>
          <p>Was ist die Matrix? Die Matrix ist eine virtuelle Welt, die von Maschinen mit künstlicher Intelligenz erschaffen wurde. Die Menschen "leben" in dieser Welt, die sich für sie real anfühlt. In Wirklichkeit werden aber die Menschen von Maschinen gezüchtet und dienen als Energiequelle.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/ETvkaFGs6d4?si=CS53v0ru4D4-tj8B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageMatrix"></div>

      </div>
    </section>
  )
}

export default Matrix