import React, {Component} from 'react'
import Images from '../components/Images'
import { connect } from 'react-redux';


const ImageList = () => {

    return(
    <Grid >
        <Row>
          <Images images={this.props.images} />
        </Row>
    </Grid> 
    )
}