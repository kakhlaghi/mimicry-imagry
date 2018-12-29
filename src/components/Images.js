
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
        <div key={idx} className="col-lg-12">
          <div className="col-lg-6 col-lg-offset-3 well">
            <img src={image.link} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}} alt="from imgur"/>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
    {listImages()}
    </div>
    )
}
export default Images;