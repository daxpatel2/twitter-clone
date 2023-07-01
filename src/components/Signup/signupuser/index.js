import "./index.css";
import { useState, React } from "react";
import { auth, db } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signupforms() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [uid, setUID] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setMessage(`Account created for ${userCredential.user.email}`);
        setUID(userCredential.user.UID);
        //if account created successfully
        navigate("/main");
        return true;
      })
      .catch((error) => {
        setMessage(error.message);
        return false;
      });
  };

  async function handelDB(event) {
    event.preventDefault();
    try {
      const usersRef = db.collections("users");
      await usersRef.add({
        username: email.substring(0, email.indexOf("@")),
        email: email,
        password: password,
        image: image,
        UID: uid, //we can refrance this collections document by this unique UID for each person that is registered
      });
    } catch (e) {
      setMessage(e.message);
    }
  }

  return (
    <div>
      <h2 className="title-signup-page">Join Twitter today</h2>
      <form onSubmit={handleSubmit} className="forms">
        <div className="email">
          <input
            value={email}
            name="email"
            placeholder="email"
            className="user-input"
            type="text"
            onChange={(event) => {
              setemail(event.target.value);
            }}
          ></input>
        </div>
        <div className="password">
          <input
            value={password}
            name="password"
            placeholder="password"
            className="pass-input"
            type="text"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </div>
        <div className="user__img">
          <p>Hello</p>
          {/* drag and drop an image functionality */}
        </div>
        <p className="message">{message}</p>
        <button
          onClick={handleSubmit ? handelDB : ""}
          className="register-button"
          type="submit"
        >
          Next
        </button>
      </form>
      <div className="returning-user">
        <a href="/" className="returning-user-text">
          Already have an account?
        </a>
      </div>
    </div>
  );
}

export default Signupforms;
