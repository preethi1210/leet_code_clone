
import './Card.css';
const Card =({img})=>{
    return (
        <div >
          <img src={img} className='img'></img>
        </div>
    );
}
export default Card;