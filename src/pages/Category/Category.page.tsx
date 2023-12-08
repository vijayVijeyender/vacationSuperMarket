import { FormattedMessage } from "react-intl"

export const Catetgory =()=>{
    return (
        <section className="photo-gallery ">
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2><FormattedMessage id="category" /></h2>
                    <p className="w-lg-50"><FormattedMessage id="categorydescription" /></p>
                </div>
            </div>
            <div className="row gx-2 gy-2 row-cols-md-2 row-cols-xl-3 photos" data-bss-baguettebox="">
                <div className="col item"><a href="/products">
                        <div className="card border-0 shadow-none">
                            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="src/assets/img/cooking_essentials.jpeg" />
                                <h5 className="fw-bold text-primary card-title mb-0"><FormattedMessage id="cookingessentials" /></h5>
                            </div>
                        </div>
                    </a></div>
                <div className="col item"><a href="#">
                        <div className="card border-0 shadow-none">
                            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="src/assets/img/baby_care.jpeg" />
                                <h5 className="fw-bold text-primary card-title mb-0">Baby Care</h5>
                            </div>
                        </div>
                    </a></div>
                <div className="col item"><a href="#">
                        <div className="card border-0 shadow-none">
                            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="src/assets/img/bakery.jpeg" />
                                <h5 className="fw-bold text-primary card-title mb-0">Bakery</h5>
                            </div>
                        </div>
                    </a></div>
                <div className="col item"><a href="#">
                        <div className="card border-0 shadow-none">
                            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="src/assets/img/beverages.jpeg" />
                                <h5 className="fw-bold text-primary card-title mb-0">Beverages</h5>
                            </div>
                        </div>
                    </a></div>
                <div className="col item"><a href="#">
                        <div className="card border-0 shadow-none">
                            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="src/assets/img/beauty_care.jpeg" />
                                <h5 className="fw-bold text-primary card-title mb-0">Beauty and Care</h5>
                            </div>
                        </div>
                    </a></div>
                <div className="col item"><a href="#">
                        <div className="card border-0 shadow-none">
                            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="src/assets/img/dairy&eggs.jpeg" />
                                <h5 className="fw-bold text-primary card-title mb-0">Dairy and Eggs</h5>
                            </div>
                        </div>
                    </a></div>
                <div className="col item"><a href="#">
                        <div className="card border-0 shadow-none">
                            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="src/assets/img/fruits&veggies.jpeg" />
                                <h5 className="fw-bold text-primary card-title mb-0">Fruits and Veggies</h5>
                            </div>
                        </div>
                    </a></div>
                <div className="col-xl-4 item"><a href="#">
                        <div className="card border-0 shadow-none">
                            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="src/assets/img/household_needs.jpeg" />
                                <h5 className="fw-bold text-primary card-title mb-0">Household Needs</h5>
                            </div>
                        </div>
                    </a></div>
                <div className="col item"><a href="#">
                        <div className="card border-0 shadow-none">
                            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="src/assets/img/household_needs.jpeg" />
                                <h5 className="fw-bold text-primary card-title mb-0">Household Needs</h5>
                            </div>
                        </div>
                    </a></div>
                <div className="col item"><a href="#">
                        <div className="card border-0 shadow-none">
                            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="src/assets/img/household_needs.jpeg" />
                                <h5 className="fw-bold text-primary card-title mb-0">Household Needs</h5>
                            </div>
                        </div>
                    </a></div>
            </div>
        </div>
    </section>
    )
}