import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeIcon from '@mui/icons-material/Code';
function Education(){
    return(
<Accordion data-aos="fade-up" className="bg-[#1E1E1F] w-[95%]   text-white font-bold border-[1px] border-[#383838]">
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
    )
}
export default Education