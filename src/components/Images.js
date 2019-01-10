
import React from 'react';

const Images = (props) => {

  /*function handleClick(event) {
    event.preventDefault();
    likeImage({
      imgur_id: props.image.cover,
      user_id: obj.id
    });
  }*/

//            <button onClick={ () => props.saveImage(image.link) }>Save</button>

  function listImages() {
    return props.images.map((image, idx) => {
      return (
        <div key={idx} className="tile">
          <div>
            <img src={image.link} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}} alt="image should be here" />
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
