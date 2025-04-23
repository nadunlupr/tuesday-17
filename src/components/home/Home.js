// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import LessonCard from '../LessonCard'
import axios from 'axios';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lessons: []
        }
    }

    componentDidMount(){
        this.getLessons();
    }

    render() {        
        return (
            <div className="content-container">
                <div className="main-content">
                    <h1 className="header-text">
                        Welcome back to &lt;HTML/&gt;
                    </h1>
                    <div className="sub-heading-container">
                        <p>
                            <span className="sub-heading">
                                Let's brush up our html, js and css knowledge
                            </span>
                        </p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        {
                            this.state.lessons.map(l => <LessonCard key={l.value}
                                name={l.text} id={l.value}/>)
                        }
                    </div>
                </div>

            </div>
        );
    }

    changeName(newName){
        this.setState({name: newName})
    }

    getLessons() {
        axios.get('https://www.sfu.ca/bin/wcm/course-outlines?2015/summer/cmpt/120/')
            .then(({data: lessons}) => {
                console.log('response', lessons);
                this.setState({
                    ...this.state, 
                    lessons
                })
            })
            .catch(err => {
                console.log('error: ', err);
            })


        //     return [{
        //         name: "Lesson 1",
        //         description: "Fundamentals of React",
        //         id: 100
        //     },
        //     {
        //         name: "Lesson 2",
        //         description: "More than fundamentals",
        //         id: 101
        //     },
        //     {
        //         name: "Lesson 3",
        //         description: "Double More than fundamentals",
        //         id: 102
        //     },
        //     {
        //         name: "Lesson 4",
        //         description: "Final lesson",
        //         id: 103
        //     }
        //     ];
    }
}

export default Home;
