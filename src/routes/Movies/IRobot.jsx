import React from 'react'
import "../../Css/Movie.css"
import "../../Css/moviepictures.css"

function IRobot() {
  return (
    <section className="MovieBox">
      <div className="FlexBoxOuter">

        <div className="FlexBoxInner">
          <h1>IRobot</h1>
          <p>Im Chicago des Jahres 2035 sind humanoide Roboter Realität, künstliche Wesen, die in vielen Bereichen als Arbeiter und Helfer eingesetzt werden. Jedem „Robot“ wurden die drei Gesetze der Robotik implantiert, die er unbedingt einhalten muss und die verhindern, dass er sich jemals gegen einen Menschen stellen kann.</p>
          <div />

          <div>
          <iframe className="Trailer" src="https://www.youtube.com/embed/axgrdSyW_mE?si=QFtSJt9T3Y8lO9cs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="movieImageIRobot"></div>

      </div>
    </section>
  )
}

export default IRobot