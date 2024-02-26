import React,{useEffect, useRef, useState} from "react";
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experince";
import Skills from "./Skills";
import About from "./About";
import Languages from "./Languages";
import {createClient} from "@sanity/client"
import AOS from "aos"
import 'aos/dist/aos.css'
import { useForkRef } from "@mui/material";
export default function Body() {
  useEffect(()=>{
    AOS.init()
  })
  const client = createClient({
    projectId: 'igmim9r1',
    dataset: 'production',
    useCdn: false
  });
  var ikon=useRef()
  const [show,setShow]=useState(false)
  const HandleShow=()=>{
    setShow(show===false ? true : false)
  }
    return (
     <div className="bg-[#121212] max-[450px]:flex-col w-[100%] min-h-[100vh] h-[auto] pb-[10px] flex items-center justify-center  box-border gap-[0px]">
     <div className="flex max-[1178px]:flex-col max-[1178px]:items-center gap-[30px] w-full min-h-[100vh]  items-start mt-[30px]  justify-center">
      <div className="flex max-[1178px]:w-[90%] max-[450px]:h-[30%] inset flex-col pb-[30px] shadow-lg shadow-black gap-[20px]  items-center w-[25%] min-h-[90%] bg-[#1E1E1F] pt-[20px] border-[2px] border-[#383838] rounded-[20px] ">
<div className="w-[125px] h-[120px] bg-[#3D3D3E] rounded-[20px] ">
<img className="w-full h-full rounded-[20px]" src="./edit6.jpg"></img>
</div>
<div className="w-80% h-[20px]  border-b-[2px] flex justify-center flex-col text-white mt-[30px] gap-[5px]">
    <h1 className="text-center text-2xl font-bold">Gülmalıyev İsmayıl</h1>
    <p className="w-full p-[5px] bg-[#2B2B2C] rounded-md text-[15px] text-white text-center">Frontend React Developer</p>
</div>
<h1 className="w-[90%] h-[2px] bg-[#3D3D3E] mt-[30px] "></h1>

<KeyboardArrowDownOutlinedIcon onClick={HandleShow} ref={ikon} className="text-white font-bold max-[1178px]:block hidden" fontSize="large"/>
<div className={show===true ? "flex flex-col items-start justify-center gap-[20px] pt-[20px]" : "flex max-[1178px]:hidden flex-col items-start justify-center gap-[20px] pt-[20px]"}>
<div className="flex gap-[10px]">
    <div className="w-[40px] h-[40px] rounded-md shadow-lg  shadow-black bg-[#3D3D3E] flex justify-center items-center text-yellow-300 border-[1px] border-[#383838] border-inset"><PhoneRoundedIcon/>  </div>
    <div className="flex items-center text-[grey]">
       <a href="tel:+994773184121">+994 77 318 41 21</a>
    </div>
</div>
<div className="flex gap-[10px]">
    <div className="w-[40px] h-[40px] rounded-md shadow-lg  shadow-black bg-[#3D3D3E] flex justify-center items-center text-yellow-300 border-[1px] border-[#383838] border-inset"><MailOutlineIcon/>  </div>
    <div className="flex items-center text-[grey]">
       <a href="mailto:gulmaliyevismayil01@gmail.com">gulmaliyevismayil11@gmail.com</a>
    </div>
</div>
<div className="flex gap-[10px]">
    <div className="w-[40px] h-[40px] rounded-md shadow-lg shadow-black bg-[#3D3D3E] flex justify-center items-center text-yellow-300 border-[1px] border-[#383838] border-inset"><LocationOnOutlinedIcon/>  </div>
    <div className="flex items-center text-[grey]">
       <h1>Baku, Azerbaijan</h1>
    </div>
</div>
<div className="flex gap-[10px]">
    <div className="w-[40px] h-[40px] rounded-md shadow-lg shadow-black bg-[#3D3D3E] flex justify-center items-center text-yellow-300 border-[1px] border-[#383838] border-inset"><GitHubIcon/>  </div>
    <div className="flex items-center text-[grey]">
    <a href="https://github.com/ismayil0999" className="flex flex-col items-center gap-2">Github</a>
    </div>
</div>
<div className="flex gap-[10px]">
    <div className="w-[40px] h-[40px] rounded-md shadow-lg shadow-black bg-[#3D3D3E] flex justify-center items-center text-yellow-300 border-[1px] border-[#383838] border-inset"><LinkedInIcon/>  </div>
    <div className="flex items-center text-[grey]">
    <a href="https://www.linkedin.com/mwlite/in/ismayil-hebibov-308691225" className="flex flex-col items-center gap-2">Linkedin</a>
    </div>
</div>
</div>
      </div>
      <div className="pt-[20px] max-[1178px]:w-[90%]  pb-[85px] w-[60%] outset  flex flex-col items-center justify-start gap-[40px] shadow-lg shadow-black min-h-[90%] bg-[#1E1E1F] border-[2px] border-[#383838] rounded-[20px]">
  <About client={client}/>
      <Skills client={client}/>
      <Projects client={client}/>
    <Education/>
    <Experience client={client}/>
  <Languages/>
      </div>
     </div>
</div>
    )
  }