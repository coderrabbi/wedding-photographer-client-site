import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
  const { loading, setLoading } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);

        const currentUser = { email: user.email };
        if (user.uid) {
          fetch("http://localhost:5000/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              localStorage.setItem("service-token", data.token);
            });
          navigate(from, { replace: true });
          setLoading(false);
          toast.success("login successful");
        }

        // if (user.emailVerified) {
        //   navigate(from, { replace: true });
        //   loading = false;
        //   toast.success("successfull");
        // }
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
