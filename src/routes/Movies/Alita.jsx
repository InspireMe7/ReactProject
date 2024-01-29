import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function Alita() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Alita Battle Angel</h1>
          <p>Alita ist entschlossen, das Geheimnis ihrer Herkunft zu lüften. Sie bricht zu einer Reise auf, die sie mit den Ungerechtigkeiten einer dunklen, korrupten Welt konfrontiert, und sie entdeckt, dass sie die Welt, in der sie lebt, verändern kann.</p>
          <div />
          <div>
            <iframe className="Trailer" src="https://www.youtube.com/embed/w7pYhpJaJW8?si=sQJwg11-uLk1RC1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
          </div>
        </div>

        <div className="movieImageAlita"></div>

      </div>
    </section>
  )
}

export default Alita