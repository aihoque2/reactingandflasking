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
    
    const handeSubmit=(event) => { // submit event listener
        event.preventDefault();
        let result = sendFields();
        console.log("here's result: ")
        console.log(result)
    }

    return(
        <div>
            <form onSubmit="handleSubmit()">
                <label htmlFor="field">
                    Country
                    <input type="text" value={country} Onchange={(event)=>setCountry(event.target.value)} required > Enter Country</input>
                </label>

                <label htmlFor="farm">
                    Farm
                    <input type="text" value={farm} Onchange={(event)=>setFarm(event.target.value)} required > Enter Farm</input>
                </label>

                <label htmlFor="field">
                    Field
                    <input type="text" value={field} Onchange={(event)=>setField(event.target.value)} required > Enter Field</input>
                </label>

            </form>
        </div>
    )
}

export default UploadForm;