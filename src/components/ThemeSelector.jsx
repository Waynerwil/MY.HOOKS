import React, {useState} from "react";
import "./ThemeSelector.css"
import Reactions from "./Reactions";
function ThemeSelector() {
    //isDarkMode (true/false)
    const [isDarkMode, setIsDarkMode] = useState (false);
    const toggleTheme = () =>{
        const curreMode = isDarkMode// almacenar modo actual
        setIsDarkMode(!curreMode);
        //setIsDarkMode(!isDarkMode);
    };

    return ( 
        <div className={`app ${isDarkMode ? 'dark':'light'}`}>
            <header>
                <button onClick={toggleTheme}>Cambiar</button>
            </header>
            <main>
                <p>Este es el contenido</p>
                <Reactions isDarkMode ={isDarkMode}/>
            </main>

        </div>
     );
}

export default ThemeSelector;