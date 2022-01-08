import store from "../store";
import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(){
    super()
    this.state={
      count: store.getState().count
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}
