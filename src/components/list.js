import React from 'react'
import Item from './item'
import Input from './input'
import Datasource from '../api'

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Search: [],
      totalResult: 0
    }
  }
  async componentDidMount () {
    let { data } = await Datasource.getMoviesByName('batman')
    this.setState({
      Search: data.Search,
      totalResult: data.totalResults
    })
  }

  render () {
    return (
      <div onScroll={(e => console.log(e))}>
        <h1>List Movies</h1>
        <div>
          <Input />
          <div>
            <h3>Results: { this.state.totalResult }</h3>
            { this.state.Search.map((item, index) => <Item search={item} key={index} />) }
          </div>
        </div>
      </div>
    )
  }
}
