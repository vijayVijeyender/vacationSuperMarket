export default function Products(){
    return <section className="photo-gallery" id="products">
    <div className="container">
        <div className="row mb-3">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2>Products</h2>
                <p className="w-lg-50">Here You can find the groups of products that meet a similar consumer need or that can substitute for each</p>
            </div>
        </div>
        <div className="row gx-2 gy-2 row-cols-md-2 row-cols-xl-3 photos" data-bss-baguettebox="">

            <div className="col item">
                <div className="card border-0 shadow-none">
                    <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="src/assets/img/ready_to_cook.jpeg" />
                        <div className="row" style={{
                            "margin": "0px",
                            "marginRight": "0px",
                            "marginBottom": "10px",
                            "marginTop": "0px"
                        }}>
                            <div className="col">
                                <h5 className="fw-bold text-primary mb-0">Maggi</h5>
                            </div>
                            <div className="col align-self-center"><select>
                                    <optgroup >
                                        <option value="13">250 g</option>
                                        <option value="12" selected>500 g</option>
                                        <option value="14">1kg</option>
                                    </optgroup>
                                </select></div>
                        </div>
                        <div className="row" style={{
                            "marginRight": "-20px",
                            "marginBottom": "10px"
                        }}>
                            <div className="col" style={{
                                "background": "#e43c3c"
                            }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                                        fill="currentColor" />
                                </svg></div>
                            <div className="col"><input type="number" style={{
                                "width": "100px"
                            }} /></div>
                            <div className="col" style={{
                                "background": "#50d966"
                            }}><svg className="icon icon-tabler icon-tabler-plus" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg></div>
                        </div><button className="btn btn-primary" type="button" style={{
                        "width": "57%"
                    }}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>;
}