import React from 'react'
import Button from 'react-bootstrap/Button'
import {Card, CardDeck} from 'react-bootstrap'
import './home.scss'
import {Link} from 'react-router-dom'
  
class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    name: 'phuong'
                },
                {
                    name: 'quyen'
                },
                {
                    name: 'nguyen'
                },
                {
                    name: 'hanh'
                },
                {
                    name: 'mai'
                },
                {
                    name: 'thuan'
                },
                {
                    name: 'tuan anh'
                },
                {
                    name: 'thuan'
                }
            ]
        }
        console.log(this.state.data)
    }
    render() {
            // const els = this state.data.map((item, index) => {
                return (
            //         <li>
            //             <span className='item-title'>Name:</span>
            //             <span className='item-title'>{item.name}</span>
            //         </li>
            //     )
            //     }
            // )
            <React.Fragment>
                <div className='home-main-top'>
                    <ul>
                        {
                            this.state.data.map((item, index) => {
                                return (
                                    // <li>
                                    //     <span className='item-title'>Name:</span>
                                    //      <span className='item-title'>{item.name}</span>
                                    //  </li>
                                    <Link to={'/product/' + item.name}>
                                        <Card className="main-card" style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSma6DyOdoKm9vCYlUYbFvFbrLGqpyBk-X66r_zpG5n85H4Vpg1Gg" />
                                                <Card.Body>
                                                    <Card.Title>Name:</Card.Title>
                                                    <Card.Text>
                                                    {item.name}
                                                    </Card.Text>
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                        </Card>
                                    </Link>
                                )
                                }

                             )
                            // els
                        }
                        
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
export default HomePage