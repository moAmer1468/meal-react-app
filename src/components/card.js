import {Row,Col} from 'react-bootstrap';
import amerImage from '../images/amerImage.jpg'
import '../indexTwo.css';
import '../data';
import { Slide } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

export const Card=({amerItems})=>{
    // amerItems=[];
    return(
        <Row className='one-row'>
{ 
    amerItems.length?(
        (
            amerItems.map(
                (ele,index,arr)=>{
return (
  <Zoom>
          <Col key={ele.id} className='my-2 mx-2'>
                <div style={{backgroundColor:'white'}} className='amer-card'>
                <img src={ele.img}/>
                    <div style={{flex:'1'}}>
                        <div className='item-price-heading-style'>
                            <h2>{ele.name}</h2>
                            <div className='item-price'>{ele.price}</div>
                        </div>
                        <p>{ele.description}</p>
                    </div>
                </div>
            </Col>
  </Zoom>
        )
                },this
            )
        )
    ):(
        <h2>لا يــــــــــوجد وجبات</h2>
    )
}

        </Row>
    );
}

export default Card;