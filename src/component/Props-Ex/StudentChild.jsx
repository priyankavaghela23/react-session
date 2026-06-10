function StudentChild({name,age}){
    return(
        <>
        <h1>Student Props Example</h1>
        <h3>Name: {name}</h3>
        <h3>Name: {age}</h3>
        </>
    )
}

export function Employee(props){
    return(
        <>
        <h1>Emplyee Props Example</h1>
        <h3>Emplye Name:{props.name}</h3>
        <h3>Emplye Salary:{props.salary}</h3>

        </>
    )
}

export function Product({name,cat,price}){
    return(
        <>
        <h1>Product Props Example</h1>
        <h3>Product Category:{cat}</h3>
        <h3>Product Name:{name}</h3>
        <h3>Product Price:{price}</h3>
        </>
    )
}

export function City(props){
    return(
    <>
    <h1>Display City</h1>
    <h3>Welcome to {props.city}</h3>
    </>
    )
}

export function ArrayEx(props){
    return(
        <>
        <h1>Fruits List</h1>
        {
            props.fruits.map((fruits,index)=>(
                <h3 key={index}>{fruits}</h3>
            ))
        }
        
        </>
    )
}

export function ObjectEx(props){
    return(
        <>
        <h1>Object Example</h1>

        <h3>Name: {props.obj.name}</h3>
        <h3>Age: {props.obj.age}</h3>
        

        </>
    )
}
export default StudentChild;