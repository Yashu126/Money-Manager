import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props
  return (
    <div className="acoount-details-card">
      <div className="wallet-card your-blnc">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="wallet-img"
        />
        <div>
          <p className="blnc">Your Balance</p>
          <p data-testid="balanceAmount" className="rupees">
            Rs {JSON.parse(income) - JSON.parse(expenses)}
          </p>
        </div>
      </div>
      <div className="wallet-card your-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="wallet-img"
        />
        <div>
          <p className="blnc">Your Income</p>
          <p data-testid="incomeAmount" className="rupees">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="wallet-card your-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="wallet-img"
        />
        <div>
          <p className="blnc">Your Expenses</p>
          <p data-testid="expensesAmount" className="rupees">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
