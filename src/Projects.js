import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {createClient} from "@sanity/client"
import { useEffect, useState } from 'react';
function Projects({client}){
const [projects,setProjects]=useState([])
    useEffect(() => {
        const getData=async()=>{
          try{
            const query =await client.fetch(
              `*[_type == "post"]{
                  _id,
                 title,
                 tags,
                 url,
                 mainImage{
                    asset -> {
                        _id,
                        url
                    }
                }
              }`
          );
          console.log(query);
          setProjects(query)
           }catch(error){
            console.log(error)
           }
        }
        getData()
      }, []);
    return(
        <Accordion data-aos="fade-up" id="projects" className="bg-[#1E1E1F] w-[95%]   text-white font-bold border-[1px] border-[#383838]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" className="text-white font-bold" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="font-bold">Projects</Typography>
        </AccordionSummary>
        <AccordionDetails>
 <div className='grid w-full grid-cols-2 max-[470px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[10px] p-[10px]'>
 {projects.map(project=>{
        return <a href={project.url} className='w-full shadow-sm shadow-[#A8A8A8] h-auto pb-[10px] flex flex-col gap-[10px]'>
            <div className='w-full h-[160px] max-[470px]:h-[200px]'>
                <img src={project.mainImage.asset.url} className='w-full h-full'></img>
            </div>
            <div className='pl-2 flex flex-col gap-[10px] items-start'>
                <h1 className='text-white font-bold text-xl'>{project.title}</h1>
               <div className='flex flex-wrap gap-[5px]'>
               {project.tags.map((tag)=>{
                    return <span className='flex items-center  justify-start bg-[#A8A8A8] text-black w-auto pl-2 pr-2 rounded-[3px] h-[25px] font-[400]'>{tag}</span>
                })}
               </div>
            </div>
        </a>
      })}
 </div>
        </AccordionDetails>
      </Accordion>
    )
}
export default Projects