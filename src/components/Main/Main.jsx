import React from "react";
import Total from "../Total/Total";
import History from "../History/History";
import Operation from "../Operation/Operation";

const Main = () => {
    return (
        <main>
            <div className="container">
                <Total/>
                <History/>
                <Operation/>
            </div>
        </main>
    );
};

export default Main;
