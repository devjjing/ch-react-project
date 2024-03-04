import './App.css';
import Header from './Header.tsx';
import Blog from './Blog.tsx'
import FruitList from './FruitList.tsx';
import Shop from './Shop.tsx';
import Footer from './Footer.tsx';
import Profile from './Profil.tsx';
import ParentComponent from './ParentComponent.tsx';

function App() {
    return (
        <>
            <Header />
            <FruitList />
            <Blog />
            <Shop />
            <ParentComponent />
            <Profile />
            <Footer />
        </>
    );
}

export default App;
