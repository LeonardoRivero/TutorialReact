import React, { Component } from 'react';
import '../css/cardProfile.css'
import imageBackground from '../images/notes.jpg'

export default class CardProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        if (this.props.toShow) {
            return (
                <div className="text-center text-white">
                    <div className='text-main' >
                        <h1 className="display-1">ARRIVEL</h1>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
}
// CardProfile.defaultProps = { image: imageBackground }
//CardProfile.defaultProps = { toShow: false }