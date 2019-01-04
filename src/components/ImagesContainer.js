import React, {Component} from 'react'
import axios from 'axios'
import UserImages from './UserImages'


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
                return (<UserImages image={image} key={image.id} />)    
            })}
          </div>
        );
      }
}

export default ImagesContainer