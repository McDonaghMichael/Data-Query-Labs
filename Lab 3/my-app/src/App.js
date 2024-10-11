import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Content />} />
                <Route path="/read" element={<Footer />} />
                <Route path="/create" element={<Header />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;