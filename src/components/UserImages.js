import React from 'react'

const UserImages = ({image}) => {

    
   return( 
     <div className="tile" key={image.id} >
        <h4>{image.imgur_id}</h4>
          <p>{image.user_id}</p>   
          <img src={image.imgur_id} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}} alt={image.imgur_id} />

     </div>

   )
}

export default UserImages