import React, {Component} from 'react'
import axios from 'axios'

class UserImageFrom extends Component {
    constructor(props){
        super(props),
        this.state={

        }
    }

    render(){
        return(
            <div className='tile'>
                <form>
                    <input className='input' type='text' name='imgur_id' placeholder='add the url for the image here!'/>
                </form>
            </div>
        )
    }
}

export default UserImageForm