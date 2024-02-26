import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState,useEffect } from 'react';
function Skills({client}){
    const [skills,setSkills]=useState([])
    useEffect(() => {
        const getData=async()=>{
          try{
            const query =await client.fetch(
              `*[_type == "skill"]{
                  _id,
                 title,
                 mainImage{
                    asset -> {
                        _id,
                        url
                    }
                }
              }`
          );
          console.log(query);
          setSkills(query)
           }catch(error){
            console.log(error)
           }
        }
        getData()
      }, []);
    return(
        <Accordion data-aos="fade-up" className="bg-[#1E1E1F] w-[95%]  text-white font-bold border-[1px] border-[#383838]">
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
        {skills.map(skill=>{
            return   <div className="flex inset items-center gap-[30px] border-[1px] shadow-lg shadow-black border-[#383838] rounded-md p-2">
            <div className="w-[50px] h-[50px] border-[1px] border-[#383838] p-2 rounded-[5px] shadow-md shadow-black">
              <img src={skill.mainImage.asset.url} className="w-full h-full"></img>
             </div>
             <h1 className="font-bold ">{skill.title}</h1>
            </div>
        })}
         
          </div>
          </Typography>
        </AccordionDetails>
        </Accordion>
    )
}
export default Skills