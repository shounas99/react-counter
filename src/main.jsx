import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { FirstApp } from './FirstApp'
import './styles.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <StrictMode>
        <FirstApp title="Hi!" subtitle2="Subtitle 2" />
    </StrictMode>
)