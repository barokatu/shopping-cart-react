import React from "react";

const cartItem = [
    {
        "name" : "Blue Denim Shirt",
        "category" : "Shirt Blue",
        "image" : "https://cf.shopee.co.id/file/1bfe700c2259c94fbf6713c81c1479ac",
        "color" : "Blue",
        "size" : "M",
        "price" : 17.99
    },
    {
        "name" : "Red Hoodie",
        "category" : "Hoodie Red",
        "image" : "https://cf.shopee.co.id/file/1bfe700c2259c94fbf6713c81c1479ac",
        "color" : "Red",
        "size" : "M",
        "price" : 35.99
    },
]

const ItemList = () => {
    return(
        <>
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <h4 className="mb-3">Cart (2 Items)</h4>
                {cartItem.length !== 0 && <div className="card mb-3" style={{maxWidth: "540px", border: "0px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src="https://cf.shopee.co.id/file/1bfe700c2259c94fbf6713c81c1479ac" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>}
                

            </div>
        
        </>
    )
    
}

export default ItemList