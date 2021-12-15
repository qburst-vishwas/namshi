import React, { useEffect ,useState} from 'react'
import {Grid} from '@material-ui/core';

import './products.css';


import { connect } from 'react-redux'
import {getProducts} from '../../reducers/index';

const Carditems = ({productData,getProducts}) => {
  console.log("usproductData",productData)
 const userInfo=productData.products
  console.log("userinfo",userInfo)

  useEffect(() =>{
       getProducts();
  },[]);

   
   const handleChange = (event) => {
    getProducts(event.target.innerText);
  };
  console.log("user info", userInfo)
    return (
        
        <div className="card-holder" >
        <div className="container" container alignItems="stretch">
       
        {userInfo && userInfo.map((user,idx) => {
          return(
            <>
            <div className="cards">
               <div className="cardActions" >
                
                 <div className="content">
                   <div component="div" >
                    {user.title}
                   </div>
                   <div variant="h6" color="text.secondary">
                    from {user.description}
                   </div>
                 </div>
              </div>

           </div>
           </>
        )})
          }
       </div>
   </div>

    )

}
const mapStateToProps = state => {
  return {
    productData: state.product
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Carditems)