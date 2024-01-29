
import { Routes, Route } from "react-router-dom"
import "../src/Css/app.css"

import LoginPage from "./routes/LoginPage"
import Home from "../src/routes/Home"
import MovieList from "../src/routes/MovieList"
import Alita from "./routes/Movies/Alita"
import Bourne1 from "./routes/Movies/Bourne1"
import Bourne2 from "./routes/Movies/Bourne2"
import Bourne3 from "./routes/Movies/Bourne3"
import CatchMe from "./routes/Movies/CatchMeIfYouCan"
import Constantine from "./routes/Movies/Constantine"
import DarkCity from "./routes/Movies/DarkCity"
import EdgeofTomorrow from "./routes/Movies/EdgeOfTomorrow"
import FightClub from "./routes/Movies/FightClub"
import IAmMother from "./routes/Movies/IAmMother"
import IRobot from "./routes/Movies/IRobot"
import Jumanji from "./routes/Movies/Jumanji"
import LeonDerProfi from "./routes/Movies/LeonderProfi"
import Matrix from "./routes/Movies/Matrix"
import MatrixReloaded from "./routes/Movies/MatrixReloaded"
import MatrixRevolutions from "./routes/Movies/MatrixRevolutions"
import Oblivion from "./routes/Movies/Oblivion"
import Oceans11 from "./routes/Movies/Oceans11"
import Oceans12 from "./routes/Movies/Oceans12"
import ScottPilgrim from "./routes/Movies/ScottPilgrim"
import StarGate from "./routes/Movies/Stargate"
import Terrabitia from "./routes/Movies/Terrabitia"
import VwieVendetta from "./routes/Movies/VwieVendetta"
import Fav from "./Fav"





function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="Home" element={<Home />}>
          <Route index element={<MovieList />}></Route>
          <Route path="Movie0" element={<Alita />}> </Route>
          <Route path="Movie1" element={<Bourne1 />}> </Route>
          <Route path="Movie2" element={<Bourne2 />}> </Route>
          <Route path="Movie3" element={<Bourne3 />}> </Route>
          <Route path="Movie4" element={<CatchMe />}> </Route>
          <Route path="Movie5" element={<Constantine />}> </Route>
          <Route path="Movie6" element={<DarkCity />}> </Route>
          <Route path="Movie7" element={<EdgeofTomorrow />}> </Route>
          <Route path="Movie8" element={<FightClub />}> </Route>
          <Route path="Movie9" element={<IAmMother />}> </Route>
          <Route path="Movie10" element={<IRobot />}> </Route>
          <Route path="Movie11" element={<Jumanji />}> </Route>
          <Route path="Movie12" element={<LeonDerProfi />}> </Route>
          <Route path="Movie13" element={<Matrix />}> </Route>
          <Route path="Movie14" element={<MatrixReloaded />}> </Route>
          <Route path="Movie15" element={<MatrixRevolutions />}> </Route>
          <Route path="Movie16" element={<Oblivion />}> </Route>
          <Route path="Movie17" element={<Oceans11 />}> </Route>
          <Route path="Movie18" element={<Oceans12 />}> </Route>
          <Route path="Movie19" element={<ScottPilgrim />}> </Route>
          <Route path="Movie20" element={<StarGate />}> </Route>
          <Route path="Movie21" element={<Terrabitia />}> </Route>
          <Route path="Movie22" element={<VwieVendetta />}> </Route>
          <Route path="Fav" element={<Fav />}></Route>
        </Route>
      </Routes>
    </div >
  )
}

export default App
