import React from 'react'
import "../Css/home.css"
import { Outlet, Link } from "react-router-dom"

function Home() {

    return (
        <>
            <nav>
               <Link to="/Home">Home</Link>
               <Link to="Fav">Favourite Movies</Link>
               <Link to="/">Log Out</Link>

            </nav>
                <header className="CoverImage">
                    <h1>Dream Stream</h1>
                </header>
            <div className="sidebarflex">

                <main>
                    <Outlet />
                </main >
            </div>
        </>

    )
}

export default Home