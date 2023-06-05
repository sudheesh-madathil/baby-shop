// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBRow,
//   MDBInput,
//   MDBCheckbox,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';
// import { useNavigate } from 'react-router-dom';

// function Login() {

//   const navigate = useNavigate()
//   return (
//     <MDBContainer fluid style={{height:'200px',width:'800px',paddingRight:"200px"}}>
   

//       {/* <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '600px',
//     marginTop: '200px',
//     width: 'initial',
   
// }}></div> */}

//       <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(20px)'}}>
//         <MDBCardBody className='p-5 text-center'>
//         {/* <button onClick={onclose}>x</button> */}

//           <h2 className="fw-bold mb-5">Sign up now</h2>

//           <MDBRow>
//             <MDBCol col='6'>
//               <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
//             </MDBCol>

//             <MDBCol col='6'>
//               <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
//             </MDBCol>
//           </MDBRow>

//           <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
//           <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

//           <div className='d-flex justify-content-center mb-4'>
//             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
//           </div>

//           <MDBBtn onClick={()=>navigate('Product')} className='w-100 mb-4' size='md'>sign up</MDBBtn>

//           <div className="text-center">

//             <p>or sign up with:</p>

//             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//               <MDBIcon fab icon='facebook-f' size="sm"/>
//             </MDBBtn>

//             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//               <MDBIcon fab icon='twitter' size="sm"/>
//             </MDBBtn>

//             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//               <MDBIcon fab icon='google' size="sm"/>
//             </MDBBtn>

//             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//               <MDBIcon fab icon='github' size="sm"/>
//             </MDBBtn>

//           </div>

//         </MDBCardBody>
//       </MDBCard>

//     </MDBContainer>
//   );
// }

// export{Login}
import { useState } from 'react';
import { Navs } from './Nav';


import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom';
// import { json } from 'react-router-dom';

function Registration() {
const [fristname,setfristname]=useState('')
const [lastname,setlaststname]=useState('')
const [email,setemail]=useState('')
const [password,setpassword]=useState('')
const navigate=useNavigate()
  const handlesubmit=(e)=>{
    e.preventDefault()
    let obj={fristname,lastname,email,password}
  
     console.log(obj);
    fetch("http://localhost:8000/user",{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(obj)
    }).then((res)=>{
      console.log(res);
      alert('successfully')
      // toast.success('successfully')
      navigate('/Login')
  

    }).catch((err)=>{
      alert('failed :'+err.message)
  //  toast.error('failed:'+err.message)

    })

  }
  return (
   
    <form onSubmit={handlesubmit}>
    <MDBContainer fluid>
    <Navs/>
      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>

          <MDBRow>
            <MDBCol col='6'>
            
              <MDBInput required wrapperClass='mb-4' label='First name' id='form1' type='text' value={fristname} onChange={(e)=>setfristname(e.target.value)}/>
         
            </MDBCol>


            <MDBCol col='6'>
              <MDBInput  required wrapperClass='mb-4' label='Last name' id='form1' type='text' value={lastname} onChange={(e)=>setlaststname(e.target.value)}/>
            </MDBCol>
          </MDBRow>

          <MDBInput  required wrapperClass='mb-4' label='Email' id='form1' type='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
          <MDBInput  required wrapperClass='mb-4' label='Password' id='form1' type='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
          </div>

          <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn >

          <div className="text-center">

            <p>or sign up with:</p>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>

          </div>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </form>
  );
}

export {Registration};