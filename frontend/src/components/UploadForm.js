import { useState } from "react";
import {Link } from 'react-router-dom';

const UploadForm = (props) => {
    //send information about file, name, length, etc
    const [country, setCountry] = useState('');
    const [farm, setFarm] = useState('');
    const [field, setField] = useState('');
    
    const [message, setMessage] = useState('');
    const [showForm, setShowForm] = useState(true);

    const sendFields = async () => {
        //function to fetch API and make 'POST' request
        const response = await fetch("/form", {
            'method': "POST",
            headers :{ 'Content-Type': 'application/json'},
            //sending data
            body : JSON.stringify({"country": country, "field": field, "farm": farm})
        });
        const data = await response.json();

        return data;
    } 
    
    const handleSubmit= async (event) => { // submit event listener
        event.preventDefault();
        let result = await sendFields();
        setShowForm(!showForm);
        setMessage(result.message);
        console.log("here's message: ");
        console.log(message);
    }
    if (showForm){
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="field">
                        Country: 
                        <br></br>
                        <input type="text" value={country} onChange={(event)=>setCountry(event.target.value)} placeholder="Enter Country" required />
                        <br></br>
                    </label>
                    <br></br>

                    <label htmlFor="farm">
                        Farm:
                        <br></br>  
                        <input type="text" value={farm} onChange={(event)=>setFarm(event.target.value)} placeholder="Enter Farm" required />
                        <br></br>
                    </label>
                    <br></br>

                    <label htmlFor="field">
                        Field:
                        <br></br> 
                        <textarea name="paragraph_text" placeholder="...any special message you would like to send?" value={field} onChange={(event)=>setField(event.target.value)}  cols="50" rows="10"></textarea>

                        <br></br>
                    </label>
                    <br></br>
                    <button>Submit</button>

                </form>
            </div>
        )
    }
    else{
        return(
            <div>
                <a>{message}</a>
            </div>
        )
    }
}

export default UploadForm;