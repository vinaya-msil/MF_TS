import "./Popup.css";
import { useDispatch, useSelector } from "react-redux";
import { changeOptionSuccess,changeOptionFailed,
     changeOptionSetDateFrom, changeOptionSetDateTo
     ,changeStatus, changeIsHidden,toggleSetDateComp, toggleSetStatusComp   } from "../../redux/TableSlice";
interface PopupProps {}

const Popup: React.FC<PopupProps> = (props) => {
    const reduxClass = useSelector((state:any) => state.tableSlice);
    const dispatch = useDispatch();
    
    const handleDateFromChangeNew = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeOptionSetDateFrom(event.target.value));};
    const handleDateToChangeNew = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeOptionSetDateTo(event.target.value));};
    const handlePopupCategoryDate = () => {
        dispatch(toggleSetDateComp(true));
        dispatch(toggleSetStatusComp(false));
    };
    const handleApply = () => {
        let tempStatus = reduxClass.optionFailed ? "Failed" : reduxClass.optionSuccess ? "Success" : "";
        dispatch(changeStatus(tempStatus));
        hideComponent();
    };
    const handlePopupCategoryStatus = () => {
        dispatch(toggleSetDateComp(false));
        dispatch(toggleSetStatusComp(true));
    };
    const hideComponent = () => {
        dispatch(changeIsHidden());
    };
    return (
        <>
            {reduxClass.isVisible && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="filter-popup">
                            <div className="popupCategory">
                                <button onClick={handlePopupCategoryDate}>DATE</button>
                                <button onClick={handlePopupCategoryStatus}>STATUS</button>
                            </div>
                            <div>
                                {reduxClass.dateComp && (
                                    <div>
                                        <h5>Date</h5>
                                        <p>Date From</p>
                                        <input onChange={handleDateFromChangeNew} type="date"></input>
                                        <p>Date To</p>
                                        <input onChange={handleDateToChangeNew} type="date"></input>
                                        
                                    </div>
                                )}

                                {reduxClass.statusComp && (
                                    <div>
                                        <h5>Status</h5>
                                        <input
                                            onClick={() => dispatch(changeOptionSuccess(reduxClass.optionSuccess))}
                                            id="Completed"
                                            value="Completed"
                                            type="checkbox"
                                        />
                                        <label>Completed</label>

                                        <input
                                            onClick={() => dispatch(changeOptionFailed(reduxClass.optionFailed))}
                                            id="Failed"
                                            value="Failed"
                                            type="checkbox"
                                        />
                                        <label>Failed</label>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="cancelAndApplyButtons">
                            <br />
                            <button onClick={handleApply} className="apply-button">
                                APPLY
                            </button>
                            <br />
                            <button className="closeButton" onClick={hideComponent}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
