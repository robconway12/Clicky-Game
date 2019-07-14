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

        // grab the selected image's id
        let id = e.target.id;

        // init variable that sees if the user selects a image that's already in selectedImages
        let exists = false;

        // loop through selected images and see if any ids match selected id
        this.state.selectedImages.forEach(image => {

            // if id matches
            if (image.id === id) {
 
                // change exists to true
                exists = true;
            }
        })

        // if exists is true
        if (exists) {
            // end the game
            this.endGame();
        }

        // otherwise
        else {
            // loop through the image json
            this.state.images.forEach(image => {
                // if the image id matches the selected id
                if (image.id === id) {
                    // add the image to the selected image array
                    this.setState({selectedImages: [...this.state.selectedImages, image]});
                    console.log(this.state.selectedImages);

                    // update the score
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