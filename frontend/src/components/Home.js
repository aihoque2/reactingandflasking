import React, { useState, useEffect } from "react";


const Home = (props) =>{
    const [data, setData] = useState({state: "", message: ""});

  
    useEffect(() =>{fetch("/index")
        .then(res => res.json()
        .then(response =>{
            console.log("heres data: ")
            setData({state: response.state, message: response.message});
        })
    );
    })

    return(
        <div>
            <p>
            {data.message}
            </p>

            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
            git gud @ react, scrub
            </a>
            
        </div>
    )
} 

export default Home;