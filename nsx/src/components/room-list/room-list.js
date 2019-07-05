import React from 'react'
import socket from '../../services/socket-service/socket-service';

class RoomList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            receiveMessages: '',
            buttonTitle: 'Join',
            userName: 'K son',
            message: '',
            messages: [
            ]
          }
    }

    componentDidMount() {
        // onRoomJoin()
        onReceived()
    }

    onRoomJoin() {
        this.state.setMessage
    }

    onReceived() {
        socket.on('receive-message', (value) => {
          let item = {
            user: value.userName,
            avatar: value.avatar,
            message: value.message,
            createAt: value.created_at,
            fr: value.userName == this.state.userName ? 'fr' : ''
          }
          let items = this.state.messages
          items.push(item)
          this.setState({
            messages: items
          })
          //   this.props.callback(item)
          // //   this.setMessage(`${value.userName}: ${value.message}`)
        })
      }

      setMessage(message) {
        let messages = this.state.receiveMessages
        // messages = messages + '\n' + message
        messages = message + '\n' + messages
        this.setState({
          receiveMessages: messages
        })
      }

    render() {
        return (
            <React.Fragment>
                <div className='room-container'>
                    <ul className={this.state.message}>
                        <li>WebD002</li>
                        <li>D002</li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default RoomList