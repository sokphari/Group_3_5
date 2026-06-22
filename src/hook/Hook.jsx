import React, { useState} from 'react'
export const Hook = () => {
    const [product,setProduct] = useState([]);
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const HandleClick = (e) => {
        // input product from form and then throw to setProduct store []
        e.preventDefault(); // when input data non fresh page
        if(name === '' || price === ''){
            return alert('name and price is required');
        }
        const newProduct = {
            id: Date.now(),  // not input because generation auto unique 34678765
            name: name,
            price: Number(price)
        };
        setProduct([...product, newProduct]);
    }

    console.log(product)
  return (
    <>
        <div className="container mt-5">
            <div className="d-flex justify-content-between my-3">
                <h1>Product List</h1>
                <button className="btn btn-primary fs-3" data-bs-toggle="modal" data-bs-target="#ClickHere">
                    ➕ Add Product
                </button>
            </div>
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                product.map((v)=>(
                                    <tr> 
                                        <td>{v.id}</td>
                                        <td>{v.name}</td>
                                        <td>{v.price}</td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
            </div>
        </div>
        {/* modal */}
        <div className="modal fade" id="ClickHere" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">List Information Product</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form action="#" onSubmit={HandleClick}>
                    <div className='form-group mb-3'>
                        <input 
                        type="text"
                        className="form-control"
                        placeholder='Enter name product'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <input 
                        type="number"
                        className="form-control"
                        placeholder='Enter Price product'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                   <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                </div> 
            </form>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
