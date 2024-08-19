import "./assignment1.css"
import { useState } from "react";

function Cvapplication(){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhonenumber] = useState("");
    const handleClick = ()=>{
       
        /*setName((prevName)=>{return{...prevName}});
        setSurname((prevSurname)=>{return{...prevSurname}});
        setEmail((prevEmail)=>{return{...prevEmail}});
        setPhonenumber((prevPhonenumber)=>{return{...prevPhonenumber}});
        /*setSurname(ex.target.value);
        setEmail(ex.target.value);
        setPhonenumber(ex.target.value);*/
    }
    return(<>
        
        <form >
            <fieldset>
                <legend>personal info</legend>
                <div className="form-group">
                <label for="name">name: </label>
                <input  value={name} onChange={(ex)=> setName(ex.target.value)} type="text"id="name" className="form-control" required/>
                </div>
                <div className="form-group ">
                <label for="surname">surname: </label>
                <input value={surname} onChange={(ex)=> setSurname(ex.target.value)} type="text" id="surname" className="form-control" />
                </div>
                <div className='form-group'> 
                <label for="email">email: </label>
                <input value={email} onChange={(ex)=> setEmail(ex.target.value)} id="email" type="email" className="form-control" />
                </div>
                <div className="form-group">
                <label for="phone-number">phone number: </label>
                <input value={phoneNumber} onChange={(ex)=> setPhonenumber(ex.target.value)} id="phone-number" className="form-control" /> 
                </div>
                
            </fieldset>
                
            <fieldset>
            <legend>qualification</legend>
                <div className="check-box">
                <input type="checkbox"/>
                <label>PhD</label>
                </div>
                <div className="check-box">
                <input type="checkbox"/>
                <label>masters degree</label>
                </div>
                <div className="check-box">
                <input type="checkbox"/>
                <label>bachelor's degree</label>
                </div>
                <div classNameName="check-box">
                <input type="checkbox"/>
                <label>diploma</label>
                </div>
                
                <div classNameName="check-box">
                <input type="checkbox"/>
                <label>certificate</label>
                </div>
                

            </fieldset>
            <fieldset>
                <legend>practical experience </legend>
                <div class="form-group">
                <label>describe yourself</label>
                <textarea className="form-control" placeholder="i started my work at .... i worked there for about...."/>
                </div>
               
            </fieldset>
            <button type="submit">submit</button>
            
            
        </form>
        <button onClick={handleClick}>edit</button>
       

    
    </>)
}

export default Cvapplication;