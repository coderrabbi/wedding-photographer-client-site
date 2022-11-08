import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../../firebase/config";
import { AuthContext } from "../../../context/AuthProvider";
const auth = getAuth(app);
const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [user, setUser] = useState({});
  const { loading } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        if (user.emailVerified) {
          navigate(from, { replace: true });
          loading = false;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          navigate(from, { replace: true });
          loading = false;
        }
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="text-center flex flex-col justify-center items-center gap-3">
      <span className="text-white  ">
        Or <br /> sign up with
      </span>
      <div className="flex gap-5">
        <Link>
          <FcGoogle
            onClick={googleSignIn}
            className=" bg-white rounded-xl text-3xl"
          />
        </Link>
        <Link>
          <FaGithub
            onClick={handleGithubSignIn}
            className=" bg-white rounded-xl text-3xl"
          />
        </Link>
      </div>
    </div>
  );
};

export default Auth;
