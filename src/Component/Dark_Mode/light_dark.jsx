import React, { useState } from 'react'
import './light_dark.css'

const light_dark = () => {

    const [darkMode, setDarkMode] = useState(false)
    const [theme, setTheme] = useState("dark-mode")
    document.body.className=theme

console.log(theme);

    function darkModeOn() {
        setDarkMode(!darkMode)
        if(!darkMode){
            setTheme("light-theme")
        }
        else{
            setTheme("dark-theme")

        }
    }


    return (
        <div className={darkMode ? "lightMode" : ""}>

            <button className="darkMode" onClick={() => darkModeOn()}> </button>

        </div>
    )
}

export default light_dark