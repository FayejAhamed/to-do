import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mt-4 container'>
            <h1 className='text-bold'> Our Todo Apps</h1>
            
            <Link className='btn btn-secondary' to='/add'>Todo Apps</Link>
        </div>
    );
};

export default Home;