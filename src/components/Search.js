import React, {Component} from 'react'



export default class Search extends Component {

    handleSelect = (tag) => {
       this.props.fetchGalleries({
            section: tag
      });
     }
        

    render()
    {
        <DropdownButton title="Galleries" id="bg-nested-dropdown" onSelect={ this.handleSelect }>
          <MenuItem eventKey="Viral">Viral</MenuItem>
          <MenuItem eventKey="Cats">Cats</MenuItem>
          <MenuItem eventKey="Science_and_Tech">Science and Tech</MenuItem>
          <MenuItem eventKey="Gaming">Gaming</MenuItem>
          <MenuItem eventKey="Eat_What_You_Want">Eat What You Want</MenuItem>
          <MenuItem eventKey="Aww">Aww</MenuItem>
          <MenuItem eventKey="Inspiring">Inspiring</MenuItem>
          <MenuItem eventKey="Awesome">Awesome</MenuItem>
          <MenuItem eventKey="Creativity">Creativity</MenuItem>
          <MenuItem eventKey="The_Great_Outdoors">The Great Outdoors</MenuItem>
          <MenuItem eventKey="Storytime">Storytime</MenuItem>
          <MenuItem eventKey="Movies_and_TV">Movies and TV</MenuItem>
          <MenuItem eventKey="Reaction">Reaction</MenuItem>
          <MenuItem eventKey="Current_Events">Current Events</MenuItem>
          <MenuItem eventKey="Funny">Funny</MenuItem>
        </DropdownButton>
    }

}