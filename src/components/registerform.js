import "../styles/registerform.scss";



const Register = ()=>{
    return(
        <div className="parent">
        <div className="register-container">
              <div className="register-body">
                    <h2>REGISTRATION FORM</h2>
                        <input placeholder="Enter ur Name"/>
                        <input placeholder="Email"/>
                        <input placeholder="Phone"/>
                        <input placeholder="Password"/>
                    <button>REGISTER</button>
                </div>
                <img className="img" src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg"/>

                </div>

        </div>
    )
}
export default Register;