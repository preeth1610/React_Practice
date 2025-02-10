import { useForm } from "react-hook-form";
function Formdemo(){

    let {register,handleSubmit,formState:{errors}}=useForm()


    let submitForm=(userObj)=>{
       
        fetch("http://localhost:4000/users",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',

            },
            body:JSON.stringify(userObj)
        })
        .then(res=>res.json())
        .then(message=>console.log(message))
        .catch(err=>console.log("err is :",err))


    };




return (
<div className="container">
<div className="row">
    <div className="row-11 col-sm-8 col-md-6 mx-auto mb-4">
    <form onSubmit={handleSubmit(submitForm)} >
        {/* input field*/}
        <input type="text" name="Username" id="Username" className="form-control mb-3" placeholder="Username" {...register("Username",{required:true,minLength:4})}
        />
        { errors.Username?.type=="required" && <p className="text-danger">* Username is required</p>}
        { errors.Username?.type=="minLength" && <p className="text-danger">* minimum required is 4</p>}


        <input type="date"  className="form-control mb-3" {...register("dateOfBirth",{required:true,minLength:"4"})} />


        <div className="form-check">
        <input type="radio" id="male" className="form-check-input" {...register("gender")} />
        <label htmlFor="male"   className="form-check-label">male</label>
        </div>
        <div className="form-check">
        <input type="radio" id="female" value="female"className="form-check-input mb-3" {...register("gender")} />
        <label htmlFor="female" className="form-check-label" >female</label>
        </div>
        <select {...register("state")} className="form-select mb-3">
            <option value="default" disabled>choose state</option>
            <option value="telangana">Telanagana</option>
            <option value="chennai">chennai</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
        </select>
        <textarea name="" id="" cols="30" className="form-control" {...register("Text")} ></textarea>
        {/* button */}
        <button type="submit" className="btn btn-success mt-3">
            
            Add user</button>
    </form>
    </div>
</div>
</div>
)
}
export default Formdemo;