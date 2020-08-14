import React from "react";

const HistoryItem = (props) => {
    return (
        <li className={`history__item  ${props.transaction.add ? "history__item-plus" : "history__item-minus"}`}>{props.transaction.description}
            <span className="history__money">{props.transaction.amount} ₽</span>
            <button className="history__delete" onClick={() => props.deleteTransaction(props.transaction.id)}>x</button>
        </li>
    );
};

export default HistoryItem;
