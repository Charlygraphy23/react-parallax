import './App.scss'
import Background from "./assets/bg1.png"
import Girl from "./assets/girl1.png"
import Rock from "./assets/rock1.png"
import gsap from 'gsap'
import { useLayoutEffect, useMemo } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {

  const context = useMemo(() => gsap.context , [])

  useLayoutEffect(() => {


    window.scrollTo({
      top : 0
    })


    const ctx = context(() => {
      const timeline = gsap.timeline({
        scrollTrigger : {
          trigger : '.App',
          scrub: 1,
          pin : ".App",
          start: "top top",
          endTrigger : '.footer',
          end : 'bottom bottom'
        },
      })

      timeline.to('.girl' , {y : "-10%" , duration : 30})
      .to(".rock" , {y : "-10%" , duration : 30} , "-=30")
      .to(".bg" , {y : "10%" , duration : 30 , } , "-=30")
      .to(".title" , {scale : "1.5" , duration : 30 , top : "0%"} , "-=30")
      .to('.footer' , {top : "0%" , duration : 30}, "-=30")

    })


    return () => {
      ctx.revert()
    }

  } , [])

  return (
    <div className="App">
      <div className="content">
        <img className="bg" src={Background} alt="Background" />
        <img className="girl" src={Girl} alt="Girl" />
        <img className="rock" src={Rock} alt="Rock" />

        <div className="title__wrapper">
          <h1 className="title">Traveling</h1>
        </div>
      </div>

      <div className="footer">
        <div className="card__wrapper">
          <img src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, quod.</p>
        </div>

        <div className="card__wrapper">
          <img src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, quod.</p>

        </div>
      </div>
    </div>
  )
}

export default App
