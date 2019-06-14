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
    socket.on('receive-message', (value) => {
      this.setMessage(`${value.userName}: ${value.message}`)
    })
    this.onJoined()
    this.onLeaved()
    this.onTypingFromMember()
    this.onReceived()
  }

  onTypingFromMember() {
    socket.on('member_typing', (user) => {
      if(user.userName !=this.state.userName)
      this.setMessage(`${user.userName} typing...`)
    })
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
      messages = message + '\n' + messages
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

  onChange = event => {
    socket.emit('typing', {
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
              <input onKeyPress={this.onKeyPress} onChange={this.onChange}></input>
              <button onClick={e => this.onClick(e)}>{this.state.buttonTittle}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
