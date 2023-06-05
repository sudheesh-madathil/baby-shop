import{ Footer} from "./Footer"
import { Navs } from "./Nav"
import {Section} from "./Section"
import { Slideshow } from "./Slideshow"
import 'bootstrap/dist/css/bootstrap.min.css';
function Home(){
    return(
<>

<Navs/>
<Slideshow/>
<Section/>
<Footer/>

</>

    )
}
export{Home}