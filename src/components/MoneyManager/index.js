import './index.css'

import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    tansactionList: [],
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    cashType: '',
  }

  onTitleChange = e => {
    this.setState({title: e.target.value})
  }

  onAmountChange = e => {
    this.setState({amount: e.target.value})
  }

  onTypeChange = e => {
    this.setState({cashType: e.target.value})
  }

  onFormSubmitted = e => {
    e.preventDefault()
    const {title, amount, cashType} = this.state
    const newtransaction = {
      id: uuidv4(),
      title,
      amount,
      cashType,
    }

    this.setState(prevState => ({
      tansactionList: [...prevState.tansactionList, newtransaction],
      title: '',
      amount: '',
      cashType: '',
    }))

    if (cashType === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income + JSON.parse(amount),
      }))
    }
    if (cashType === 'EXPENSES') {
      this.setState(prevState => ({
        expenses: prevState.expenses + JSON.parse(amount),
      }))
    }
  }

  onRemoved = id => {
    const {tansactionList} = this.state
    const deleted = tansactionList.filter(each => each.id !== id)
    this.setState({tansactionList: deleted})
    const item = tansactionList.filter(each => each.id === id)
    if (item[0].cashType === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income - JSON.parse(item[0].amount),
      }))
    }
    if (item[0].cashType === 'EXPENSES') {
      this.setState(prevState => ({
        expenses: prevState.expenses - JSON.parse(item[0].amount),
      }))
    }
  }

  render() {
    const {tansactionList, income, expenses, title, amount, cashType} =
      this.state
    return (
      <div className="background-container">
        <div className="welcome-header">
          <h1 className="name">HI, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} />
        <div className="form-history-con">
          <div className="form-card">
            <h1>Add Transaction</h1>
            <form>
              <label htmlFor="title">TITLE</label>
              <br />
              <input
                value={title}
                onChange={this.onTitleChange}
                id="title"
                type="text"
                placeholder="TITLE"
              />
              <br />
              <label htmlFor="amount">AMOUNT</label>
              <br />
              <input
                value={amount}
                onChange={this.onAmountChange}
                id="amount"
                type="text"
                placeholder="AMOUNT"
              />
              <br />
              <label htmlFor="type">TYPE</label>
              <br />
              <select value={cashType} onChange={this.onTypeChange} id="type">
                <option value={transactionTypeOptions[0].optionId} selected>
                  {transactionTypeOptions[0].displayText}
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <br />
              <button
                className="add-btn"
                type="button"
                onClick={this.onFormSubmitted}
              >
                Add
              </button>
            </form>
          </div>
          <div className="history-card">
            <h1>History</h1>
            <div className="table-con">
              <p className="col">Title</p>
              <p className="col">Amount</p>
              <p className="col">Type</p>
            </div>
            <ul>
              {tansactionList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  onRemoved={this.onRemoved}
                  eachTransaction={eachTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
