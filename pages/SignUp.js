import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/FireBaseConfig";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function SignUp() {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        alert("Create accaunt successful");
        route.push("/");
      })
      .catch((err) => {
        alert("Create accaunt error. Such an account already exists !!!");
      });
  };
  return (
    <>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="title">Tesla create accaunt</div>

        <div className="input-container ic1">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            id="email"
            className="input"
            type="email"
          />
          <div className="cut cut-short" />
          <label htmlFor="email" className="placeholder">
            Email
          </label>
        </div>
        <div className="input-container ic2">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            id="password"
            className="input"
            type="password"
          />
          <div className="cut" />
          <label htmlFor="password" className="placeholder">
            Password
          </label>
        </div>
        <button type="text" className="submit">
          Create accaunt
        </button>
        <p>
          Do you have an account? <Link href="/SignIn"> Sign In</Link>
        </p>
      </form>
    </>
  );
}

export default SignUp;
