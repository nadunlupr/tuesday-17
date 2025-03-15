import React from 'react';

class LessonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { viewSummary: false }
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
                <button onClick={() => this.setState({ viewSummary: !this.state.viewSummary })}>
                    View Summary
                </button>

                {
                    this.state.viewSummary &&
                    <div id="moreInfo"
                        className="more-info-panel">
                        <p className="black-text">
                            If you take the first lesson you can do the second one :)
                        </p>
                        <a href="./lesson-page.html">Go to lesson</a>
                    </div>
                }
            </div>
        );
    }
}

export default LessonCard;