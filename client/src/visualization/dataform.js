import React,{useState} from 'react'
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Dataform=()=>{
  const[message,setmessage] = useState(true);
	const[loading,setloading] = useState(false)
	const[successmessage,setsuccessmessage] = useState(true);
  const[data,setdata] = useState({
	end_year:'', intensity:'', sector:'', topic:'',insight:'',url:'',region:'',start_year:'',impact:'',added:'',published:'',
   country:'',relevance:'',pestle:'',source:'',likelihood:'',title:''
	});
  let name,value;
  const dataInput =(e)=>{
      name = e.target.name;
      value = e.target.value;
      setdata({...data,[name]:value})
  }
  const AddData =async(e)=>{
    setloading(true)
    e.preventDefault();
    const{end_year,intensity,sector,topic,insight,url,region,start_year,impact,added,published,country,relevance,pestle,source,likelihood,title}=data;
    console.log(data)
    try{
      // const response = await fetch('/getnewdata',{
			// 	method:'POST',
			// 	headers:{
			// 		"Content-Type":"application/json"
			// 	},
			// 	body:JSON.stringify({
      //     end_year,intensity,sector,topic,insight,url,region,start_year,impact,added,published,country,relevance,pestle,source,likelihood,title
			// 	})
			// });
      const resp = await axios.post('/api/getnewdata',{end_year,intensity,sector,topic,insight,url,region,start_year,impact,added,published,country,relevance,pestle,source,likelihood,title
      });
      const getdata = await resp;
      console.log(getdata)
         setloading(false)
			 
             if(getdata.status === 200 ){
              toast.success(getdata.msg,{position:'top-center'})
              }else{
                toast.error(getdata.msg,{position:'top-right'})
              }
    }catch(err){
      console.log(err)
    }
  }
 
    return(<>
          <form>
        
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label for="end_year">End Year</label>
          <input type="number" className="form-control" name="end_year" placeholder="" id="end_year"
            value={data.end_year}  onChange={dataInput}
          />
        </div>
      </div>
   

      <div className="col-md-6">
        <div className="form-group">
          <label for="intensity">Intensity *</label>
          <input type="number" className="form-control" name="intensity" placeholder="" id="intensity"
            value={data.intensity} onChange={dataInput}
          />
        </div>
      </div>
     
    </div>


    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label for="sector">Sector</label>
          <select className="form-select" aria-label="Default select example" id="sector" value={data.sector} onChange={dataInput} name="sector" >
             
              <option value="Energy">Energy</option>
              <option value="Enviroment">Enviroment</option>
              <option value="Goverment">Goverment</option>
              <option value="Aeropace & defence">Aeropace & defence</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Retail">Retail</option>
              <option value="Finacial Services">Finacial Services</option>
              <option value="Support Services">Support Services</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Healthcare">Healthcare</option>
</select>
        </div>


      </div>
     

      <div className="col-md-6">

        <div className="form-group">
          <label for="topic">Topic</label>
          <input type="text" className="form-control" id="topic" name="topic" placeholder="topic"
             value={data.topic} onChange={dataInput}
          />
        </div>
      </div>
     
    </div>
    


    <div className="row">
      <div className="col-md-6">

        <div className="form-group">
          <label for="insight">Insight</label>
          <input type="text" className="form-control" id="insight" name="insight" placeholder="insight" 
             value={data.insight} onChange={dataInput}
          />
        </div>
      </div>
     

      <div className="col-md-6">
        <div className="form-group">
          <label for="url">Url <small>Please include http://</small></label>
          <input type="url" className="form-control" id="url" name="url" placeholder="url" 
             value={data.url} onChange={dataInput}
          />
        </div>

      </div>
     
    </div>

    <div className="row">
      <div className="col-md-6">

        <div className="form-group">
          <label for="region">Region</label>
          <input type="text" className="form-control" id="region" name="region" placeholder="region"
             value={data.region} onChange={dataInput}
          />
        </div>
      </div>
     

      <div className="col-md-6">
        <div className="form-group">
          <label for="start_year">Start Year</label>
          <input type="number" className="form-control" id="start_year" name="start_year" placeholder="start_year" 
             value={data.start_year} onChange={dataInput}
          />
        </div>

      </div>
     
    </div>

    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label for="impact">Impact</label>
          <input type="text" className="form-control" id="impact" name="impact" placeholder="impact" 
             value={data.impact}  onChange={dataInput}
          />
        </div>
      </div>
     

      <div className="col-md-6">
        <div className="form-group">
          <label for="added">Added</label>
          <input type="date" className="form-control" id="added" name="added" placeholder="added" 
             value={data.added}  onChange={dataInput}
          />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label for="published">Published</label>
          <input type="date" className="form-control" id="published" name="published" placeholder="published" 
             value={data.published} onChange={dataInput}
          />
        </div>
      </div>
     

      <div className="col-md-6">
        <div className="form-group">
          <label for="country">country</label>
          <input type="text" className="form-control" id="country" name="country" placeholder="country" 
             value={data.country} onChange={dataInput}
          />
        </div>
      </div>
    </div>
 
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label for="relevance">Relevance *</label>
          <input type="number" className="form-control" id="relevance" name="relevance" placeholder="relevance" 
             value={data.relevance}  onChange={dataInput}
          />
        </div>
      </div>
     

      <div className="col-md-6">
        <div className="form-group">
          <label for="pestle">pestle</label>
          <input type="text" className="form-control" id="pestle" name="pestle" placeholder="pestle" 
             value={data.pestle} onChange={dataInput}
          />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label for="source">Source</label>
          <input type="text" className="form-control" id="source" name="source" placeholder="source" 
             value={data.source} onChange={dataInput}
          />
        </div>
      </div>
     

      <div className="col-md-6">
        <div className="form-group">
          <label for="likelihood">Likelihood *</label>
          <input type="number" className="form-control" id="likelihood" name="likelihood" placeholder="likelihood" 
             value={data.likelihood}  onChange={dataInput}
          />
        </div>
      </div>
    </div>


    <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Title *</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" name="title" rows="3" 
     value={data.title}  onChange={dataInput}
  />
</div>
    
    <button type="submit" className="btn btn-primary" onClick={AddData} >
    {loading ? <div><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
		                   <span > Loading...</span></div>:<span>Submit</span>
						  }
    </button>
  </form><ToastContainer/> 
    </>)
}
export default Dataform