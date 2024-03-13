import "./Popup.css";
import React, { useState } from "react";

interface PopupProps {
    optionSuccess: boolean;
    setOptionSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    optionFailed: boolean;
    setOptionFailed: React.Dispatch<React.SetStateAction<boolean>>;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    setDateFrom: React.Dispatch<React.SetStateAction<string>>;
    setDateTo: React.Dispatch<React.SetStateAction<string>>;
}

const Popup: React.FC<PopupProps> = (props) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [dateComp, setDateComp] = useState<boolean>(true);
    const [statusComp, setStatusComp] = useState<boolean>(false);
    const [dateFrom, setDateFrom] = useState<string>('0/0/0');
    const [dateTo, setDateTo] = useState<string>("90000/12/31");

    const handleDateFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateFrom(event.target.value);
    };

    const handleDateToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateTo(event.target.value);
    };

    const handlePopupCategoryDate = () => {
        setDateComp(true);
        setStatusComp(false);
    };

    const handleApply = () => {
        let tempStatus = props.optionFailed ? "Failed" : props.optionSuccess ? "Success" : "";
        props.setStatus(tempStatus);
        props.setOptionSuccess(props.optionSuccess);
        props.setOptionFailed(props.optionFailed);
        props.setDateFrom(dateFrom);
        props.setDateTo(dateTo);
    };

    const handlePopupCategoryStatus = () => {
        setDateComp(false);
        setStatusComp(true);
    };

    const hideComponent = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            {isVisible && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="filter-popup">
                            <div className="popupCategory">
                                <button onClick={handlePopupCategoryDate}>DATE</button>
                                <button onClick={handlePopupCategoryStatus}>STATUS</button>
                            </div>
                            <div>
                                {dateComp && (
                                    <div>
                                        <h5>Date</h5>
                                        <p>Date From</p>
                                        <input onChange={handleDateFromChange} type="date"></input>
                                        <p>Date To</p>
                                        <input onChange={handleDateToChange} type="date"></input>
                                    </div>
                                )}

                                {statusComp && (
                                    <div>
                                        <h5>Status</h5>
                                        <input
                                            onClick={() => props.setOptionSuccess(!props.optionSuccess)}
                                            id="Completed"
                                            value="Completed"
                                            type="checkbox"
                                        />
                                        <label>Completed</label>

                                        <input
                                            onClick={() => props.setOptionFailed(!props.optionFailed)}
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
                            <button className="reset-button">RESET</button>
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
