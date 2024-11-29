import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/global/Footer';
import Read from './components/Read';
import Create from './components/Create';
import Content from './components/global/Content';
import NavigationBar from './components/global/NavigationBar';
import Edit from './components/Edit';

function App() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/home" element={<Content />} />
                <Route path="/read" element={<Read />} />
                <Route path="/create" element={<Create />} />
                <Route path='/edit/:id' element={<Edit />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;