import { db, register } from "../../../firebaseConfig";
import Register from "./Register";
import {addDoc, collection} from "firebase/firestore"

const RegisterContainer = () => {

  const registrarme = async () => {
    let res = await register({
      email: "pepeperez@gmail.com",
      password: "pepe1234",
    });

    let data = {
      email: "pepeperez@gmail.com",
      displayName: "Pepe perez",
      photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGM36sv-Dti1cTosr965PCRSylbtQP_OWgXA&usqp=CAU",
      rol: "customer",
    };

    const usersCollection = collection(db, "users")
     addDoc(usersCollection, data)

    
  };
  return (
    <>
      <button onClick={registrarme}>Registrarme</button>
      <Register />
    </>
  );
};

export default RegisterContainer;
