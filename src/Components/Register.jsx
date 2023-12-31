// import { useState } from "react";
// import { signup } from "../reducer/Actions/UserAction";
// import { useNavigate } from "react-router-dom";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import LockIcon from "@mui/icons-material/Lock";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import { useDispatch } from "react-redux";
// const Register = () => {
//   const dispatch=useDispatch();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [name, setName] = useState("");
//   const [gender, setGender] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [dob, setDob] = useState("");
//   const [biodata, setBiodata] = useState("");
//   const [photo, setPhoto] = useState(null);

//   const handleProfilePictureChange = (e) => {
//     const file = e.target.files[0];
//     setPhoto(URL.createObjectURL(file));
//   };

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleDobChange = (e) => {
//     setDob(e.target.value);
//   };

//   const handleBiodataChange = (e) => {
//     setBiodata(e.target.value);
//   };

//   const handleNamechange = (e) => {
//     setName(e.target.value);
//   };

//   const handleGenderChange = (e) => {
//     setGender(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent form submission

//     dispatch(signup(username, name, gender, email, password, dob, biodata));
//     console.log("registered");
//   };

//   const handleNext = (e) => {
//     e.preventDefault();
//       setCurrentSlide(1);

//   };
//   return (
//     <div className="carousel" style={{ height: "40vh" }}>
//       <div className="carousel-inner">
//         <div className={`carousel-item ${currentSlide === 0 ? "active" : ""}`}>
//           <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-violet-400 to-fuchfrom-violet-400 to-fuchsia-100">
//             <div className="max-w-md mx-auto p-6 bg-gradient-to-b from-violet-400 to-fuchsia-200 rounded-xl shadow-2xl">
//               <h1 className="text-2xl font-mono text-center pb-8">
//                 Create Your Account
//               </h1>
//               <form onSubmit={handleNext}>
//                 <div className="relative mb-4">
//                   <div className="absolute flex items-center justify-center h-10 w-10 bg-white rounded-lg">
//                     <AccountCircleIcon />
//                   </div>
//                   <input
//                     type="text"
//                     name="name"
//                     className="pl-12 h-10 w-full rounded-lg"
//                     placeholder="Enter username"
//                     value={username}
//                     onChange={handleUsernameChange}
//                     required
//                   />
//                 </div>
//                 <div className="relative mb-4">
//                   <div className="absolute flex items-center justify-center h-10 w-10 bg-white rounded-lg">
//                     <LockIcon />
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     className="pl-12 h-10 w-full rounded-lg"
//                     placeholder="Enter Email id"
//                     value={email}
//                     onChange={handleEmailChange}
//                     required
//                   />
//                 </div>
//                 <div className="relative mb-4">
//                   <div className="absolute flex items-center justify-center h-10 w-10 bg-white rounded-lg">
//                     <LockIcon />
//                   </div>
//                   <input
//                     type="password"
//                     name="password"
//                     className="pl-12 h-10 w-full rounded-lg"
//                     placeholder="Enter password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                     required
//                   />
//                 </div>
//                 <div className="text-black">
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   value={name}
//                   onChange={handleNamechange}
//                   placeholder="Your Full Name"
//                   className="px-3 w-full border-2 border-fuchsia-800 h-9 rounded-xl mb-3"
//                   required
//                 />
//               </div>
//                 <div className="text-center">
//                   <button
//                     type="submit"
//                     className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-400 hover:from-fuchsia-200 hover:to-purple-500 text-white"
//                   >
//                     <ArrowForwardIcon />
//                   </button>
//                 </div>
//               </form>
//               <div className="mt-8 text-center">
//                 <p>Already have an account?</p>
//                 <button className="underline" onClick={() => navigate(-1)}>
//                   Click here
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={`carousel-item ${currentSlide === 1 ? "active" : ""}`}>
//           {/* <img
//             src="Back-End/pic/IMG_3943.jpg"
//             className="d-block w-100 bg-purple-300 h-64"
//             alt="Slide 2"
//           /> */}
//           <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-violet-400 to-fuchsia-100">
//             <form
//               action="get"
//               className="max-w-md mx-auto p-6 bg-gradient-to-b from-violet-400 via-purple-200 to-fuchsia-100 rounded-xl shadow-lg"
//             >
//               <div className="flex items-center justify-center">
//                 <div className="relative rounded-full h-32 w-32 bg-gradient-to-r from-violet-700 via-purple-400 to-fuchsia-500 p-1 hover:bg-gradient-to-b from-violet-700 via-purple-400 to-fuchsia-500 hover:delay-1000">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     {photo ? (
//                       <img
//                         src={photo}
//                         alt="Profile"
//                         className="rounded-full h-28 w-28"
//                       />
//                     ) : (
//                       <button className="rounded-full bg-slate-100 h-28 w-28">
//                         <AddPhotoAlternateIcon />
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <input
//                 type="file"
//                 className="ml-4 mt-6 text-sm bg-transparent"
//                 onChange={handleProfilePictureChange}
//               />

//               <div className="mt-8">
//                 <div className="bg-white border-fuchsia-800 border-2 px-3 py-1 rounded-xl h-8">
//                   <label htmlFor="gender" className="text-black">
//                     Gender:
//                   </label>
//                   <select
//                     id="gender"
//                     name="gender"
//                     value={gender}
//                     onChange={handleGenderChange}
//                     className="absolute"
//                     required
//                   >
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//                 <br />
//                 <div className="bg-white mt-2 border-fuchsia-800 border-2 px-2 py-1 rounded-xl h-8">
//                   <label htmlFor="dob" className="text-black">
//                     DOB
//                   </label>
//                   <input
//                     type="date"
//                     name=""
//                     id=""
//                     value={dob}
//                     onChange={handleDobChange}
//                     className="bg-transparent absolute border-1 w-24 ml-3 rounded-xl"
//                   />
//                 </div>
//                 <div className="bg-white mt-4 border-fuchsia-800 border-2 rounded-xl">
//                   <div className="card rounded-xl">
//                     <div className="card-header"
//                     value={biodata}
//                     onChange={handleBiodataChange}
//                     >BioData</div>
//                     <ul className="list-group list-group-flush">
//                       <li className="list-group-item underline">
//                         <input
//                           type="text"
//                           className="w-full h-8 border-1 pl-1"
//                         />
//                       </li>
//                       <li className="list-group-item underline">
//                         <input
//                           type="text"
//                           className="w-full h-8 border-1 pl-1"
//                         />
//                       </li>
//                       <li className="list-group-item underline">
//                         <input
//                           type="text"
//                           className="w-full h-8 border-1 pl-1"
//                         />
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="flex justify-center mt-8">
//                   <input
//                     type="submit"
//                     className="w-36 h-12 rounded-full bg-gradient-to-l from-fuchsia-300 to-purple-600 hover:from-fuchsia-200 hover:to-purple-400 text-white font-bold"
//                     value="Submit"
//                     onClick={handleSubmit}
//                   />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Register;

import { useState } from "react";
import { signup } from "../reducer/Actions/UserAction";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useDispatch } from "react-redux";
import { useMessageAndErrorUser } from "../Utils/Hooks";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [biodata, setBiodata] = useState({});
  
  const [photo, setPhoto] = useState(null);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleBioLineChange = (e, lineIndex) => {
    const updatedBiodata = { ...biodata };
    updatedBiodata[`line${lineIndex + 1}`] = e.target.value;
    setBiodata(updatedBiodata);
  };
  

  const handleNamechange = (e) => {
    setName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loading = useMessageAndErrorUser(navigation, dispatch, "profile");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    const formData = new FormData();
    formData.append("username", username);
    formData.append("name", name);
    formData.append("gender", gender);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("dob", dob);
    console.log(biodata);
    formData.append("biodata", biodata);
    formData.append("file", photo);

    dispatch(signup(formData));
    console.log("registered");
  };

  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-mono text-center pb-8">
          Create Your Account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <div className="absolute flex items-center justify-center h-10 w-10 bg-white rounded-lg">
              <AccountCircleIcon />
            </div>
            <input
              type="text"
              name="name"
              className="pl-12 h-10 w-full rounded-lg"
              placeholder="Enter username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="relative mb-4">
            <div className="absolute flex items-center justify-center h-10 w-10 bg-white rounded-lg">
              <LockIcon />
            </div>
            <input
              type="email"
              name="email"
              className="pl-12 h-10 w-full rounded-lg"
              placeholder="Enter Email id"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="relative mb-4">
            <div className="absolute flex items-center justify-center h-10 w-10 bg-white rounded-lg">
              <LockIcon />
            </div>
            <input
              type="password"
              name="password"
              className="pl-12 h-10 w-full rounded-lg"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="text-black">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleNamechange}
              placeholder="Your Full Name"
              className="px-3 w-full border-2 border-fuchsia-800 h-9 rounded-xl mb-3"
              required
            />
          </div>
        </form>

        <div className="mt-8">
          <form action="get">
            <div className="flex items-center justify-center">
              <div className="relative rounded-full h-32 w-32 bg-gradient-to-r from-violet-700 via-purple-400  hover:delay-1000">
                <div className="absolute inset-0 flex items-center justify-center">
                  {photo ? (
                    <img
                      src={photo}
                      alt="Profile"
                      className="rounded-full h-28 w-28"
                    />
                  ) : (
                    <button className="rounded-full bg-slate-100 h-28 w-28">
                      <AddPhotoAlternateIcon />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <input
              type="file"
              className="ml-4 mt-6 text-sm bg-transparent"
              onChange={handleProfilePictureChange}
            />

            <div className="mt-8">
              <div className="bg-white border-fuchsia-800 border-2 px-3 py-1 rounded-xl h-8 max-h-32 overflow-y-auto">
                <label htmlFor="gender" className="text-black">
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={handleGenderChange}
                  className=""
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <br />
              <div className="bg-white mt-2 border-fuchsia-800 border-2 px-2 py-1 rounded-xl h-8 max-h-32 overflow-y-auto">
                <label htmlFor="dob" className="text-black">
                  DOB
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  value={dob}
                  onChange={handleDobChange}
                  className="bg-transparent border-1 w-24 ml-3 rounded-xl"
                />
              </div>

              {/* <div className="bg-white mt-4 border-fuchsia-800 border-2 rounded-xl">
                <div className="card rounded-xl">
                  <div className="card-header">BioData</div>
                  <ul className="list-group list-group-flush">
                    {[1, 2, 3, 4, 5].map((lineNumber) => (
                      <li
                        className="list-group-item underline"
                        key={lineNumber}
                      >
                        <input
                          type="text"
                          className="w-full h-8 border-1 pl-1"
                          onChange={(e) =>
                            handleBioLineChange(e, lineNumber - 1)
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
              <div className="flex justify-center mt-8">
                <input
                  type="submit"
                  className="w-36 mt-10 h-12 rounded-full bg-gradient-to-l from-fuchsia-300 to-purple-600 hover:from-fuchsia-200 hover:to-purple-400 text-white font-bold"
                  value="Submit"
                  onClick={handleSubmit}
                />
              </div>
              <div className="mt-8 text-center">
                <p>Already have an account?</p>
                <button className="underline" onClick={() => navigate(-1)}>
                  Click here
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
