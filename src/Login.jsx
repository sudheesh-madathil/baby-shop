import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [emailtext, setemailtext] = useState("");
  const [passwordtext, setpasswordtext] = useState("");
const usenavigate=  useNavigate()
  const handlesubmit = (e) => {
    e.preventDefault();
    setemailtext('')
    setpasswordtext('')

    if (validate()) {
    //   console.log("proceed");
      fetch('  http://localhost:8000/user/' 
      ).then((res)=>{
      return res.json()
  }).then((resp)=>{
    const user = resp.find(
        (u) => u.email === emailtext 
      );
      console.log(user);
      if(user){
        const password = resp.find((u)=>u.password === passwordtext)
        console.log("email");
        if(password){
  
       alert("success")
       usenavigate('/Home')
         }else{
            console.log("not password");
         }
         }else{console.log("not emial");}

      
    // if(Object.keys(resp).length === 0){
    //     alert('user  not found')
    // }else{
    //     if(resp[0].passwordtext === passwordtext){
           
    //     }else{
    //         alert('  not found')

    //     }

    // }
   
    
  }).catch((err)=>{
alert("err",err)
  })
    }
  };

  

  const validate = () => {
    let result = true;
    if (emailtext === "" || emailtext === null) {
      result = false;
      alert('please enter email')
    }
    if (passwordtext === "" || passwordtext === null) {
      result = false;
      alert('please enter password')
    }

    return result;
  
  };


  // let obj={emailtext,passwordtext}
  // console.log(obj);

  return (
    <>
 
    <form onSubmit={handlesubmit}>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="../public/photos/baby-3.jpg"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0">Logo</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  value={emailtext}
                  onChange={(e) => setemailtext(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  value={passwordtext}
                  onChange={(e) => setpasswordtext(e.target.value)}
                />

                <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                  Login
                </MDBBtn>
                <a className="small text-muted" href="#!">
                  Forgot password?
                </a>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don have an account?{" "}
                  <a href="Registration" style={{ color: "#393f81" }}>
                    Register here
                  </a>
                </p>

                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="" className="small text-muted">
                    Privacy policy
                  </a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </form>
    </>
  );
}

export { Login };
