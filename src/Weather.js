import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Weather.css'
import {AiFillCloud} from 'react-icons/ai'
import {FaStreetView} from 'react-icons/fa';
import {IoIosSunny} from 'react-icons/io';
const Weather =() =>
{


    const [citysearch , setcitysearch] =useState("Pune");
    const [loading, setloading] = useState(true);
    const[ citynot,setcitynot] =useState(null);
    // const [Country , setCountry] =useState(null);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let day = days[d.getDay()];
    let month = d.getMonth() +1;
    let year = d.getFullYear();
    var daycal= d.getDate();


    const TIM =()=>
    {
        var time = new Date();
        let tim = time.toLocaleTimeString();

        return(
            <p className='time'>{tim}</p>
        )
    }


     const change=(e)=>
     {
         setcitysearch(e.target.value);
     }
   

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${citysearch}&units=metric&appid=bc0443ff845724f3001aef75bf138f82`;
    const fetchweather = async() =>
    {
       try{
       const res = await fetch(`${api}`);
       const data = await res.json();
       console.log(data.main);
       console.log(data);
    //    setCountry(data.sys);
       setcitynot(data.main)
       console.log(data.sys)

    
       
    }catch(error)
        {
           console.log("city not found   " + error)
        }
       
    }

    useEffect(()=>
    {

            fetchweather();
            setloading(false)
     
    },[citysearch]);



//     if(loading)
//    {
//     return(
//         <div>
//             <h1>Data is loading</h1>
//         </div>
//     )
//    }

//    else{

 

 
   

    return(


        <div className='main1'>
        <div className='main2'>
            <div className='main3'>
              
        <input onChange={change} type="text " placeholder='enter city name'/>

        {!citynot ? (<p>Data not found</p>) : (
            <div>
                  <div >
             {citynot.temp>+30? <h1 className='sun'> <IoIosSunny/></h1> :  <h1 className='cloicon'><AiFillCloud/></h1> }
                </div>
            <h2 className='cityname'> {citysearch}</h2>
             <div className='tempmain'>
             <h1 className='tempp'><FaStreetView/></h1>
             <h1 className='tempp'>  {citynot.temp}*Cel </h1>
             </div>
             <h3 className='minmaxtemp'> Min : {citynot.temp_min}*Cel   |   Max :  {citynot.temp_max}*Cel  </h3>
             
             <div className='datetime'>
             <p className='day'>{day}</p> 
             {/* <br/> */}
             <div className='datetime2'>
             <p className='date'>{daycal}-{month}-{year}</p>
              {TIM()}
              </div>
              </div>

             {/* <h3> COUNTRY : {Country.country}</h3> */}
             </div>
           
        
      
        )}
            </div>
        </div>
    </div>
     
        
    )
    
    // }
 }




export default Weather;