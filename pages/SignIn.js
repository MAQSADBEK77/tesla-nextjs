// import { db } from "@/firebase/fireBaseConfig";
// import { collection, addDoc } from "firebase/firestore";
// import { useState } from "react";

// async function addDataToFireStore(name, surname, email, password, massage) {
//   try {
//     const docRef = await addDoc(collection(db, "massages"), {
//       name: name,
//       surname: surname,
//       email: email,
//       password: password,
//     });
//     console.log("Document written with ID: ", docRef.id);
//     return true;
//   } catch (error) {
//     console.log("Error adding document");
//     return false;
//   }
// }
// function SignIn() {
//   const [name, setName] = useState("");
//   const [surname, setSurname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const added = await addDataToFireStore(name, surname, email, password);
//     if (added) {
//       setName("");
//       setSurname("");
//       setEmail("");
//       setPassword("");
//       alert("Data added to firebase DB!!");
//     }
//   };
//   return (
//     <div className="signUp">
//       <form onChange={(e) => handleSubmit(e)}>
//         <label>
//           <span>Name:</span>
//           <input type="text" placeholder="Maqsadbek" />
//         </label>
//       </form>
//     </div>
//   );
// }

// export default SignIn;
