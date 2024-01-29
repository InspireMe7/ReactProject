import "../Css/login.css"
import { useNavigate } from "react-router-dom";
import { UserObject } from "../Data"
import { useState } from "react"


const Users = UserObject;


function LoginPage() {
    const [login, setlogin] = useState("")
    const [password, setpassword] = useState("")


    const navigate = useNavigate();

    function handlehomeclick() {
        navigate("Home");
    };



    function UpdateUser(e) {
        setlogin(e.target.value)
    }

    function UpdatePassword(e) {
        setpassword(e.target.value);
    }

    function CheckUser() {
        for (const key in Users) {
            const user = Users[key];
            if (user.name === login) {
                if (user.password === password) {
                    handlehomeclick();
                    break;
                }
                else {
                    alert("wrong password");
                }
            }
            else {
                alert("User not found")
            }

        }
    }
    return (
        <section className="backgroundImage">


            <div className="login" style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <h1>Dream Stream</h1>
                <form>
                    <h3>User Name:</h3>
                    <input onChange={UpdateUser} value={login} />
                    <h3>Password:</h3>
                    <input onChange={UpdatePassword} value={password} type="password" />
                </form>

                <button onClick={CheckUser}>Log in</button>

            </div>

            {/* <footer className="footer">
                <p>About</p>
                <p>Contact</p>
            </footer> */}
        </section>
    )
}

export default LoginPage