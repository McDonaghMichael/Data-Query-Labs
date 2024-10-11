import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Read from './components/Read';
import Create from './components/Create';
import Content from './components/Content';
import NavigationBar from './components/NavigationBar';

function App() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/home" element={<Content />} />
                <Route path="/read" element={<Read />} />
                <Route path="/create" element={<Create />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;