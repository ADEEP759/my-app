import React from 'react';




const TableTerminalPage = (props) => {
  
 let TableData=props.Data;
//  array = [modifiedObj, ...array] 

 console.log(TableData);
  // SetnewData(props.Data)
  // TData.push(props.Data)

  
  // TData.push(newData);
  // const TableData=TData.concat(...newData)


  return (


 <div id='Table_terminalPage'>
    <table className="table">
     <thead>
      <tr className="tableHead">
        <th scope="col">Sr.No.</th>
        <th scope="col">Frame No.</th>
        {/* <th scope="col">Country Code</th> */}
        <th scope="col">Engine No.</th>
        <th scope="col">Remark </th>
      </tr>
    </thead>
  <tbody id='TableBody_TerminalPage'>


   {TableData && TableData.map((val,index) =>{
    // for(let i=0;i>TableData.length;i++){
    //   return 
    // }
   return<tr key={index} >
    
    <td>{index+1}</td>
    <td>{val.Frame_No}</td>
   
    <td>{val.Engine_No}</td>
    <td>{val.Remarks}</td>
   </tr>
})}
  
 
   

   
    {/* <tr >
     <td>2</td>
     <td>123712uygjqwgd127</td>
    
     <td>MMGHJS31122387KT</td>
     <td>O</td>
    </tr>
    <tr >
     <td>3</td>
     <td>123712uygjqwgd127</td>
  
     <td>MMGHJS31122387KT</td>
     <td>O</td>
    </tr>
    <tr >
     <td>4</td>
     <td>123712uygjqwgd127</td>
   
     <td>MMGHJS31122387KT</td>
     <td>O</td>
    </tr>
    <tr >
     <td>5</td>
     <td>123712uygjqwgd127</td>
 
     <td>MMGHJS31122387KT</td>
     <td>O</td>
    </tr>
    <tr >
     <td>6</td>
     <td>123712uygjqwgd127</td>

     <td>MMGHJS31122387KT</td>
     <td>O</td>
    </tr>
    <tr >
     <td>7</td>
     <td>123712uygjqwgd127</td>

     <td>MMGHJS31122387KT</td>
     <td>O</td>
    </tr>
    <tr >
     <td>8</td>
     <td>123712uygjqwgd127</td>

     <td>MMGHJS31122387KT</td>
     <td>O</td>
    </tr>
    <tr >
     <td>9</td>
     <td>123712uygjqwgd127</td>

     <td>MMGHJS31122387KT</td>
     <td>O</td>
    </tr> */}

  

    
   
  </tbody>
</table>
    </div>
  )
}

export default TableTerminalPage