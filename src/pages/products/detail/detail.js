import React from 'react'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

class ProductDetail extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        const {match: {params}} = this.props
        console.log(params, params.id)
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}
export default ProductDetail