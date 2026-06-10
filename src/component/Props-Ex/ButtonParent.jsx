import ButtonChild, { InputText,HandleCard } from "./ButtonChild";
import { useState } from "react";

export default function ButtonParent(){

    const [name, setName] = useState('')
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')


    const handleLoging=()=>{
        console.log("Call Login API");  
    }

    const handleSignin=()=>{
        console.log("SignUp Button Clicked");
        
    }

    const handleShowName=(val)=>{
            setName(val)
            
    }

    const handleCardProps=(val1,val2)=>{
        console.log(val1);
        console.log(val2);
        setTitle(val1)
        setDescription(val2)


        
        
    }


    return(
        <>
        <div>
         Hello {name} 
        </div>
        <InputText handleInput={handleShowName}/> <hr />
        <ButtonChild type="success" text="Login" handleClick={handleLoging}/>
        <ButtonChild type="primary" text="Sign In" handleClick={handleSignin}/>
        <ButtonChild type="danger" text="Error"/>
        <ButtonChild type="warning" text="Alert"/>
        <hr />

        <HandleCard type="simple" handlecard={handleCardProps}/>
        <h3>Title:{title}</h3>
        <h3>Description:{description}</h3>
         
        </>
    )
}