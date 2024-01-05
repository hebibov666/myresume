import React,{useEffect, useRef, useState} from "react";
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeIcon from '@mui/icons-material/Code';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
export default function Body({projects}) {
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
       <a href="mailto:gulmaliyevismayil01@gmail.com">gulmaliyevismayil01@gmail.com</a>
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
      <Accordion className="bg-[#1E1E1F] !important w-[95%]  text-white font-bold border-[1px] border-[#383838]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" className="text-white font-bold  bg-[#1E1E1F] " />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="font-bold">About Me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-start">
          Despite the fact that my higher education is in different direction, my passion and interest for technologies and digital innovation is my main motivation for developing myself in this direction. It's been my special interest for more than 2 years, furthermore, the knowledge and skills I have acquired throughout these years about IT, especially in Frontend Developing, as well as the projects I've worked on played an undeniable role in the process of becoming a specialist. Currently I am working on my skillset even further by utilizing theoretical and practical tools in order to advance in my career.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-[#1E1E1F] w-[95%]  text-white font-bold border-[1px] border-[#383838]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" className="text-white font-bold" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="font-bold">Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="grid grid-col grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[10px]">
          <div className="flex inset items-center gap-[30px] border-[1px] shadow-lg shadow-black border-[#383838] rounded-md p-2">
          <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
            <img src="./html.png" className="w-full h-full"></img>
           </div>
           <h1 className="font-bold ">HTML</h1>
          </div>
          <div className="flex items-center gap-[30px] border-[1px] shadow-lg shadow-black border-[#383838] rounded-md p-2">
          <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
            <img src="./css.png" className="w-full h-full"></img>
           </div>
           <h1 className="font-bold ">CSS</h1>
          </div>
          <div className="flex items-center gap-[30px] border-[1px] shadow-lg shadow-black border-[#383838] rounded-md p-2">
          <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
            <img src="./js.png" className="w-full h-full"></img>
           </div>
           <h1 className="font-bold ">JAVASCRIPT</h1>
          </div>
          <div className="flex items-center gap-[30px] border-[1px] shadow-lg shadow-black border-[#383838] rounded-md p-2">
          <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
            <img src="./react.png" className="w-full h-full"></img>
           </div>
           <h1 className="font-bold ">REACT</h1>
          </div>
          <div className="flex items-center gap-[30px] border-[1px] shadow-lg shadow-black border-[#383838] rounded-md p-2">
          <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
            <img src="./redux.png" className="w-full h-full"></img>
           </div>
           <h1 className="font-bold ">REDUX TOOLKIT</h1>
          </div>
          <div className="flex items-center gap-[30px] border-[1px] shadow-lg shadow-black border-[#383838] rounded-md p-2 ">
          <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
            <img src="./next.png" className="w-full h-full"></img>
           </div>
           <h1 className="font-bold ">NEXT.JS</h1>
          </div>
          <div className="flex items-center gap-[30px] border-[1px] shadow-lg shadow-black border-[#383838] rounded-md p-2">
          <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
            <img src="./tail.png" className="w-full h-full"></img>
           </div>
           <h1 className="font-bold ">TAILWIND</h1>
          </div>
          <div className="flex items-center gap-[30px] border-[1px] shadow-lg shadow-black border-[#383838] rounded-md p-2">
          <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
            <img src="./material.png" className="w-full h-full"></img>
           </div>
           <h1 className="font-bold ">Material Ui</h1>
          </div>
          <div className="flex items-center gap-[30px] border-[1px] shadow-lg shadow-black border-[#383838] rounded-md p-2">
          <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
            <img src="./boot.png" className="w-full h-full"></img>
           </div>
           <h1 className="font-bold ">Bootstrap</h1>
          </div>
          <div className="flex items-center gap-[30px] border-[1px] shadow-lg shadow-black border-[#383838] rounded-md p-2 ">
          <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
            <img src="./styled.png" className="w-full h-full"></img>
           </div>
           <h1 className="font-bold ">Styled components</h1>
          </div>
          <div className="flex items-center gap-[30px] border-[1px] shadow-lg shadow-black border-[#383838] rounded-md p-2 ">
          <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
            <img src="./git.png" className="w-full h-full"></img>
           </div>
           <h1 className="font-bold ">Github</h1>
          </div>
          </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-[#1E1E1F] w-[95%]   text-white font-bold border-[1px] border-[#383838]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" className="text-white font-bold" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="font-bold">Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <div className="flex flex-col">
<div className="flex gap-[10px]">
<div className="relative flex flex-col justify-center w-[30px]">
<div className="w-[3px] h-[460px] bg-yellow-300 rounded-lg mt-[20px]">
</div>
<SchoolOutlinedIcon className="absolute z-[1000] top-[-2%] left-[-50%]  text-yellow-600" fontSize="large"/>
<CodeIcon className="absolute z-[1000] top-[35%] left-[-51%]  text-yellow-600" fontSize="large" />
<CodeIcon className="absolute z-[1000] top-[67%] left-[-51%]  text-yellow-600" fontSize="large" />
</div>
<div className="flex flex-col gap-[50px] items-start text-start">
<div className="flex flex-col gap-[10px] pt-[20px]">
 <h1 className="font-bold text-white text-md">Philology English Interpreter </h1>
 <h2>Baku Eurasian University</h2>
 <h2>2016 - 2020</h2>
</div>
<div className="flex flex-col gap-[10px] pt-[20px]">
 <h1 className="font-bold text-white text-md">Frontend Developer</h1>
 <h2>Self-Study Learning</h2>
 <h2>2021 - 2023</h2>
</div>
<div className="flex flex-col gap-[10px] pt-[20px]">
 <h1 className="font-bold text-white text-md">Frontend Developer</h1>
 <h2>Agile Solutions</h2>
 <h2>2023</h2>
</div>
</div>
</div>
           </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-[#1E1E1F] w-[95%]   text-white font-bold border-[1px] border-[#383838]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" className="text-white font-bold" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="font-bold">Projects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <div className="grid max-[590px]:grid-cols-1 place-items-center max-[914px]:grid-cols-2 grid-cols-3 gap-[10px]">
{projects.map(project=>{
  return <a href={project.link}>
  <div className="w-[230px] h-[270px] border-[3px] border-[#383838] flex flex-col justify-between items-start pb-2 rounded-md">
      <img src={project.img} className="w-full h-[150px] rounded-t-md"></img>
      <h1 className="text-xl pl-4 text-white  ">{project.name}</h1>
      <div className="flex flex-wrap gap-2 pl-4 h-[70px] items-start">
   {project.technologies.map(tech=>{
    return  <p className="bg-[grey] rounded-[5px] w-auto pl-2 pr-2  h-[20px] flex items-center">{tech}</p>
   })}
     </div>
  </div>
  </a>
})}
</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-[#1E1E1F] w-[95%]   text-white font-bold border-[1px] border-[#383838]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" className="text-white font-bold" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="font-bold">Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-start">
         <p> I have worked as a freelancer and developed many functional (Eccommerce, Movie,Car Rental,Classified,Clone projects and etc) projects using the latest frontend technologies. You can check them below from in "projects" section, as well as from GitHub account.</p>
          <br></br>

          <div>
            <h1 className="font-bold text-xl">1. Classified Website</h1>
            <p>The ad site I prepared as a full-stack.<br></br> Technologies used:<br></br>
       Backend:
       Node.js, Express.js, MongoDB, Cloudinary</p>
       <p>Frontend:
  Next.js, Redux toolkit, Material UI, Tailwind css</p>
  <p className="font-bold">Demo link</p>
  <a href="https://classified-ex125v9ud-hebibov666s-projects.vercel.app/">
  https://classified-ex125v9ud-hebibov666s-projects.vercel.app/
  </a>
          </div>

          <div>
            <br></br>
            <h1 className="font-bold text-xl">2. Technology Website</h1>
      <p>A portfolio website I made with React based on Figma design for an external client on the Fiverr platform.</p>
       <p>Frontend:
  React, Tailwind css</p>
  <p className="font-bold">Demo link</p>
  <a href="https://order-project2.vercel.app/">
  https://order-project2.vercel.app/
  </a>
          </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-[#1E1E1F] w-[95%]   text-white font-bold border-[1px] border-[#383838]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" className="text-white font-bold" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="font-bold">Language and Computer Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <div className="flex flex-col gap-[10px]">
           <div className="flex items-center gap-[30px] border-[1px]  border-[#383838] rounded-md p-2">
          <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
            <img src="./flag1.png" className="w-full h-full"></img>
           </div>
           <h1 className="font-bold ">Azerbaijan</h1>
          </div>
          <div className="flex items-center gap-[30px] border-[1px] shadow-lg shadow-black border-[#383838] rounded-md p-2">
          <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
            <img src="./flag2.png" className="w-full h-full"></img>
           </div>
           <h1 className="font-bold ">Turkish</h1>
          </div>
          <div className="flex items-center gap-[30px] border-[1px] shadow-lg shadow-black border-[#383838] rounded-md p-2">
          <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
            <img src="./flag3.png" className="w-full h-full"></img>
           </div>
           <h1 className="font-bold ">English</h1>
          </div>
           </div>
          </Typography>
        </AccordionDetails>
        </Accordion>
      </div>
     </div>
</div>
    )
  }