import Card from "./Card";
import img1 from '../Asserts/img1.jpeg';
import img2 from '../Asserts/img2.png';
import img3 from '../Asserts/img3.png';
import './box.css';
const Box=()=>{
   return(
   <div className="main1">
 <div className="left">
 <div className="boxes">
 <Card img ={img1}></Card>
 <Card img ={img2}></Card>
 <Card img ={img3}></Card>
 </div>
 </div>
   <div className="right">
   </div>
   </div>
   );
}
export default Box;