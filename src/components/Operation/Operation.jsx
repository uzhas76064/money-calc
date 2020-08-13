import React from "react";
import OperationForm from "./OperationForm";

const Operation = (props) => {
    return (
        <section className="operation">
            <h3>Новая операция</h3>
            <OperationForm addDescription={props.addDescription}
                           addAmount={props.addAmount}
                           addTransaction={props.addTransaction}/>
        </section>
    );
};

export default Operation;
