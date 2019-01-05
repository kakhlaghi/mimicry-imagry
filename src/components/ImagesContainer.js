import React, {Component} from 'react'
import axios from 'axios'
import UserImages from './UserImages'
import update from 'immutability-helper'



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

      addNewImage = () => {
        axios.post(
          'http://localhost:3001/api/images',
          { imgage:
            {
              imgur_id: '',
              user_id: ''
            }
          }
        )
        .then(response => {
          console.log(response)
        })
        .catch(error => console.log(error))
      }

      render() {
        return (
          <div>
            <button className="newImageButton" onClick={this.addNewImage} > New Image </button>
            {this.state.images.map((image) => {
                return (<UserImages image={image} key={image.id} />)    
            })}
          </div>
        );
      }
}

export default ImagesContainer