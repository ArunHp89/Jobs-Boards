import React, { useEffect, useState } from "react";
import Banner from './Banner';
import Container from './common-componets/Container';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import CityData from '../CityData.json'
export default function JobSearch() {

const [getJobs , setGetJobs]=useState([])  
const [jobs, setJobs] = useState();
const [comp , setComp]= useState();
const [cityList , setcityList]= useState(CityData.citylist);
const [clear , setClear] = useState(false);

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

const compHandler=(event)=>{
setComp(event.target.value)
}
const ClickHandler = ()=>{
 const filter= getJobs.filter(item=>{
return    item.name.includes(comp)  || item.title.includes(comp) || item.city.includes(comp)  ;
  })
  setJobs(filter)
}
const CityHandler = (event)=>{

  // setcity(event.target.value);
  const filter= getJobs.filter(item=>{
    return item?.city==event.target.value ;
      })
      setJobs(filter);
}
const CitySearchHandler = (event)=>{
  const filterCityList = cityList.filter(item=>{
    return item?.city.includes(event.target.value);
  })
  setcityList(filterCityList)
  setClear(true)
  
}
const ClearData = ()=>{
  setcityList(CityData.citylist)
  setClear(!clear)
}
const fullTime = (event)=>{
  if(event.target.checked===true){
const fulltimeFilter = jobs.filter(item=>{
  return item.fulltime==='true'
})
return setJobs(fulltimeFilter)
}
else{
  return setJobs(getJobs)
}

}
  return (
  <section className='font-Poppins'>
   <Banner compHandler={compHandler} ClickHandler={ClickHandler}/>
   <Container>
   <div className='flex flex-wrap -mx-4 w-[calc(100% + 32px )]'>
  <LeftBar cityList={cityList} CityHandler={CityHandler} CitySearchHandler={CitySearchHandler} ClearData={ClearData} clear={clear} fullTime={fullTime}/>
 <RightBar getJobs={getJobs} jobs={jobs}/>
   </div>
   </Container>
  </section>
  )
}
