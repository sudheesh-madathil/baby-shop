

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { products } from "./productlist";
import { CartContext } from "./creatcontext";
import { useContext } from "react";
import { Navs } from "./Nav";

function Product() {
     const { addToCart} = useContext(CartContext);

  




     
  

  return (
    <div 
   >
   
    <Navs/>
 

      {products.dress.map((data) => (
        <MDBCard style={{width:"20%",float:'left',padding:'  10  px',margin:'9px',height:'10%'}}  className="bg-image rounded hover-zoom shadow-1-strong"  key={data}>
          <MDBCardImage   src={data.ima} alt="img" />
          <MDBCardBody>
            <MDBCardTitle>{data.title}</MDBCardTitle>
            <MDBCardText>{data.description}</MDBCardText>
            <MDBBtn  onClick={()=>addToCart(data)}  >ADD Cart</MDBBtn>
           
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
  );
}

export { Product };
