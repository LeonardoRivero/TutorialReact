import React from 'react';
import imageBackground from '../images/rock.jpg'
import imageNotes from '../images/notes.jpg'
import imageGuitar from '../images/guitar.jpeg'
import '../css/cardProfile.css'
import CardProfile from './CardProfile';


export default class BackGroundImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isShown: false, showCard: false }
        this.handleBoxToggle = this.handleBoxToggle.bind(this);
        this.handleBox = this.handleBox.bind(this);
    }
    handleBoxToggle(event) {
        console.log(event, event.type);
        if (event.type === "mouseenter") {
            this.setState({ showCard: true })
        }
        else if (event.type === "mouseleave") {
            this.setState({ showCard: false })
        }
    }
    render() {
        const styleBgImage = {
            backgroundImage: `url(${this.props.image})`,
            height: '100vh',
            marginTop: '0px',
            fontSize: '50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };

        return (
            <div style={styleBgImage} >
                {this.props.children}
                <div className='layoutProfile' >
                    <img src={imageNotes} className="pentagon img-left" alt="logo" onMouseEnter={this.handleBoxToggle}
                        onMouseLeave={this.handleBoxToggle} />
                    <img src={imageGuitar} className="pentagon img-right " alt="logo" />
                    <div className="img-left text-white" ><h1>Backend</h1></div>
                    <div className='header'>
                        <CardProfile toShow={this.state.showCard}></CardProfile>
                    </div>
                </div>
            </div>
        );
    }
}
BackGroundImage.defaultProps = { image: imageBackground }