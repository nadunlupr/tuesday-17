import { useState } from 'react';
import axios from 'axios';

function CreateNews(props) {
    // const [title, setTitle] = useState('Initial title');
    // const [slug, setSlug] = useState('');
    const initialState = {
        title: '',
        slug: '',
        text: ''
    };
    const [state, setState] = useState(initialState);

    const onTextChange = (event) => {
        const {
            target: {
                value: inputText,
            }
        } = event;
        setState(prevState => ({ ...prevState, text: inputText }))
    }

    const createNews = () => {
        axios.defaults.baseURL = 'http://88.200.63.148:5009';
        axios.post('/novice', {
            ...this.state
        })
    }

    return (
        <div className='create-news'>
            <div className='container'>
                <h1>Add News</h1>
                <br />

                <input onChange={({ target: { value: inputTitle } }) => {
                    setState(prevState => ({ ...prevState, title: inputTitle }))
                }}
                    type='text' placeholder='Title' value={state.title} />

                <input type='text' onChange={({ target: { value: inputSlug } }) => {
                    setState(prevState => ({ ...prevState, slug: inputSlug }))
                }}
                    placeholder='Slug' value={state.slug} />

                <textarea onChange={event => onTextChange(event)}
                    placeholder='Enter your news here' />
            </div>
            <button onClick={() => createNews()}>Create News</button>
        </div>
    )
}

export default CreateNews;