import StudentChild,{Employee, Product,City, ArrayEx, ObjectEx} from "./StudentChild"

function StudentParent(){
    const fruits = ['Apple','Orange','Kiwi','Mango']
    const obj = {
        name:"Priyanka",
        age:21
    }
    return(
        <>
        <StudentChild name="Priyanka" age={22}/>  <hr />
        <Employee name="Vihaana" salary={50000}/> <hr />
        <Product name="iPhone 15 Pro" cat="Mobile Phones" price="₹1,29,900"/> <hr />    
        <City city="Surat"/> <hr />
        <ArrayEx fruits={fruits} /> <hr />
        <ObjectEx obj={obj}/>
        </>
    )
}

export default StudentParent