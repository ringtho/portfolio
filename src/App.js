import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./pages/Navbar";
import DotGroup from "./pages/DotGroup";
import Landing from "./pages/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./pages/MySkills";
import Projects from "./pages/Projects";

function App() {
  const [selectedPage, setSelectedPage] = useState("home")
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  useEffect(() => {
    function handleScroll(){
      if(window.scrollY === 0){
        setIsTopOfPage(true)
      }else {
        setIsTopOfPage(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <div className="app bg-deep-blue">
      <Navbar 
        isTopOfPage={isTopOfPage} 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage} 
      />
      <div className="w-5/6 mx-auto md:h-full">
      {isAboveMediumScreens && 
        (
        <DotGroup 
          selectedPage={selectedPage} 
          setSelectedPage={setSelectedPage} 
        />  
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
          <Projects />
      </div>
    </div>
  );
}

export default App;
