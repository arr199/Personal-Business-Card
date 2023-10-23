import React from "react"
import { Intro } from "./components/intro.js"
import { About } from "./components/about.js"
import { Interests } from "./components/interests.js"
import { Footer } from "./components/footer.js"

export const App = () => {

    return (
        <div>
              <Intro/> 
              <About/>
              <Interests/>
              <Footer/>
        </div>

    )

}