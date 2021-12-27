import React, { useState } from 'react';
import '../App.css'
import {useDispatch,useSelector} from 'react-redux'
import {CanvasJSChart,CanvasJS} from 'canvasjs-react-charts'
import { fontFamily, fontWeight } from '@mui/system';






const Barchart = ()=>{
   let[dark,setdark] = useState("light2");
   let[dark1,setdark1] = useState("light2");
   
    const new_data = useSelector((state)=> state.alldata.allinfo)
    let newArray = [];
    let countryArray = [];
    if(new_data.datainfo){
      new_data.datainfo.map(i=>{
        if(i.country == ''){
        
          newArray.push({country: 'world',intensity:i.intensity});
       }else{
         newArray.push({country: i.country,intensity:i.intensity});
        countryArray.push(i.country)
       }
     
      });
    }
   
  let uniqueCountry = []
     if(countryArray.length !=0){
           uniqueCountry = countryArray.filter((value, index) => {
            return countryArray.indexOf(value) == index;
         });
      }
      const labels = uniqueCountry;

  let countAndinten = [];
  let countAndlikeh =[];
  let countAndrelev =[];
  let datapoint =[];
  let datapoint2 = [];
  let datapoint3 = [];
  let inten = 0;
  let likeh =0;
  let relev =0;
  let TotalIntensity = 0;
  let TotalLikelihood = 0;
  let TotalRelevance = 0;
     if(uniqueCountry ){
       for(let i =0;i<uniqueCountry.length;i++){
             new_data.datainfo.map((j)=>{
                  if(uniqueCountry[i] == j.country ){
                    inten +=j.intensity;
                    likeh +=j.likelihood;
                    relev +=j.relevance;
                  }
                  TotalIntensity +=j.intensity;
                  TotalLikelihood +=j.likelihood;
                  TotalRelevance += j.relevance;
             })
            countAndinten.push({country:uniqueCountry[i],intensity:inten})
            countAndlikeh.push({countrly:uniqueCountry[i],likelihood:likeh})
            countAndrelev.push({countrly:uniqueCountry[i],relevance:relev})
            datapoint.push({label:uniqueCountry[i],y:inten})
            datapoint2.push({label:uniqueCountry[i],y:likeh})
            datapoint3.push({y:relev,label:uniqueCountry[i]})
         inten =0;
         likeh=0;
         relev =0;
       }
      }
     
      
     
      
		const options1 = {
			animationEnabled: true,
      exportEnabled: true,
      theme: dark,
     
			title: {
				text: "Intensity And Likelihood by country",
        fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
			},
			axisY: {
				title: "Intensity&Likelihood",
				suffix: "Iv&lh"
			},
			data:[
        {
          type: "area",
          name: "Intensity",
          showInLegend: true,
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "intensity #",
          dataPoints: datapoint
        },
        {
          type: "area",
          name: "Likelihood",
          showInLegend: true,
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "Likelihood #",
          dataPoints:datapoint2
        }
        ]
		}
    const options2 = {
			animationEnabled: true,
			exportEnabled: true,
			theme: dark1, // "light1", "dark1", "dark2"
			title:{
				text: "Relevance by country"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: datapoint3
			}]
		}
      const changetheme1=()=>{
        if(dark==="light2"){
          setdark("dark1")
        }else{ setdark("light2")}
      }
      const changetheme2=()=>{
        if(dark1==="light2"){
          setdark1("dark1")
        }else{ setdark1("light2")}
      }

    return(<>
<div className="container">
  <div className="row">
    
    <div className="col-xs-12 col-sm-4">
      <div className="box" id="c1">
        <h2>Total Likelihood <img src="https://www.wealthengine.com/wp-content/uploads/2014/09/likelihood-icon.png" className="imgs" alt='pic'/></h2>
        <h1>{TotalLikelihood/uniqueCountry.length}</h1>
      </div>
    </div>
    
    <div className="col-xs-12 col-sm-4">
      <div className="box" id="c2">
      <h2>Total Intensity <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQQ5ssUbiQqXyO9ueKFP564qPu871RPau0WSoMYxCiwlBSw8eaCJYEtTSh5yIJTNZal4&usqp=CAU" className="imgs" alt='pic'/></h2>
      <h1>{TotalIntensity/uniqueCountry.length}</h1>
      </div>
    </div>
    
    <div className="col-xs-12 col-sm-4">
      <div className="box" id="c3">
   <h2>Total Relevance  <img src="https://cdn3.iconfinder.com/data/icons/business-part-2-1/48/Target-Score-Relevant-Goal-Focus-Aim-1024.png" className="imgs" alt='pic'/></h2>
      <h1>{TotalRelevance/uniqueCountry.length}</h1>
      </div>
    </div>
    
  </div>
  <div className="row">
    <div className="col-xs-12 col-sm-6">
    <div className="box" >
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={changetheme1} />
        <label class="form-check-label" for="flexSwitchCheckChecked"></label>
     </div>
      <CanvasJSChart options = {options1}/>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6">
    <div className="box" >
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={changetheme2} />
          <label class="form-check-label" for="flexSwitchCheckChecked"></label>
        </div>
        <CanvasJSChart options = {options2}/>
        </div>
    </div>
  </div>
</div>



    </>)
}
export default Barchart;