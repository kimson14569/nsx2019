import React from 'react'
import Button from 'react-bootstrap/Button'
import {Card, CardDeck} from 'react-bootstrap'
import './home.scss'
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
  render(<ControlledCarousel />);
  
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