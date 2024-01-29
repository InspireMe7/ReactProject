import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function IAmMother() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>I am Mother</h1>
          <p>Ein Teenager-Mädchen, genannt „Tochter“ (Clara Rugaard), lebt in einem unterirdischen Hochsicherheitsbunker und wird von einem humanoiden Roboter namens „Mutter“ (Stimme von Rose Byrne) aufgezogen. Der Androide wurde entwickelt, um die Erde nach der Auslöschung der Menschheit neu zu besiedeln.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/j8ZEgL_d1cw?si=VU22f6PejmjJWyWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageIAmMother"></div>

      </div>
    </section>
  )
}

export default IAmMother