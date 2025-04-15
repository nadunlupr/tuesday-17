import { useState } from 'react';
// import axios from 'axios';
import api from '../../services/api';
import { useNavigate } from 'react-router';

function CreateNews(props) {
    // const [title, setTitle] = useState('Initial title');
    // const [slug, setSlug] = useState('');    
    const initialState = {
        title: '',
        slug: '',
        text: ''
    };
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();
    
    const onTextChange = (event) => {
        const {
            target: {
                value: inputText,
            }
        } = event;
        setState(prevState => ({ ...prevState, text: inputText }))
    }

    const createNews = async () => {
        // axios.defaults.baseURL = 'http://88.200.63.148:9002';
        try {
            const { data: { id } } = await api.post('/novice', {
                ...state
            })
            // .then(res => {
            //     console.log('response: ', res)
            // })
            // .catch(err => console.err('err: ', err));
            console.log('record id: ', id);
            navigate(`/success/${id}`);

        }
        catch (error) {
            console.error('Request error: ', error);
        }
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
                <button onClick={() => createNews()}>Create News</button>
            </div>
        </div>
    )
}

export default CreateNews;