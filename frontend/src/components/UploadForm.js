import { useState } from "react";

const UploadForm = (props) => {
    //send information about file, name, length, etc
    const [country, setCountry] = useState('');
    const [farm, setFarm] = useState('');
    const [field, setField] = useState('');

    let submitted = false;

    const sendFields = () =>{
        //function to fetch API and make 'POST' request
        return fetch("/form", {
            'method': "POST",
            headers :{ 'Content-Type': 'application/json'},
            //sending data
            body : JSON.stringify({"country": country, "field": field, "farm": farm})
        }).then(response => response.json()).catch(error => console.log(error))
    } 
    
    const handleSubmit=(event) => { // submit event listener
        event.preventDefault();
        let result = sendFields();
        console.log("here's result: ")
        console.log(result)
    }

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
                    <input type="text" value={field} onChange={(event)=>setField(event.target.value)} placeholder="Enter Field" required />
                    <br></br>
                </label>
                <br></br>
                <button>Submit</button>

            </form>
        </div>
    )
}

export default UploadForm;