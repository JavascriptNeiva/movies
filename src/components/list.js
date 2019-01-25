import React from 'react'
import Item from './item'
import Input from './input'
import Datasource from '../api'

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Search: [],
      totalResult: 0,
      error: null,
      currentPage: 1,
      loadingMore: false,
      text: ''
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.getMovies = this.getMovies.bind(this)
  }

  onSearch (text) {
    if (text !== '') {
      this.getMovies(text)
    } else {
      console.log('No hay busqueda')
    }
  }

  async getMovies (text) {
    this.setState({ text })
    let { data } = await Datasource.getMoviesByName(text)
    if (data.Response === 'True') {
      this.setState({
        Search: data.Search,
        totalResult: data.totalResults
      })
    } else {
      this.setState({ Search: [], totalResult: 0 })
    }
  }

  handleScroll (e) {
    if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 30 && !this.state.loadingMore) {
      this.handlePaginate()
    }
  }

  async handlePaginate () {
    let { currentPage, Search, text, totalResult } = this.state
    this.setState({ loadingMore: true })
    let { data } = await Datasource.getMoviesByName(text, currentPage + 1)
    if (Search.length !== totalResult) {
      if (data.Response === 'True') {
        this.setState({
          Search: [...Search, ...data.Search],
          currentPage: currentPage + 1,
          loadingMore: false
        })
      }
    }
    return null
  }

  componentDidMount () {
    // this.containerMovies.addEventListener('scroll', e => {
    //   console.log(e)
    // })
    window.addEventListener('scroll', this.handleScroll)
  }
  render () {
    return (
      <div>
        <h1>List Movies</h1>
        <div>
          <Input search={this.onSearch} />
          <h3>Results: {this.state.totalResult}</h3>
          <div className='List-container'>
            { this.state.Search.map((item, index) => <Item search={item} key={index} />) }
          </div>
          {this.state.loadingMore ? <h4>Cargando mas peliculas</h4> : null}
        </div>
      </div>
    )
  }
}
