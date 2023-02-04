import React from 'react'
import "./CSS/TerminalPage.css"
import Header from '../Components/Header';
import TableTerminalPage from '../Components/Table_TerminalPage';
import { useFormik } from 'formik';
import { AB_TerminalSchema } from '../Validations/AbTerminal';


 const initialValues={
      Frame_No: "",
      Country_Code: "",
      Engine_No: "",
      Remarks: "",
    }




const TerminalPage = () => {
 


  // const [terminalData,setterminalData]=useState();
 
// const [terminalData,setterminalData]=useState();
  const { values,errors,touched,handleBlur,handleChange,handleSubmit, } = useFormik({
    initialValues,
    validationSchema:AB_TerminalSchema,
   
    onSubmit:(async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      
     console.log(values);
     
    })
    
    
  })
  // const handleTextChange=(e) =>{
  //   if (e.target.value.length <= maxLength) {
  //     this.setState({ value: e.target.value });
  //   }
  //   if (e.target.value.length === maxLength) {
  //     React.findDOMNode(this.nextComponent).focus();
  //   }
  // }
    // console.log(terminalData)
  return (
      <div> 
       <Header/>
        <div >
          <form id='Form_Terminal_Page'
          onSubmit={handleSubmit}>
           <div className="mb-1">
             <label htmlFor="exampleInputEmail1" className="form-label">Frame No.</label>
             <input maxLength="25" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
             name='Frame_No'
             autoComplete='off'
             value={values.Frame_No}
             onChange={handleChange}
             onBlur={handleBlur}></input>
             {errors.Frame_No && touched.Frame_No?(<p className='form-error'>{errors.Frame_No}</p>):null}
           </div>
           <div className="mb-1">
             <label htmlFor="exampleInputEmail1" className="form-label">Country Code</label>
             <input maxLength="4" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
               name='Country_Code'
               autoComplete='off'
               value={values.Country_Code}
               onChange={handleChange}                   
               onBlur={handleBlur}></input>
               {errors.Country_Code && touched.Country_Code?(<p className='form-error'>{errors.Country_Code}</p>):null}
           </div>
           <div className="mb-1">
             <label htmlFor="exampleInputEmail1" className="form-label">Engine No. </label>
             <input maxLength="30" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
               name='Engine_No'
               autoComplete='off'
               value={values.Engine_No}
               onChange={handleChange}
               onBlur={handleBlur}></input>
                {errors.Engine_No && touched.Engine_No?(<p className='form-error'>{errors.Engine_No}</p>):null}
           </div>
           <div className="mb-2">
             <label htmlFor="exampleInputPassword1" className="form-label">Remark(O/R/S)</label>
             <input maxLength="1" className="form-control" id="exampleInputPassword1"
              name='Remarks'
              autoComplete='off'
              value={values.Remarks}
              onChange={handleChange}
              onBlur={handleBlur}></input>
               {errors.Remarks && touched.Remarks?(<p className='form-error'>{errors.Remarks}</p>):null}
           </div>
           <button className="SubmitBTN_Terminal" type='submit' value="AddData" onClick={handleSubmit} >Submit</button>
          </form>
        </div>
        <div id="Image_TerminalPage">
          Terminal  Images
         </div>
         
        <TableTerminalPage/>
        {/* <TableTerminalPage Data={terminalData}/>  */}

        <div id='AchivementsBox_terminalPage'>
          <p id='AchivementTittle'>Today Achievements</p>
          <p id='AchivementOK'>OK : 6</p>
          <p id='AchivementNotOK'>Not OK:10 </p>

        </div>
      </div> 
    )
  }

export default TerminalPage