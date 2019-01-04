import React, {Component} from 'react'
import axios from 'axios'

class ImagesContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
          images: []
        }
      }
    
    componentDidMount() {
        axios.get('http://localhost:3001/api/images.json')
        .then(response => {
          console.log(response)
          this.setState({images: response.data})
        })
        .catch(error => console.log(error))
      }

      render() {
        return (
          <div>
            {this.state.images.map((image) => {
              return(
                <div className="tile" key={image.id} >
                  <h4>{image.imgur_id}</h4>
                  <p>{image.user_id}</p>=
                </div>
              )       
            })}
          </div>
        );
      }
}

export default ImagesContainer