import React, {Component} from 'react'
import axios from 'axios'

class UserImageForm extends Component {
    constructor(props){
        super(props)
        this.state={
            imgur_id: this.props.image.imgur_id,
            user_id: this.props.current_user
        }
    }

    handleInput=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }

    //Using handle blur so when the form loses focus it updates -- this corresponds with the update in the API -- avoids needing a submit button
    handleBlur=(event)=>{
        const image = {
            imgur_id: this.state.imgur_id,
            user_id: this.state.user_id
          }

        axios.put(
            `http://localhost:3001/api/images/${this.props.image.id}`,
            {
                image:image
            })
            .then(response =>{
                console.log(response)
                this.props.updateImage(response.data)
            })
        .catch(error=>console.log(error))
    }

    render(){
        return(
            <div className='tile'>
                <form onBlur={this.handleBlur}>
                    <input className='input' type='text' name='imgur_id' placeholder='add the url for the image here!'/>
                </form>
            </div>
        )
    }
}

export default UserImageForm
//                    <input className='hide' type='number' name='user_id' placeholder={this.state.currentUser.id} />
