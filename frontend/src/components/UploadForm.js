import { useState } from "react";
import {Link } from 'react-router-dom';

const UploadForm = (props) => {
    //send information about file, name, length, etc
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    
    const [message, setMessage] = useState('');
    const [showForm, set_show_form] = useState(true);

    const sendFields = async () => {
        //function to fetch API and make 'POST' request
        const response = await fetch("/form", {
            'method': "POST",
            headers :{ 'Content-Type': 'application/json'},
            //sending data
            body : JSON.stringify({"email": email, "name": name, "body": body})
        });
        const data = await response.json();
        return data;
    } 
    
    const handleSubmit= async (event) => { // submit event listener
        event.preventDefault();
        let result = await sendFields();
        set_show_form(!showForm);
        set_message(result.message);
        console.log("here's message: ");
        console.log(message);
    }
    if (showForm){
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email
                        <br></br>
                        <input type="text" value={email} onChange={(event)=>set_email(event.target.value)} placeholder="Enter Country" required />
                        <br></br>
                    </label>
                    <br></br>

                    <label htmlFor="first_name">
                        first_name:
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
                <footer>
                    <Link reloadDocument to="/">Return Home</Link>
                </footer>
            </div>
        )
    }
    else{
        return(
            <div>
                <a>{message}</a>
                <footer>
                <Link reloadDocument to="/">Return Home</Link>
                </footer>
            </div>
        )
    }
}

export default UploadForm;