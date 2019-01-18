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
      error: null
    }

    this.onSearch = this.onSearch.bind(this)
    this.getMovies = this.getMovies.bind(this)
    
  }
  
  onSearch(text){
    if(text!==''){
      this.getMovies(text) 
    }
    else {
      console.log('No hay busqueda')
    }
    
  }

  async getMovies(text){
    let { data } = await Datasource.getMoviesByName(text)
    if(data.Response === 'True'){
      this.setState({
      Search: data.Search,
      totalResult: data.totalResults
    })
    } else {
      this.setState({Search:[],totalResult:0})
    }
  }

  render () {
    return (
      <div onScroll={(e => console.log(e))} >
        <h1>List Movies</h1>
        <div>
          <Input search={ this.onSearch }/>
          <h3>Results: { this.state.totalResult }</h3>
          <div className='List-container'>
            
            { this.state.Search.map((item, index) => <Item search={item} key={index} />) }
          </div>
        </div>
      </div>
    )
  }
}
