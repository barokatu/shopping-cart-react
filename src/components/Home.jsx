import 'bootstrap/dist/css/bootstrap.css';
import ItemList from './ItemList';
import Cart from './Cart'
import Coupon from './Coupon'

const Home = () => {
    return (
        <>
            <div className='d-flex container-md justify-content-center mb-10'>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "white"}}>
                    <div className="container-md">
                        <div className="navbar-brand" href="#"><b>Shopping Cart</b></div>
                    </div>
                </nav>
            </div>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-8">
                        <ItemList />
                    </div>
                    <div className="col-4">
                        <Cart />
                        <Coupon />
                    </div>
                </div>
                </div>
        </>
    )
}

export default Home