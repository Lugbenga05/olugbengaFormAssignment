import { useState } from "react";



function Signupform () {
    const [signupData, setSignupData] = useState({
        name: " ",
        surname: " ",
        gender: " ",
        email: " ",
        username: " ",
        password: " "

    });

    const validateConditions =  {
        name: {maxLength: 18},
        surname:  {maxLength: 18},
        email:  {maxLength: 35},
        username:  {maxLength: 14},
        password:  {maxLength: 11}

    };

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setSignupData(
            (prevState)=>({
                ...prevState,
                [name]: value
            })
        )
    };


    const handleValidation  = (inputName) => {
        const inputValue = signupData[inputName];
        const {maxLength} = validateConditions[inputName];

        if (inputValue.length > maxLength) {
            return `Entered ${inputName} is too long. Maximum character is ${maxLength}`
        }
            
    };


    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(signupData);
    }


    return(
        <>
                <section className="signup-body">

                        <h3 id="signupTitle">Signup Here</h3>

                        <form action="" onSubmit={handleSubmit}>
                            <div className="input-wrap">
                                <label>First Name:</label>
                                <input type="name" name="name" id="name" placeholder="Ojo" value={signupData.name} onChange={handleChange} />
                                {<p>{handleValidation("name")}</p> }
                            </div>

                            <div className="input-wrap">
                                <label>Last Name:</label>
                                <input type="surname" name="surname" id="surname" placeholder="Adamu" value={signupData.surname} onChange={handleChange} />
                                {<p>{handleValidation("surname")}</p> }
                            </div>

                            <div id="selectWrap">
                                <label>Gender:</label>
                                <select name="gender" id="gender" value={signupData.gender} onChange={handleChange}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div className="input-wrap">
                                <label>Email:</label>
                                <input type="email" name="email" id="email" placeholder="ojoadamu@gmail.com" value={signupData.email} onChange={handleChange}/>
                                {<p>{handleValidation("email")}</p> }
                            </div>

                            <div className="input-wrap">
                                <label>Create Username:</label>
                                <input type="username" name="username" id="username" placeholder="" value={signupData.username} onChange={handleChange}/>
                                {<p>{handleValidation("username")}</p> }
                            </div>

                            <div className="input-wrap">
                                <label>Create Password:</label>
                                <input type="password" name="password" id="password" placeholder="**********" value={signupData.passwordassword} onChange={handleChange} />
                                {<p>{handleValidation("password")}</p> }
                            </div>
                            <br/>

                            <button type="submit" >Signup</button>
                        </form>

                </section>
        
        </>
    )
    
}



export default Signupform