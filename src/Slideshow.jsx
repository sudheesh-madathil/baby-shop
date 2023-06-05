import Carousel from 'react-bootstrap/Carousel';

function Slideshow() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        style={{
          width:'100vw',
          height:'400px'
        }}
          className="d-block w-100"
          src="../public/photos/baby-3.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
            style={{
              width:'100vw',
              height:'400px'
            }}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/baby-elementson-pink_1220-4298.jpg?w=900&t=st=1685426369~exp=1685426969~hmac=57609e236f7a30e7252bef012b62bc690b7638537cbfcf50d745fd8f8c0040b5"
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
            style={{
              width:'100vw',
              height:'400px'
            }}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/beautiful-little-boy-sitting-by-window_1304-5647.jpg?w=900&t=st=1685426306~exp=1685426906~hmac=b2229ebc5e3004ae7cd720eab31a1a429d4e44ad0a1a44719a7a5e925241cc89"
          alt="Third slide"
        />

     
      </Carousel.Item>
    </Carousel>
  );
}

export {Slideshow};