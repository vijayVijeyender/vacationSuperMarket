export function Home ()
{
    return (
        <div className="container">
    <div className="row">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2>Water</h2>
            <p className="w-lg-50">Water Can which are listed below are 25 Liters per can. You can choose up to 10 can&#39;s per order. We are happy to deliver it to your home.</p>
        </div>
    </div>
    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div className="col" style={{
            "borderStyle": "solid"
        }}>
            <div className="p-4"><span className="badge rounded-pill bg-primary mb-2">Water Can</span>
                <h4>Delivery with in 24Hrs</h4>
                <p>Water can which you order today will be delivered with in 24 Hrs. Delivery charge will be Low.</p>
                <div className="row row-cols-1 justify-content-center align-items-center">
                    <div className="col-xl-9 offset-4">
                        <input className="border rounded-pill border-5 focus-ring form-control-sm float-start" type="number" max="10" min="1" step="1" name="24Hrs" required />
                        </div>
                    <div className="col-xl-9">
                        <button className="btn btn-primary font-monospace text-truncate" type="button" style={{
                        "margin": "0px",
                        "marginTop": "10px",
                        "marginLeft": "30px"
                    }}>Add To Cart</button></div>
                </div>
            </div>
        </div>
        <div className="col" style={{
            "borderStyle": "solid"
        }}>
            <div className="p-4"><span className="badge rounded-pill bg-primary mb-2">Water Can</span>
                <h4><strong>Delivery with in 12Hrs</strong></h4>
                <p>Water can which you order today will be delivered with in 12 Hrs. Delivery charge will be Medium.</p>
                <div className="row row-cols-1 justify-content-center align-items-center">
                    <div className="col-xl-9 offset-4"><input className="border rounded-pill border-5 focus-ring form-control-sm float-start" type="number" max="10" min="1" step="1"  name="24Hrs" required /></div>
                    <div className="col-xl-9"><button className="btn btn-primary font-monospace text-truncate" type="button" style={{
                        "margin": "0px",
                        "marginTop": "10px",
                        "marginLeft": "30px"
                    }}>Add To Cart</button></div>
                </div>
            </div>
        </div>
        <div className="col" style={{
            "borderStyle": "solid"
        }}>
            <div className="p-4"><span className="badge rounded-pill bg-primary mb-2">Water Can</span>
                <h4><strong>Delivery with in 02Hrs</strong></h4>
                <p>Water can which you order today will be delivered with in 2 Hrs. Delivery charge will be High.</p>
                <div className="row row-cols-1 justify-content-center align-items-center">
                    <div className="col-xl-9 offset-4"><input className="border rounded-pill border-5 focus-ring form-control-sm float-start" type="number" max="10" min="1" step="1" name="24Hrs" required /></div>
                    <div className="col-xl-9"><button className="btn btn-primary font-monospace text-truncate" type="button" style={{
                        "margin": "0px",
                        "marginTop": "10px",
                        "marginLeft": "30px"
                    }}>Add To Cart</button></div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}