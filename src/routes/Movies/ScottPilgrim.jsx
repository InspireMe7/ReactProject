import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function ScottPilgrim() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>Scott Pilgrim gegen den Rest der Welt</h1>
          <p>"Scott Pilgrim gegen den Rest der Welt" ist ein sinnlicher bis übersinnlicher Ausflug in die Traum- und Alltagswelten eines liebenswerten 20- jährigen. Scott weiß vielleicht nicht, was er mit seinem Leben anfangen soll, aber er ist auf jeden Fall bereit, für die Liebe zu kämpfen. Egal, gegen wen.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/NJNAjc3lILY?si=vZE8cdD9r9yr9AT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageScottPilgrim"></div>

      </div>
    </section>
  )
}

export default ScottPilgrim