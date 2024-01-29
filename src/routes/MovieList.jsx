import React from 'react'
import { Link } from "react-router-dom"
import "../Css/MovieList.css"

function MovieList() {
  return (
    <section className="MovieSection">
    <ul className="MovieDisplay">
        <li>
            <div>
                <Link to="Movie0"><img src="src/assets/MoviePictures/Alita.jpg" alt="" /></Link>
                <h3>Alita Battle Angel</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie1"><img src="src/assets/MoviePictures/BourneIdentität.webp" alt="" /></Link>
                <h3>Die Bourne Identität</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie2"><img src="src/assets/MoviePictures/BourneVerschwörung.jpg" alt="" /></Link>
                <h3>Die Bourne Verschwörung</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie3"><img src="src/assets/MoviePictures/BourneUltimatum.jpg" alt="" /></Link>
                <h3>Das Bourne Ultimatum</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie4"><img src="src/assets/MoviePictures/catchmeifyoucan.webp" alt="" /></Link>
                <h3>Catch me if you can</h3>
            </div>
        </li>


        <li>
            <div>
                <Link to="Movie5"><img src="src/assets/MoviePictures/Constantine.jpg" alt="" /></Link>
                <h3>Constantine</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie6"><img src="src/assets/MoviePictures/darkCity.jpg" alt="" /></Link>
                <h3>Dark City</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie7"><img src="src/assets/MoviePictures/EdgeofTomorrow.jpg" alt="" /></Link>
                <h3>Edge of Tomorrow</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie8"><img src="src/assets/MoviePictures/FightClub.jpg" alt="" /></Link>
                <h3>Fight Club</h3>
            </div>
        </li>


        <li>
            <div>
                <Link to="Movie9"><img src="src/assets/MoviePictures/IamMother.jpeg" alt="" /></Link>
                <h3>I am Mother</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie10"><img src="src/assets/MoviePictures/iRobot.jpg" alt="" /></Link>
                <h3>I Robot</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie11"><img src="src/assets/MoviePictures/Jumanji.jpg" alt="" /></Link>
                <h3>Jumanji</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie12"><img src="src/assets/MoviePictures/leon.webp" alt="" /></Link>
                <h3>Leon der Profi</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie13"><img src="src/assets/MoviePictures/Matrix.jpg" alt="" /></Link>
                <h3>Matrix</h3>
            </div>
        </li>


        <li>
            <div>
                <Link to="Movie14"><img src="src/assets/MoviePictures/MatrixReloaded.jpg" alt="" /></Link>
                <h3>Matrix Reloaded</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie15"><img src="src/assets/MoviePictures/MatrixRevolutions.jpg" alt="" /></Link>
                <h3>Matrix Revolutions</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie16"><img src="src/assets/MoviePictures/Oblivion.jpg" alt="" /></Link>
                <h3>Oblivion</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie17"><img src="src/assets/MoviePictures/Oceans11.jpg" alt="" /></Link>
                <h3>Oceans 11</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie18"><img src="src/assets/MoviePictures/Oceans12.jpg" alt="" /></Link>
                <h3>Oceans 12</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie19"><img src="src/assets/MoviePictures/ScottPilgrim.jpg" alt="" /></Link>
                <h3>Scott Pilgrim</h3>
            </div>
        </li>


        <li>
            <div>
                <Link to="Movie20"><img src="src/assets/MoviePictures/StarGate.jpg" alt="" /></Link>
                <h3>Star Gate</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie21"><img src="src/assets/MoviePictures/Terrabitia.webp" alt="" /></Link>
                <h3>Die Brücke nach Terrabitia</h3>
            </div>
        </li>
        <li>
            <div>
                <Link to="Movie22"><img src="src/assets/MoviePictures/VwieVendetta.jpg" alt="" /></Link>
                <h3>VwieVendetta</h3>
            </div>
        </li>







    </ul>
</section>
  )
}

export default MovieList