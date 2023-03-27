import React from 'react'

function Card() {
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9607/1674811994137/front-left-side-47.jpg?tr=w-880,h-495" class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is some important text.</p>
                    <div className='container w-100'> </div>
                    <select className='m-2 h=100  bg-success'>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}> {i + 1} </option>
                            )
                        })}
                    </select>

                    <select className='m-2 h=100  bg-success rounded'>
                        <option value="Sedan car">Sedan car</option>
                        <option value="SUV car">SUV car</option>

                    </select>

                    <div className='d-inline h-100 '>
                        Total Price

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card