import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { FirstApp } from './FirstApp'
import './styles.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <StrictMode>
        <FirstApp title='Hi title' subtitle={ 12345 }/>
    </StrictMode>
)