import React from 'react'

const UserImages = ({image}) => {

    
   return( 
     <div className="tile" key={image.id} >
        <h4>{image.imgur_id}</h4>
          <p>{image.user_id}</p>   
     </div>

   )
}

export default UserImages