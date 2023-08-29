import React, {useState, useEffect} from "react";

function PageTitleChanger() {
    const [title, setTitle] = useState ('Titulo inicial')
    const [inputValue, setIputValue] = useState ('')

    const handleChange = (event) => {
        setIputValue (event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setTitle(inputValue);
        setIputValue('');
    };

    useEffect(() => {
        document.title = title;
        console.log(title);
    }, [title] );

    return ( 
        <div>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Igrese titulo nuevo"/>
                <button type="submit">Cambiar</button>
            </form>
        </div>
     );
}

export default PageTitleChanger;