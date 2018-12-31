
import React from 'react';

const Images = (props) => {

  /*function handleClick(event) {
    event.preventDefault();
    likeImage({
      imgur_id: props.image.cover,
      user_id: obj.id
    });
  }*/


  function listImages() {

    return props.images.map((image, idx) => {
      return (
        <div key={idx} className="row">
          <div>
            <img src={image.link} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}} alt={image.title}/>
          </div>
        </div>
      )
    })
  }

  return (
    <div style={{alignItems: 'center'}}>
    {listImages()}
    </div>
    )
}
export default Images;
