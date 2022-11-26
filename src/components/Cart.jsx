import React from "react";



const ItemList = () => {


    return(
        <>
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="fs-4 mb-5">The total amount</div>
                <div className="d-flex justify-content-between mb-3">
                  <div className="fs-6 fw-lighter">Temporary amount</div>
                  <div className="fs-6 fw-lighter">$53.90 </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <div className="fs-6 fw-lighter">Shopping</div>
                  <div className="fs-6 fw-lighter">Gratis</div>
                </div>
            </div>
        
        </>
    )
    
}

export default ItemList