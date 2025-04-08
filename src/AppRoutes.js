import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import LessonDetails from './components/Lesson/LessonDetails';
import CreateNews from './components/news/create-news'

export class AppRoutes extends Component {
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="lesson" element={<LessonDetails />} />
                    <Route path='news-create' element={<CreateNews/>} />
                </Routes>
            </BrowserRouter>
        );

    }
}