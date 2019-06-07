import React from 'react'

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
                <h1>Detail</h1>
            </React.Fragment>
        )
    }
}
export default ProductDetail