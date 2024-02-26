import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Languages(){
    return(
        <Accordion data-aos="fade-up" className="bg-[#1E1E1F] w-[95%]   text-white font-bold border-[1px] border-[#383838]">
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
    )
}
export default Languages