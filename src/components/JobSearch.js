import React, { useEffect, useState } from "react";
import Banner from './Banner';
import Container from './common-componets/Container';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import CityData from '../CityData.json'
import Popup from "./common-componets/Popup";
export default function JobSearch({getJobs , setGetJobs, setJobs , jobs}) {


const [comp , setComp]= useState();
const [cityList , setcityList]= useState(CityData.citylist);
const [clear , setClear] = useState(false);
const [alert , setAlert] =useState(false);


const compHandler=(event)=>{
setComp(event.target.value)
}
const ClickHandler = ()=>{
 const filter= getJobs.filter(item=>{
return    item.name.includes(comp)  || item.title.includes(comp) || item.city.includes(comp)  ;
  })
  if(filter.length>= 1){
    setJobs(filter);
  }else{
    // alert('No job found with' + ' ' + comp + ' ' + 'search' )
   setAlert(true);
  }
  console.log(comp);
  // setJobs(filter)
  
}
const CityHandler = (event)=>{

  // setcity(event.target.value);
  const filter= getJobs.filter(item=>{
    return item?.city==event.target.value ;
      })
      setJobs(filter);
      setComp('')
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
  return item.fulltime==='true';
})
return setJobs(fulltimeFilter);
// return console.log(fulltimeFilter);
}
else{
  return setJobs(getJobs);
}

}
  return (
  <section className='font-Poppins'>
   <Banner comp={comp} compHandler={compHandler} ClickHandler={ClickHandler} alert={alert} setAlert={setAlert  }/>
   <Container>
   <div className='flex flex-wrap -mx-4 w-[calc(100% + 32px )]'>
  <LeftBar cityList={cityList} CityHandler={CityHandler} CitySearchHandler={CitySearchHandler} ClearData={ClearData} clear={clear} fullTime={fullTime}/>
 <RightBar getJobs={getJobs} jobs={jobs}/>
   </div>
   </Container>
  </section>
  )
}
