import React from 'react'

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
                                return(
                                    <li>
                                        <span className='item-title'>Name:</span>
                                         <span className='item-title'>{item.name}</span>
                                     </li>
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