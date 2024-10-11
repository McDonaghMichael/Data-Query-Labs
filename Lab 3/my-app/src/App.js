import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import NavigationBar from './components/NavigationBar';

function App() {
    return (
        <Router>
            <NavigationBar />
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