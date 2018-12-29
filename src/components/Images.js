
import React from 'react';
import { Col, Button } from 'react-bootstrap';

const Image = (props) => {

  /*function handleClick(event) {
    event.preventDefault();
    likeImage({
      imgur_id: props.image.cover,
      user_id: obj.id
    });
  }*/


  function listImages() {

    return props.catPics.map((catPic, idx) => {
      return (
        <div key={idx} className="col-lg-12">
          <div className="col-lg-6 col-lg-offset-3 well">
            <img src={catPic.url} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}} alt="catpic"/>
          </div>
        </div>
      )
    })
  }

  return (
    {listImages()}
    )
}
export default Image;