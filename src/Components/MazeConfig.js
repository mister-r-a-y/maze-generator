import React, { Component } from 'react'
import MazeControl from './MazeControl'

export default class mazeConfig extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      type: props.type || 'grid',
      width: props.width || 30,
      height: props.height || 20
    }
    
    this.onWidth = this.onWidth.bind(this)
    this.onHeight = this.onHeight.bind(this)
    this.onRedraw = this.onRedraw.bind(this)
  }
  
  onWidth(e) {
    this.setState({ width: e.target.value })
  
  }
  
  onHeight(e) {
    this.setState({ height: e.target.value })
  }

  onRedraw(e) {
    this.setState({ width: this.state.width, height: this.state.height })
  }
  
  render() {
    return (
      <div className='maze-controller'>
        <form>
          <div className='size-inputs'>
            <label for="height">Height:</label>
            <input type="text" placeholder="2-100" id="height" value={ this.state.height } onChange={ this.onHeight } />
            <label for="width">Width:</label>
            <input type="text" placeholder='2-100' id="width" value={ this.state.width } onChange={ this.onWidth } />
          </div>
        </form>

        <MazeControl width={ this.state.width } height={ this.state.height } type={ this.state.type } />
        
        <div className="button-container">
          <input className="button button-outline" type="button" value="Redraw" onClick={ this.onRedraw } />
        </div>
      </div>
    )
  }
}