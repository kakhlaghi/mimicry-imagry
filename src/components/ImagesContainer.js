import React, {Component} from 'react'
import axios from 'axios'
import UserImages from './UserImages'
import UserImageForm from './UserImageForm'
import update from 'immutability-helper'



class ImagesContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
          images: [],
          editingImageId: null
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
          { image:
            {
              imgur_id: '',
              user_id: ''
            }
          }
        )
        .then(response => {
          console.log(response)
          //creates item immediately no refresh neede
          const images = update(this.state.images, {
            $splice: [[0,0,response.data]]
          })
          this.setState({
            images:images,
            //editing images id keeps track of an image that is being edited.. upon creating a new image we also need to edit it to add image url.
            editingImageId:response.data.id
          })
        })
        .catch(error => console.log(error))
      }

      //conditional statement for map checks if editingImageId matches image id in map  if so: form renders if not renders userimage
      render() {
        return (
          <div>
            <button className="newImageButton" onClick={this.addNewImage} > New Image </button>
            {this.state.images.map((image) => {
              if(this.state.editingImageId === image.id){
                return (<UserImageForm image={image} key={image.id} />)
              }
                return (<UserImages image={image} key={image.id} />)    
            })}
          </div>
        );
      }
}

export default ImagesContainer