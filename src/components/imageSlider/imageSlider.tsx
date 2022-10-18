import { useEffect, useState } from "react";
import "./imageSlider.css";
import { fetchSlider } from "../../Redux/imageSlider/sliderAction";
import { connect } from "react-redux";

interface slider{
  images:string[] | any
  fetchSlider:() =>void; 
}
function Images({images, fetchSlider}:slider) {
  useEffect(() => {
    fetchSlider();
   
  },[]);
  const im ="http://localhost:8000/upload/images/"
  const imgs=images.img?.map((ele:any)=>im + ele.name)
  console.log(imgs);
  

  const [index, setIndex] = useState(0);
  const prevImages = () => {
    if (index !== 0){
      setIndex(index -1);
    } else if (index == 0){
      setIndex(imgs.length -1);
    }
  };
  const nextImages = () => {
    if (index !== imgs.length - 1) {
      setIndex(index +1);
    }else if (index === imgs.length - 1) {
      setIndex(0);
    }
  };    console.log(images.img);

  return (
    <div className="imageSlider">
      {/* <img src="http://localhost:8000/upload/images/img_1.jpg" alt="err" /> */}
      {/* <img src={images[index]} alt="error" /> */}
      {/* console.log(images); */}
      {images.img && <img src={imgs[index]} alt="err"/>}
      <button onClick={prevImages}>Prev</button>
      <button onClick={nextImages}>Next</button>
      <br/>
      <br/>
    </div>
  );
}
const mapStateToProps = (state:any) => {
  return {
    images: state.images.slider,
    
  };
};
const mapDispatchToProps = (dispatch:any) => {
  return {
    fetchSlider: () => {
      dispatch(fetchSlider());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);






































