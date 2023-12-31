// import HomeIcon from "@mui/icons-material/Home";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import PostAddIcon from "@mui/icons-material/PostAdd";
// import MovieIcon from "@mui/icons-material/Movie";
// import WorkIcon from "@mui/icons-material/Work";
// import  {useNavigate} from "react-router-dom";
// // import react from "react";

// function Footer() {
//     const navigate=useNavigate();
//   return (
//     <>
//       {/* <div className="line">
//           </div> */}
// <div className="absolute bottom-0 h-12 bg-black w-[inherit]">
//       <hr
//         style={{
//           background: 'black',
//           color: 'black',
//           borderColor: 'black',
//           height: '3px',
//         }}
//       />
//         <button className="ml-5 mx-4 h-10" onClick={()=>navigate("/home") }>
//           <HomeIcon fontSize="large" />
//       </button>
//         <button className="mx-4"  onClick={()=>navigate("/opportunity") }>
//           <WorkIcon fontSize="large" />
//         </button>
//         <button className="mx-4"  onClick={()=>navigate("/post") }>
//           <PostAddIcon fontSize="large"/>
//         </button>
//         <button className="mx-4"  onClick={()=>navigate("/refreshment") }>
//           <MovieIcon fontSize="large"/>
//         </button>
//         <button className="mx-4"  onClick={()=>navigate("/profile") }>
//           <AccountBoxIcon fontSize="large"/>
//         </button>
//       </div>
//     </>
//   );
// }

// export default Footer;
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MovieIcon from "@mui/icons-material/Movie";
import WorkIcon from "@mui/icons-material/Work";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <div className="line"></div>
      <div className="footer bg-black flex justify-between items-center px-4 py-2">
        <button className="footer-button" onClick={() => navigate("/home")}>
          <HomeIcon className="text-white" fontSize="large" />
        </button>
        <button className="footer-button" onClick={() => navigate("/opportunity")}>
          <WorkIcon className="text-white" fontSize="large" />
        </button>
        <button className="footer-button" onClick={() => navigate("/post")}>
          <PostAddIcon className="text-white" fontSize="large" />
        </button>
        <button className="footer-button" onClick={() => navigate("/refreshment")}>
          <MovieIcon className="text-white" fontSize="large" />
        </button>
        <button className="footer-button" onClick={() => navigate("/profile")}>
          <AccountBoxIcon className="text-white" fontSize="large" />
        </button>
      </div>
    </>
  );
}

export default Footer;

