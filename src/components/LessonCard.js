import React from 'react';
import axios from 'axios';
import loaderImg from '../assets/images/loader.gif';

class LessonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            viewSummary: false,
            description: ''
         }
    }
    render() {
        const {
            name = "Lesson ID",
        } = this.props;

        return (
            <div className="lesson-card">
                <h2>{name}</h2>
                <div>
                    <p>
                        Check what we are going to learn under this lesson
                    </p>
                </div>
                <button onClick={() => this.onViewClicked()}>
                    View Summary
                </button>

                {
                    this.state.viewSummary &&
                    <div id="moreInfo"
                        className="more-info-panel">
                        <p className="black-text">
                            {this.state.description}
                        </p>
                        {
                            !this.state.description &&
                            <img src={loaderImg} alt="" width="40px" />
                        }
                        <a href="./lesson-page.html">Go to lesson</a>
                    </div>
                }
            </div>
        );
    }

    onViewClicked() {
        // this.setState({ viewSummary: !this.state.viewSummary });
        this.setState(previousState => ({
            ...previousState,
            viewSummary: !this.state.viewSummary,
            description: undefined
        }));
        this.getLessonDetails();
    }

    getLessonDetails(){
        const {
            id
        } = this.props;
        axios
        .get(`https://www.sfu.ca/bin/wcm/course-outlines?2015/summer/cmpt/120/${id}`)
        .then(response => {
            const {
                data: {
                    info: {
                        description
                    } = {}
                } = {}
            } = response;
            console.log('description: ', description);
            this.setState(prevState => ({
                ...prevState,
                description
            }))
        })
        .catch(err => console.err('error: ', err));
    }
}

export default LessonCard;