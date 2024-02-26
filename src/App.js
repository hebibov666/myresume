import { useEffect, useState } from 'react';
import './App.css';
import Body from './Body';
import {createClient} from "@sanity/client"
import {request} from "graphql-request"
function App() {
  const client = createClient({
    projectId: 'igmim9r1',
    dataset: 'production', // Opsiyonel, yetki gerektiriyorsa
    useCdn: false // Opsiyonel, güncel veri almak için
  });


  return (
    <div className="App">
     <Body/>
    </div>
  );
}

export default App;
