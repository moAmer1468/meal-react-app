import {Row,Col} from 'react-bootstrap';
import '../indexTwo.css';
import { Roll } from "react-awesome-reveal";

export const Catogary=({fileringProp,allCat})=>{

function handleFiltering(cat){
    fileringProp(cat);
}

return(
     <Row className='my-3 '>
             <Col sm='12' className='d-flex justify-content-center align-items-center ' style={{flexWrap:'wrap'}} >
                {
                    allCat.length >=1 ?(
                            allCat.map(
                                (ele)=>{
                                 return <Roll>
                                    <button onClick={()=>handleFiltering(ele)} style={{border:'1px solid black'}} className='btn mx-2'>{ele}</button> 
                                 </Roll>                        
                                    }
                            )
                    ):(
                            <div>Ther eis no This here </div>    
                    )
                   
                }
              </Col>
       </Row>

                
)

}
export default Catogary





//  <Row className='my-3 '>
//             <Col sm='12' className='d-flex justify-content-center align-items-center' >
//                                 <div>
//                     <button onClick={()=>handleFiltering('الكل')} style={{border:'1px solid black'}} className='btn mx-2'>الكل</button>
//                     <button onClick={()=>handleFiltering('فطار')} style={{border:'1px solid black'}} className='btn mx-2'>فطار</button>
//                     <button onClick={()=>handleFiltering('غداء')} style={{border:'1px solid black'}} className='btn mx-2'>غداء</button>
                    
//                 </div>
//             </Col>
//         </Row>


// 
