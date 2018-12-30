import React, {Component} from 'react'



export default class Search extends Component {

        handleSelect = (tag) => {
          this.props.fetchGalleries({
            section: tag
          });
        }
        

    render()
    {

    }

}