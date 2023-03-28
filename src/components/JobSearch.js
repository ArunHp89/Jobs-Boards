import React, { useEffect, useState } from "react";
import Banner from './Banner';
import Container from './common-componets/Container';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import CityData from '../CityData.json'
export default function JobSearch() {
const [getJobs , setGetJobs]=useState([])  
const [jobs, setJobs] = useState(getJobs?.length>=1?getJobs:getJobs);
const [comp , setComp]= useState();
const [cityList , setcityList]= useState(CityData.citylist);
const [clear , setClear] = useState(false);
const [city , setcity]= useState();
const fetchData = () => {
  return fetch("https://apis.camillerakoto.fr/fakejobs/jobs")
        .then((response) => response.json())
        .then((data) => setGetJobs(data));
}

useEffect(() => {
  fetchData();
},[comp , city])

const compHandler=(event)=>{
setComp(event.target.value)
}
const ClickHandler = ()=>{
 const filter= jobs.filter(item=>{
return    item.name.includes(comp)  || item.title.includes(comp) ;
  })
  setJobs(filter)
}
const CityHandler = (event)=>{
  setcity(event.target.value);
  const filter= jobs.filter(item=>{
    return item?.city==city ;
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
 <RightBar jobs={jobs}/>
   </div>
   </Container>
  </section>
  )
}
