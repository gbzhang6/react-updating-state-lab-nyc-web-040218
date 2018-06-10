import React, {Component} from 'react';

class YouTubeDebugger extends Component{
  constructor(props){
    super(props)
    this.state = {
       errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } }
    }
  }

  clickEvent = (e) =>{
    this.setState({
      settings: {...this.state.settings, bitrate: 12}
    })
  }

  clickEvent2 = (e) =>{
    this.setState({
      settings: {...this.state.settings, video: {resolution: '720p'}}
    })
  }

  render(){
    return(
      <div>
        <button className = 'bitrate' onClick={this.clickEvent}>{this.state.settings.bitrate}</button>

        <button className = 'resolution' onClick={this.clickEvent2}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
