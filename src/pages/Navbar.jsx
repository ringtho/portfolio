import { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"

function Link({page, selectedPage, setSelectedPage}){
    const lowerCasePage = page.toLowerCase()

    return (
        <AnchorLink 
            className={`
            ${selectedPage === lowerCasePage ? "text-yellow" : ""}
             hover:text-yellow transition duration-500
            `}
            href={`#${lowerCasePage}`}
            onClick={()=>setSelectedPage(lowerCasePage)}>
            {page}
        </AnchorLink>
    )
}

function Navbar({selectedPage, setSelectedPage}){
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
    
    return (
        <nav className={`z-40 fixed top-0 py-6 w-full`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair font-bold text-3xl">JE</h4>

                {/* Desktop Nav */}

                {isAboveSmallScreens ? 
                    (
                        <div className="flex justify-between gap-16 font-opensans text-sm font-semibold ">
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                    ) : 
                    (
                        <div></div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar