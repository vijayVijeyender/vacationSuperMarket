import { useNavigate } from "react-router-dom";

interface Model{
    modelTitle:string,
    modelContent:string,
    setShowModel:Function,
    resetbrand:Function
}
export  function Model(props:Model){
    const navigate= useNavigate();
return (
    <div className="modal fade show" id="modal-1" role="dialog" style={{
        "display": "block"
    }}>
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">{props.modelTitle}</h4><button
                className="btn-close"
                type="button"
                onClick={()=>{props.setShowModel('');
            props.resetbrand();navigate("/brand");
            }}
                aria-label="Close"
                data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
                <p>{props.modelContent}</p>
            </div>
            <div className="modal-footer"><button className="btn btn-primary" type="button">OK</button></div>
        </div>
    </div>
</div>
);
} 