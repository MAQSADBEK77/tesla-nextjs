import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/FireBaseConfig";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function SignIn() {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setEmail("");
        setPassword("");
        alert("Login successfully!");
        // route.push("/");
        console.log(data);
      })
      .catch(() => {
        alert("Login error !!! There is no such login password");
      });
  };
  return (
    <>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="title">Tesla login accaunt</div>

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
          Login
        </button>
        <p>
          Does your account not exist? <Link href="/SignUp"> Sign Up</Link>
        </p>
      </form>
    </>
  );
}

export default SignIn;
