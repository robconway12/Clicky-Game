import React, {Component} from 'react';
import Card from './Card';
import Images from "./../images.json"
import shuffle from "shuffle-array";

class Container extends Component {

    constructor(props) {
        super(props);

        // setting the state: score is at 1, images is pulling in the image json, and we have no selected images yet
        this.state = {
            score: 1,
            images: Images,
            selectedImages: []
        };
    }

    
    // when the user clicks on a image card
    handleClick = (e) => {

        let id = e.target.id;
        let exists = false;

        this.state.selectedImages.forEach(image => {
// eslint-disable-next-line
            if (image.id == id) {
                exists = true;
            }
        })

        if (exists) {
            this.endGame();
        }

        else {
            this.state.images.forEach(image => {
                // eslint-disable-next-line
                if (image.id == id) {
                    this.setState({selectedImages: [...this.state.selectedImages, image]});
                    console.log(this.state.selectedImages);

                    this.updateScore();
                }
            })  
        }
        

        // Shuffle
        this.setState({ images: shuffle(this.state.images)});
        console.log("Shuffling images");

    }

    // update the currentscore
    updateScore = () => {
        // set the new score
        this.setState({score: this.state.score + 1});
        this.props.updateCurrentScore(this.state.score);
        console.log("Score: " + this.state.score);
    }

    // end the game
    endGame = () => {
        console.log("End!");
        this.props.updateTopScore(this.state.score);
        this.setState({score: 1, selectedImages: []});
        this.props.updateCurrentScore(0);
    }

    render() {
        return (
            <div className="container" id="card-container">
                <div className="row">
                    {Images.map(image => <Card src={image.image} key={image.id} id={image.id} alt={image.name} endGame={this.endGame} handleClick={this.handleClick} score={this.state.score} />)}
                </div>
            </div>
        );
    }
}

export default Container;