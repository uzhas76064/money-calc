import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

export default class App extends Component {
    state = {
      transactions: JSON.parse(localStorage.getItem('calcMoney')) || [],
        description: '',
        amount: 0,
        balance: 0,
        income: 0,
        expenses: 0
    };

    componentWillMount() {
        this.computeBalance();
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.addToStorage();
    }

    //Добавление описания к транзакции
    addDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    };

    //Ввод суммы расхода/дохода
    addAmount = (e) => {
        this.setState({
            amount: Number(e.target.value)
        })
    };

    //Подсчет доходов
    computeIncome = () => {
        return this.state.transactions
            .reduce((total, item) => item.add ? total + item.amount:total, 0)
    };

    //Подсчет расходов
    computeExpenses = () => {
        return this.state.transactions
            .reduce((total, item) => !item.add ? total + item.amount:total, 0)
    };

    //Подсчет всего баланса с доходами и расходами
    computeBalance = () => {
        const incomeRes = this.computeIncome();
        const expensesRes = this.computeExpenses();

        const totalBalance = incomeRes - expensesRes;

        this.setState({
            income: incomeRes,
            expenses: expensesRes,
            balance: totalBalance
        })
    };

    //Добавление транзакции
    addTransaction =(add) => {
      const transactions = [...this.state.transactions];

      const  transaction = {
          id: `cmr${(+new Date()).toString(16)}`,
          description: this.state.description,
          amount: this.state.amount,
          income: this.state.income,
          expenses: this.state.expenses,
          add
      };

      transactions.push(transaction);

      //Добавление транзакции в state и подсчет баланса
      this.setState({
          transactions,
      }, this.computeBalance);
    };

    //Добавление транзакций в localStorage
    addToStorage = () => {
      localStorage.setItem('calcMoney', JSON.stringify(this.state.transactions))
    };

    //Удаление транзакции
    deleteTransaction = (key) => {
        const transactions = this.state.transactions.filter(item => item.id !== key);
        this.setState({transactions}, this.computeBalance)
    };

    render() {
        return (
            <>
                <Header/>
                <Main transactions={this.state.transactions}
                      addAmount={this.addAmount}
                      addDescription={this.addDescription}
                      addTransaction={this.addTransaction}
                      deleteTransaction={this.deleteTransaction}
                      balance={this.state.balance}
                      income={this.state.income}
                      expenses={this.state.expenses}/>
            </>
        );
    }
}
