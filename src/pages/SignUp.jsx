import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import GoogleAuth from "../components/GoogleAuth/GoogleAuth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();
  //Function to enable user to type their login details and grab the target value
  //depending if it was id of email or id of password
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // Auth users and their credantials
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //get Auth function
      const auth = getAuth();
      // registering the user with this function and it return promise
      const userCredantial = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //getting the user info from database
      const user = userCredantial.user;
      //update the display name
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      // to get a copy of form data such as name,email and pass
      const formDataCopy = { ...formData };
      //delete password before sending info to DB
      delete formDataCopy.password;
      formDataCopy.tiemstamp = serverTimestamp();
      // set doc to update the user database to the user collection
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      //then navigate to the user home page
      navigate("/");
    } catch (error) {
      toast.error("Somthing went wrong try again later");
    }
  };
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome back!</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="nameInput"
              placeholder="Name"
              id="name"
              value={name}
              onChange={onChange}
            />

            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />
            <div className="passwordInputDiv">
              <input
                type={showPassword ? "text" : "password"}
                className="passwordInput"
                placeholder="Password"
                id="password"
                value={password}
                onChange={onChange}
              />
              <img
                src={visibilityIcon}
                alt="show password"
                className="showPassword"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>
            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password
            </Link>

            <div className="signUpBar">
              <p className="signUpText">Sign Up</p>
              <button className="signUpButton">
                <ArrowRightIcon fill="white" width="34px" height="34px" />
              </button>
            </div>
          </form>

          {/* Google OAuth */}
          <GoogleAuth />
          <Link to="/sign-in" className="registerLink">
            Sign In Instead
          </Link>
        </main>
      </div>
    </>
  );
};

export default SignUp;
