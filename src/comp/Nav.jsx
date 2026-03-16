import { useState } from 'react'
import './Nav.css'

export const Nav = ({ onHandlePage, onhandleFetchMoviesByName, page }) => {

    const [input, setInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        onhandleFetchMoviesByName(input);
        setInput("");
    }


    return (
        <div className='navCont'>

            <h1 className='logo'>MovieHive</h1>

            {page === "home" &&
                <div className="search">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='search here...' value={input} onChange={(e) => setInput(e.target.value)} />
                    </form>
                </div>
            }
            <button onClick={() => {
                onHandlePage("home")
                onhandleFetchMoviesByName("")
            }}>Home</button>

            <button onClick={() => onHandlePage("fav")}>Favourite</button>
        </div>
    )
}

