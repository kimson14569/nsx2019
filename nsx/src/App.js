import React from 'react';
import './App.scss';
import socketIOClient from 'socket.io-client'
const socket = socketIOClient('192.168.1.152:5000')

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      socketServer: '192.168.1.152:5000',
      receiveMessages: '',
      buttonTittle: 'Join',
      userName: 'Kson'
    }
  }

  componentDidMount() {
    let self = this
    socket.on('receive-message', (value) => {
      this.setMessage(`${value.userName}: ${value.message}`)
    })
    this.onJoined()
    this.onLeaved()
  }

  onReceived() {
    socket.on('receive-message', (value) => {
      this.setMessage(`${value.userName}: ${value.userName}`)
    })
  }

  onJoined() {
    socket.on('joined', (user) => {
      console.log(user)
      this.setMessage(`User ${user.userName} joined`)
    })
  }

  onLeaved() {
    socket.on('leaved', (user) => {
      console.log(user)
      this.setMessage(`User ${user.userName} leaved`)
    })
  }

  setMessage(message) {
    let self = this
    let messages = self.state.receiveMessages
      messages = messages + '\n' + message
      self.setState({
        receiveMessages: messages
      })
  }

  onKeyPress = event => {
    if (event.key === 'Enter') {
      console.log(event.target.value)
      socket.emit('send-message', {
        userName: this.state.userName,
        message: event.target.value
      })
    }
  }

  onClick = event => {
    console.log(event)
    let title = 'Join'
    if(this.state.buttonTittle === 'Join') {
      title = "Leave"
      this.join()
    } else {
      this.leave()
    }
    this.setState({
      buttonTittle: title
    })
  }

  join() {
    socket.emit('join', {
      userName: this.state.userName
    })
  }

  leave() {
    socket.emit('leave', {
      userName: this.state.userName
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-Container">
          <div className="chat-box">
            <div className="messages">
              <textarea value={this.state.receiveMessages}></textarea>
            </div>
            <div className="send-message">
              <input onKeyPress={this.onKeyPress}></input>
              <button onClick={e => this.onClick(e)}>{this.state.buttonTittle}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
