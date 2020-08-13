import React from "react";

const OperationForm = (props) => {
    return (
        <form id="form">
            <label>
                <input onChange={props.addDescription} type="text" className="operation__fields operation__name"
                       placeholder="Наименование операции"/>
            </label>
            <label>
                <input onChange={props.addAmount} type="number" className="operation__fields operation__amount" placeholder="Введите сумму"/>
            </label>
            <div className="operation__btns">
                <button
                    onClick={() => props.addTransaction(false)}
                    type="button"
                    className="operation__btn operation__btn-subtract">РАСХОД</button>
                <button
                    onClick={() => props.addTransaction(true)}
                    type="button"
                    className="operation__btn operation__btn-add">ДОХОД</button>
            </div>

        </form>
    );
};

export default OperationForm;
