import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState,useEffect } from 'react';
function Experience({client}) {
  const [experiences,setExperiences]=useState([])
    useEffect(() => {
        const getData=async()=>{
          try{
            const query =await client.fetch(
              `*[_type == "experience"]{
                  _id,
                 name,
                 date,
                 description,
              }`
          );
          console.log(query);
          setExperiences(query)
           }catch(error){
            console.log(error)
           }
        }
        getData()
      }, []);
  return (
    <Accordion data-aos="fade-up" className="bg-[#1E1E1F] w-[95%]   text-white font-bold border-[1px] border-[#383838]">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon fontSize="large" className="text-white font-bold" />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography className="font-bold">Experience</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="text-start flex flex-col gap-[20px]">

          <div className='bg-[#383838] rounded-[10px] p-4 flex flex-col'>
          <p> I have worked as a freelancer and developed many functional (Eccommerce, Movie,Car Rental,Classified,Clone projects and etc) projects using the latest frontend technologies. You can check them below from in <b className='text-blue-400 font-bold'>Projects</b> section, as well as from GitHub account.</p>
             </div> 
        {experiences.map(experience=>{
          return   <div className='bg-[#383838] rounded-[10px] flex flex-col gap-[10px] pl-2 p-4'> 
          <h1 className="font-bold ">{experience.name}</h1> 
          <h1>{experience.date}</h1>
          <p>{experience.description[0].children.map(text=>{
            return <span>{text.text}</span>
          })}</p>
       </div>
        })}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
export default Experience