import React from 'react';
import BackGroundImage from '../components/BackGroundImage';
import CardProfile from '../components/CardProfile';




export default class Welcome extends React.Component {
    render() {
        return (
            <div >
                <BackGroundImage >
                    <CardProfile></CardProfile>
                </BackGroundImage>
            </div>
        );
    }
}