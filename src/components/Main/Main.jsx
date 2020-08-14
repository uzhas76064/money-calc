import React from "react";
import Total from "../Total/Total";
import History from "../History/History";
import Operation from "../Operation/Operation";

const Main = (props) => {
    return (
        <main>
            <div className="container">
                <Total income={props.income} balance={props.balance}/>
                <History transactions={props.transactions}/>
                <Operation addAmount={props.addAmount}
                           addDescription={ props.addDescription}
                           addTransaction={props.addTransaction}/>
            </div>
        </main>
    );
};

export default Main;
