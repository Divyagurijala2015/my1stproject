import React from 'react'
import { useCart } from 'react-use-cart'
import data from './data';

function Itemcard(props) {
    const { addItem } = useCart();
  return (

    <div className='container'>
      <div className='row'>
      {
        data.productData.map((item,key)=>{
          
          return(
            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={key}>
              <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={item.img} className='card-img-top img-fluid' />
              <div className='card-body text-center'>
               <h5 className='card-title'>{item.title}</h5>
               <h5 className='card-title'>$ {item.price}</h5>
                <p className='card-text'>{item.desc}</p>
                <button className='btn btn-success' onClick={()=>addItem(item)}>Add To Cart</button>
            </div>
       </div>
      </div>
          )
        })
      }
      </div>
    </div>

    // <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
    //     <div className='card p-0 overflow-hidden h-100 shadow'>
    //         <img src={props.img} className='card-img-top img-fluid' />
    //         <div className='card-body text-center'>
    //             <h5 className='card-title'>{props.title}</h5>
    //             <h5 className='card-title'>$ {props.price}</h5>
    //             <p className='card-text'>{props.desc}</p>
    //             <button className='btn btn-success' onClick={() =>addItem(props.item)}>Add To Cart</button>
    //         </div>
    //     </div>
    // </div>
    
  )
}


export default Itemcard
