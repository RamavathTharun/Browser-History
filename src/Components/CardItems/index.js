import './index.css'

const CardItems = props => {
  const {List, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = List

  const OnDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="list-card">
        <p className="date">{timeAccessed}</p>
        <div className="details">
          <img src={logoUrl} alt="domain logo" className="logo-url" />
          <p className="para">{title}</p>
          <p className="link">{domainUrl}</p>
        </div>
        <div className="delete">
          <button data-testid="delete" onClick={OnDeleteItem}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
              alt="delete"
              className="del-logo"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CardItems
