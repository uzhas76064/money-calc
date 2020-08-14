import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

export default class App extends Component {
    state = {
      transactions: [],
        description: '',
        amount: null,
        balance: 0
    };

    addDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    };

    addAmount = (e) => {
        this.setState({
            amount: Number(e.target.value)
        })
    };

    addTransaction =(add) => {
      const transactions = [...this.state.transactions];

      const  transaction = {
          id: `cmr${(+new Date()).toString(16)}`,
          description: this.state.description,
          amount: this.state.amount,
          add
      };

      transactions.push(transaction);
      this.setState({
          transactions,
          balance: transactions.reduce((a, b) => a + b.amount, 0)
      });

        console.log(transactions)
    };

    render() {
        return (
            <>
                <Header/>
                <Main transactions={this.state.transactions}
                      addAmount={this.addAmount}
                      addDescription={this.addDescription}
                      addTransaction={this.addTransaction}
                      balance={this.state.balance}/>
            </>
        );
    }
}
