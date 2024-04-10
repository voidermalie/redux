import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
//import Statistics from '../../pages/Statistics/Statistics'

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<div>Rien par ici</div>} />
            </Routes>
        </Router>
    )
}

export default AppRouter;
