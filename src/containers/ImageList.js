import React, {Component} from 'react'
import Images from '../components/Images'
import { connect } from 'react-redux';

export default class ImageList extends Component {

        renderList() {
            // must wrap .map block with conditional statement
              return (
                <div>
                  {welcome}
                  <h1>{this.props.images.images.display_name}</h1>
                  <ImageList>
                    {children}
                  </ImageList>
                </div>
              );
            }
    
    
}