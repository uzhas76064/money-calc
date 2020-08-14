import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

export default class App extends Component {
    state = {
      transactions: [],
        description: '',
        amount: 0,
        balance: 0,
        income: 0,
        expenses: 0
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
          income: this.state.income,
          add
      };

      transactions.push(transaction);
        if(add) {
            this.setState({
                income: transactions.reduce((total, elem) => total + elem.amount, 0)
            })
        }
        else if(!add) {
            this.setState({
                expenses: transactions.reduce((total, elem) => elem.income - elem.amount),
            })
        }

      this.setState({
          transactions,
          balance: transactions.reduce((total, elem) => elem.amount + total, 0)
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
                      balance={this.state.balance}
                      income={this.state.income}/>
            </>
        );
    }
}
