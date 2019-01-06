import React, {Component} from 'react'
import axios from 'axios'

class UserImageFrom extends Component {
    constructor(props){
        super(props),
        this.state={
            imgur_id: this.props.image.imgur_id,
            user_id: this.props.current_user
        }
    }

    handleInput=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        return(
            <div className='tile'>
                <form>
                    <input className='input' type='text' name='imgur_id' placeholder='add the url for the image here!'/>
                    <input className='hide' type='number' name='user_id' placeholder={this.state.currentUser.id} />
                </form>
            </div>
        )
    }
}

export default UserImageForm