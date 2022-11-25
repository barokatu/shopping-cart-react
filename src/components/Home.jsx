import 'bootstrap/dist/css/bootstrap.css';
import ItemList from './ItemList';

const Home = () => {
    return (
        <>
            <div className='d-flex container-md justify-content-center mb-10'>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-md">
                        <a class="navbar-brand" href="#"><b>Shopping Cart</b></a>
                    </div>
                </nav>
            </div>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-8">
                        <ItemList />
                    </div>
                    <div className="col-4">
                        One of three columns
                    </div>
                </div>
                </div>
        </>
    )
}

export default Home