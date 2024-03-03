import './index.css'

const TransactionItem = props => {
  const {eachTransaction, onRemoved} = props
  const {id, title, amount, cashType} = eachTransaction
  const onDelete = () => {
    onRemoved(id)
  }
  return (
    <li>
      <p className="p">{title}</p>
      <p className="p">Rs {amount}</p>
      <p className="p">{cashType}</p>
      <button
        data-testid="delete"
        onClick={onDelete}
        className="delete-btn"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          width="30"
        />
      </button>
    </li>
  )
}

export default TransactionItem
