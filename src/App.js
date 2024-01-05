import './App.css';
import Body from './Body';

function App() {
  const projects=[
    {
      name:"Classified website",
      technologies:["Node.js","MongoDB","Next.js","Tailwind","Material UI","Cloudinary"],
      img:"./axtar.png",
      link:"https://classified-ex125v9ud-hebibov666s-projects.vercel.app/"
    },
    {
      name:"Ecommerce website",
      technologies:["React.js","Redux Toolkit","Tailwind","Material UI"],
      img:"./ecommerce.png",
      link:"https://ecommerce-with-react-tailwind.vercel.app/"
    },
    {
      name:"Movie website",
      technologies:["React","Css"],
      img:"./movie.png",
   link:"https://movie2-project-with-redux-toolkit.vercel.app/"
    },
    {
      name:"Telegram clone",
      technologies:["React","Tailwind","Redux toolkit"],
      img:"./telegram.png",
   link:"https://telegram-clone-tailwind-css-react.vercel.app/"
    },
    {
      name:"Movie website",
      technologies:["React","Css","TMDB Api"],
      img:"./movie2.png",
   link:"https://movieproject-pearl.vercel.app/"
    },
    {
      name:"Classified website",
      technologies:["React","Css"],
      img:"./classified.png",
   link:"https://react-proyekt-xxar.vercel.app/"
    },
    {
      name:"Ecommerce website",
      technologies:["Html","Css","Javascript"],
      img:"./ecommerce3.png",
   link:"https://ecommerce2-mmv2.vercel.app/"
    },
    {
      name:"Whatsapp Clone",
      technologies:["Html","Css","Javascript"],
      img:"./whatsapp.png",
   link:"https://whatsapp-ten-umber.vercel.app/"
    },
    {
      name:"Instagram Login Page",
      technologies:["Html","Css","Javascript"],
      img:"./instagram.png",
   link:"https://youraccount.vercel.app/"
    }
  ]
  return (
    <div className="App">
     <Body projects={projects}/>
    </div>
  );
}

export default App;
