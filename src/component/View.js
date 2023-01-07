import React from 'react'
// import {Icon} from 'react-icons-kit'
// import {trash} from 'react-icons-kit/feather/trash'

export const View = ({alldata,deletedata}) => {
    
    
    return alldata.map(data=>(
       <div className='dataaa'>
          
         <tr key={data.AllData}>
            <td></td>
         <td>{data.name}</td> 
         <td></td>
         <td></td> 
         <td>{data.dob}</td>
         <td></td>
         <td>{data.adhar}</td> 
         <td></td>
         <td></td>   
         <td>{data.mobile}</td>
         <td></td>   <td></td> 
         <td>{data.age}</td>
        
          <td className='delete-btn' onClick={()=>deletedata(data.Name)}>
                {/* <Icon icon={trash}/> */}
            </td>           
        </tr>  
       </div>
                 
    
))
}
