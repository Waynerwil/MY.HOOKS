import React, {useState} from "react";

function Reactions({isDarkMode}) {
    //1- contador para los me gusta

    const [likes, setlikes] = useState (0);
    //2- contador para me encanta (loves)
    const [loves, setLoves] = useState(0);
    //3- contador me enoja
    const [angry, setAngry] = useState(0);
    //4- contador divierte
    const [haveFun, sethaveFun] = useState(0);

    const handleLikes = () =>{
    // aqui incrementamos me gusta
        setlikes( likes + 1);
    }
    const handleLoves = () =>{
    // aqui incrementamos me encanta 
        setLoves( loves + 1);
    }
    const handleAngry = () =>{
    // aqui incrementamos me enoja 
        setAngry( angry + 1);
    }
    const handleFun = () =>{
    // aqui incrementamos me divierte
        sethaveFun( haveFun +1);
    }

    return (<div className={`app ${isDarkMode ? 'dark':'light'}`}>
        <div>
            <button onClick={handleLikes}>{likes} {likes ===1? 'Like':'Likes'}</button>
        </div>
        <div>
            <button onClick={handleLoves}>{loves} {loves ===1? 'Love':'Loves'}</button>
        </div>
        <div>
            <button onClick={handleAngry}>{angry} {angry ===1? 'Angry':'Angrys'}</button>
        </div>
        <div>
            <button onClick={handleFun}>{haveFun} {haveFun ===1? 'Fun':'Fun'}</button>
        </div>
    </div>);
}

export default Reactions;