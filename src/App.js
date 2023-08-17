import react from 'react';
import { Container } from 'react-bootstrap';
import AmerNavbar from './components/navBar.js';
import { Header } from './components/header.js';
import { Catogary } from './components/catogary.js';
import { Card } from './components/card.js';
import { useState,useEffect } from 'react';
import './index.css';
import { items } from './data.js';
export default function App() {
  // we need to take all categories from the items array
  const catArray=items.map(
    (ele,index,arr)=>{
      return(ele.category)
    }
  );

// we need to remove duplicated values
const noDuplicatedValues=[...new Set(catArray.map(
  (ele,index,arr)=>{
      return ele  ;
  }
))];
// const noDuplicatedValues=["الكل",...new Set(catArray.map(
//   (ele,index,arr)=>{
//       return ele  ;
//   }
// ))];

// and we need to make Array that contains at least "الكل"  button
noDuplicatedValues.unshift("الكل");
// so you could do That 



const[itemsData,changeItemState]=useState(items);
// we need to make simple filtering according to meals
function filtering(cat){
  if(cat==='الكل'){
        changeItemState(items)
  }else{
  const newArr=items.filter(
        (ele,index,arr)=>{
          return ele.category===cat;
        },this
      ) ;
      changeItemState(newArr); 
    }
   
}

const fitlerBySearchBySearch=(word)=>{
  if(word!==''){
    const newArr=items.filter( (ele)=> ele.name===word )
    changeItemState(newArr)
  }
}


return(
<div >
    <div style={{backgroundColor:''}}>
          <Container style={{backgroundColor:'dark'}} className='font'>
     <AmerNavbar fitlerBySearch={fitlerBySearchBySearch}></AmerNavbar>
     {/* This is just the header Row  */}
     <Header></Header>
     {/* This is just the catogary Row  */}
     <Catogary fileringProp={filtering} allCat={noDuplicatedValues} ></Catogary>
     {/* This is the Card Component  */}
        <Card amerItems={itemsData}></Card>

  </Container>
    </div>

</div>
);

}

