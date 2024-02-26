import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState,useEffect } from 'react';
function About({client}){
  const [about,setAbout]=useState([])
    useEffect(() => {
        const getData=async()=>{
          try{
            const query =await client.fetch(
              `*[_type == "about"]{
                  _id,
               description
              }`
          );
          console.log(query);
          setAbout(query)
           }catch(error){
            console.log(error)
           }
        }
        getData()
      },[]);
    return(
        <Accordion data-aos="fade-up" className="bg-[#1E1E1F] !important w-[95%]  text-white font-bold border-[1px] border-[#383838]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" className="text-white font-bold  bg-[#1E1E1F] " />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="font-bold">About Me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-start">
       {about[0]?.description[0].children[0].text}
          </Typography>
        </AccordionDetails>
      </Accordion>
    )
}
export default About