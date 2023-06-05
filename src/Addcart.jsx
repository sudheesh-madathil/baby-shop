import { useContext } from "react";
import { CartContext } from "./creatcontext";

import {
    MDBCard,
    MDBCardBody,
    // MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
  } from "mdb-react-ui-kit";
import { Navs } from "./Nav";

function Cart(){

const {cartItems,removeItem} = useContext(CartContext);
console.log(cartItems);
const clicks =(ids)=>{
removeItem(ids)
}
    return(
        <>
         <Navs/>
       

    {cartItems.map((data) => (
      <MDBCard style={{width:"20%",float:'left',padding:'  10  px',margin:'9px',height:'10%'}}  
      className="bg-image rounded hover-zoom shadow-1-strong" key={data}>
        <MDBCardImage  src={data.ima} alt="img" />
        <MDBCardBody>
          {/* <MDBCardTitle>{data}</MDBCardTitle> */}
          <MDBCardText>{data.description}</MDBCardText>
          <MDBBtn onClick={()=>clicks(data.ima)} >REMOVE</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    ))}

  
        
        </>
    )
}
export{Cart}