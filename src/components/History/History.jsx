import React from "react";
import HistoryItem from "./HistoryItem";

const History = (props) => {
    return (
        <section className="history">
            <h3>История расходов</h3>
            <ul className="history__list">
                {props.transactions.map(item => <HistoryItem key={item.id} transaction={item}/>)}
            </ul>
        </section>
    );
};

export default History;
