import {Component} from 'react'

import './index.css'

import CardItems from '../CardItems/index'

class Home extends Component {
  state = {searchInput: ''}

  onChnageSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    const {initialHistoryList} = this.props
    const filteredList = initialHistoryList.filter(
      eachitem => eachitem.id !== id,
    )
    this.setState({searchInput: filteredList})
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state
    const searchResults = initialHistoryList.filter(eachItem =>
      eachItem.title.includes(searchInput),
    )
    return (
      <div className='bg-container'>
        <div className='header'>
          <img
            src='https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png '
            alt='app logo'
            className='logo'
          />
          <div className='search-card'>
            <img
              src='https://assets.ccbp.in/frontend/react-js/search-img.png'
              alt='search'
              className='search'
            />
            <input
              type='search'
              className='search-bar'
              placeholder='search history'
              onChange={this.onChnageSearch}
            />
          </div>
        </div>
        {searchResults.length === 0 ? (
          <p className='empty'>There is no history to show</p>
        ) : (
          <ul className='card'>
            {searchResults.map(each => (
              <CardItems
                List={each}
                key={each.id}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
