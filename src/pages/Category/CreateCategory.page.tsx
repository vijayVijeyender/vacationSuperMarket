export default function CreateCategory(){
return (
    <form>
    <div className="row">
        <div className="col">
            <h1 style={{
                "textAlign": "center"
            }}>Create a Category</h1>
        </div>
    </div>
    <div className="row text-center d-flex flex-row justify-content-center">
        <div className="col-auto col-xl-6"><label className="form-label float-start form-label" htmlFor="brandname">Enter Category Name</label><input className="form-control form-control" type="text" name="brandname" placeholder="Enter Category name" /></div>
        <div className="col-auto"><label className="form-label float-start form-label">Enter Category Tamil Name</label><input className="form-control form-control" type="text" placeholder="Enter Category name in tamil" /></div>
    </div>
    <div className="row d-flex justify-content-center" style={{
        "marginTop": "28px"
    }}>
        <div className="col-3" style={{
            "textAlign": "center"
        }}><button className="btn btn-success" type="button" style={{
            "textAlign": "center"
        }}>Create</button></div>
        <div className="col-3" style={{
            "textAlign": "center"
        }}><button className="btn btn-danger" type="button" style={{
            "textAlign": "center"
        }}>cancel</button></div>
    </div>
</form>
);
}