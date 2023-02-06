import React,{useState} from 'react'
import "./CSS/TerminalPage.css"
import Header from '../Components/Header';
import TableTerminalPage from '../Components/Table_TerminalPage';
import { useFormik } from 'formik';
import { AB_TerminalSchema } from '../Validations/AbTerminal';
import { useNavigate } from 'react-router-dom';


 const initialValues={
      Frame_No: "",
      Engine_No: "",
      Remarks: "",
    }




const TerminalPage = () => {
  const [terminalData,setterminalData]=useState();
// const [terminalData,setterminalData]=useState();
const Navigate = useNavigate();
  const { values,errors,touched,handleBlur,handleChange,handleSubmit, } = useFormik({
    initialValues,
    validationSchema:AB_TerminalSchema,
   
    onSubmit:(values,{setSubmitting,resetForm}) => {

     
      Navigate("/");
      setterminalData(values);
      setSubmitting(false);
      resetForm({values:''});
     document.getElementById("formIndex1").focus();
    }
  })
  // console.log(terminalData)
  

  const ChangeTab=()=>{
    let val1=document.getElementById("formIndex1").value;
    
    let c=document.getElementById("formIndex3")
   
    if(val1.length>10){

      // return setTimeout(,2000);
      setTimeout(function(){
        c.focus()
    }, 4000);
    }
  }

  // const ChangeTab2=()=>{
  //   let val2=document.getElementById("formIndex2").value;
  //   let c=document.getElementById("formIndex3")
  //   if(val2.length>3){
  //   return c.focus()
  // }  }

  const ChangeTab3=()=>{
    let val3=document.getElementById("formIndex3").value;
    let d=document.getElementById("formIndex4")
    if(val3.length>16){
    return setTimeout(function(){
      d.focus()
  }, 4000);
 
  }  }

  window.addEventListener('load', function()
   {
      document.getElementById("formIndex1").focus();
  })

  const ShowImage=()=>{
   let Val=document.getElementById("formIndex4").value;
   if(Val==="o"||Val==="O"){
  
    document.getElementById("Image_TerminalPage").style.backgroundImage = " url('/images/OKK.jpg')";
    document.getElementById("Image_TerminalPage").style.backgroundRepeat = "no-repeat";
    document.getElementById("Image_TerminalPage").style.backgroundSize = "100% 100%";
  }
  }

 

  
  return (
      <div > 
       <Header/>
        <div >
          <form id='Form_Terminal_Page'
         
          onSubmit={handleSubmit}>
           <div className="mb-1">
             <label htmlFor="exampleInputEmail1" className="form-label">Frame No.</label>
             <input maxLength="11" className="form-control" id="formIndex1" aria-describedby="emailHelp"
             name='Frame_No'
             autoComplete='off'
             onKeyUp={(e)=>{ChangeTab(e)}}
             value={values.Frame_No}
             onChange={(e)=>{handleChange(e)}}
             onBlur={handleBlur}></input>
             {errors.Frame_No && touched.Frame_No?(<p className='form-error'>{errors.Frame_No}</p>):null}
           </div>
           {/* <div className="mb-1">
             <label htmlFor="exampleInputEmail1" className="form-label">Country Code</label>
             <input maxLength="4" className="form-control" id="formIndex2" aria-describedby="emailHelp"
               name='Country_Code'
               autoComplete='off'
               onKeyUp={(e)=>{ChangeTab2(e)}}
               value={values.Country_Code}
               onChange={handleChange}                   
               onBlur={handleBlur}></input>
               {errors.Country_Code && touched.Country_Code?(<p className='form-error'>{errors.Country_Code}</p>):null}
           </div> */}
           <div className="mb-1">
             <label htmlFor="exampleInputEmail1" className="form-label">Engine No. </label>
             <input maxLength="17" className="form-control" id="formIndex3" aria-describedby="emailHelp"
               name='Engine_No'
               onKeyUp={(e)=>{ChangeTab3(e)}}
               autoComplete='off'
               value={values.Engine_No}
               onChange={handleChange}
               onBlur={handleBlur}></input>
                {errors.Engine_No && touched.Engine_No?(<p className='form-error'>{errors.Engine_No}</p>):null}
           </div>
           <div className="mb-2">
             <label htmlFor="exampleInputPassword1" className="form-label">Remark(O/R/S)</label>
             <input maxLength="1" className="form-control" id="formIndex4"
              name='Remarks'
              autoComplete='off'
              value={values.Remarks}
              onChange={handleChange}
              onBlur={handleBlur}></input>
               {errors.Remarks && touched.Remarks?(<p className='form-error'>{errors.Remarks}</p>):null}
           </div>
           <button className="SubmitBTN_Terminal" type='submit' value="AddData" onClick={(e)=>{handleSubmit(e);ShowImage();
             
             }} >Submit</button>
          </form>
        </div>
        <div id="Image_TerminalPage">

         </div>
         
        <TableTerminalPage Data={terminalData}/>
     

        <div id='AchivementsBox_terminalPage'>
          <p id='AchivementTittle'>Today Achievements</p>
          <p id='AchivementOK'>OK : 6</p>
          <p id='AchivementNotOK'>Not OK:10 </p>

        </div>
      </div> 
    )
  }

export default TerminalPage