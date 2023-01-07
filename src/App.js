
import React, { useState, useEffect } from 'react'
import { View } from './component/View';


const getData = () => {
  const data = localStorage.getItem('data');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export const App = () => {

  const [data, setdata] = useState(getData());


  const[name,setName]=useState(" ");
  const[dob,setDob]=useState(" ");
  const[adhar,setAdhar]=useState(" ");
  const[mobile,setMobile]=useState(" ");
  const[age,setAge]=useState(" ");



  const AddData = (e) => {
    e.preventDefault();

    let book = {
      name,
      dob,
      adhar,
      mobile,
      age

    }
    setdata([...data, book]);
    setName('');
    setDob('');
    setAdhar('');
    setMobile('');
    setAge('');
  }


  const deleteBook = (name) => {
    const filteredBooks = data.filter((element, index) => {
      return element.dateofbirth !== dob
    })
    setdata(filteredBooks);
  }


  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data])

  return (
    <div className='container'>
      <h1>Directory App </h1>
      
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
            onSubmit={AddData}>
              <div className='theads'> <th><lable> Name</lable></th>
            <th><lable> DOB</lable></th>
            <th><lable> Adhar</lable></th>
            <th> <lable> Mobile</lable></th>
            <th> <lable> Age</lable></th></div>
           <div className='inputel'><tr><input type="text" onChange={(e)=>setName(e.target.value)} value={name}></input></tr>
            
            <tr><input type="text" onChange={(e)=>setDob(e.target.value)} value={dob}></input></tr>
            
            <tr><input type="text" onChange={(e)=>setAdhar(e.target.value)} value={adhar}></input></tr>
            
            <tr><input type="text" onChange={(e)=>setMobile(e.target.value)} value={mobile}></input></tr>
            
            <tr><input type="text" onChange={(e)=>setAge(e.target.value)} value={age}></input></tr></div>
           
            <div className='buttonwala'><button type="submit" className='btn btn-success btn-md'>
              ADD
            </button></div>
           
           
           
          
          
            
          </form>
        </div>

        <div className='view-container'>
          {data.length > 0 && <>
            <div className='table-responsive'>
              <table className='table'>
               <div className='theading'>
                <h1>Name</h1>
                <h1>DOB</h1>
                <h1>Adhar</h1>
                <h1>Mobile</h1>
                <h1>Age</h1>
                </div> 
                <tbody>
                  <View alldata={data} deletedata={deleteBook} />
                </tbody>
              </table>
            </div>
            <button className='deleteBtn'
              onClick={() => setdata([])}>DeleteAll</button>
          </>}
          {data.length < 1 && <div>Please Enter Details to show Data Here...</div>}
        </div>

      </div>
    </div>
  )
}

export default App
















































// import{useState} from 'react'


// function App() {
  
  
// const[name,setName]=useState(" ");
// const[dob,setDob]=useState(" ");
// const[adhar,setAdhar]=useState(" ");
// const[mobile,setMobile]=useState(" ");
// const[age,setAge]=useState(" ");
// // console.log("name"+name);
// // console.log("dob"+dob);
// // console.log("adhar"+adhar);
// // console.log("mobile"+mobile);
// // console.log("age"+age);
// const [data,setData]=useState([]);
// const Addtodolist = (e) => {
//   e.preventDefault();

// let AllData = {
//   name,
//   dob,
//   adhar,
//   mobile,
//   age

// }



//    return setData(...data, AllData);
    
  
// }
//   console.log(data)
//   return (
//     <div>
//       <div className="Header"> <h1>My Directory</h1></div>
//       <form autoComplete="off"onSubmit={Addtodolist}>
//       <div><lable> Name:-</lable><input type="text" onChange={(e)=>setName(e.target.value)} value={name}></input>
//       <lable> DOB:-</lable><input type="text" onChange={(e)=>setDob(e.target.value)} value={dob}></input>
//       <lable> Adhar:-</lable><input type="text" onChange={(e)=>setAdhar(e.target.value)} value={adhar}></input>
//       <lable> Mobile:-</lable><input type="text" onChange={(e)=>setMobile(e.target.value)} value={mobile}></input>
//       <lable> Age:-</lable><input type="text" onChange={(e)=>setAge(e.target.value)} value={age}></input>
//       <button type='submit'> click</button>
//       </div>
//       </form>
//       <div className="tableheader"><tr>
//         <th>Name</th>
//         <th>Date of Birth</th>
//         <th>Adhar</th>
//         <th>Mobile Number</th>
//         <th>Age</th>
//         </tr>
//       </div>
//       <div className="data">
//        <tr>
//         <td>{data.map((name)=>{return <p>{name}</p>})}</td>
//         <td>{data.dob}</td>
//         <td>{data.adhar}</td>
//         <td>{data.mobile}</td>
//         <td>{data.age}</td>
//        </tr>
//       </div>

//     </div>
//   );
// }

// export default App;
