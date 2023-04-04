import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import './App.css';
import JobSearch from './components/JobSearch';
import Layput from './components/common-componets/Layput';
import SingleJobPage from './components/SingleJobPage';

function App() {
  const [getJobs , setGetJobs]=useState([])  
const [jobs, setJobs] = useState();
const fetchData = async () =>  {

  // const data = await  fetch("https://apis.camillerakoto.fr/fakejobs/jobs")
  //     .then((response) => response.json())
  //     .then((data) => setGetJobs(data));
  
  const response = await fetch('https://apis.camillerakoto.fr/fakejobs/jobs');
  const data = await response.json();
      setGetJobs(data)  
      setJobs(data);

}

useEffect(() => {
fetchData();
},[])
  return (


<Layput>
<Routes>
<Route path='/' element={<JobSearch getJobs={getJobs} setGetJobs={setGetJobs} jobs={jobs} setJobs={setJobs} />} />
<Route path='/:id' element={<SingleJobPage getJobs={getJobs} jobs={jobs} setJobs={setJobs}/>} />
<Route path="*" element={'PageNotFound'} />
</Routes>
</Layput>

  );
}

export default App;
