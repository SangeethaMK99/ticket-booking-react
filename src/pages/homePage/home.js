import { useState } from "react";

import Buttons from "../../components/buttons/buttons";
import Footer from "../../components/footer/footer";
import FormSubmit from "../../components/form/form";
import Header from "../../components/header/header";
import Images from "../../components/imageSlider/imageSlider";
import Places from "../../components/placeCard/placeCard";
import Services from "../../components/services/services";

function Home() {
    const[buttons,setButtons]=useState('buttonShow')
    return (
      <div>
        {/* <Header/> */}
        <Images/> 
        <Buttons setButtons={setButtons}/>
        <Places/>
        {
            // buttons==="buttonShow"?
            // <Places/>:
            buttons==="form"? <FormSubmit/>
            : buttons==="services"&& <Services/>
        }
        {/* <Footer/> */}
      </div>
    );
  }
export default Home;
  




