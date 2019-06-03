import React from 'react';
import './header-component.scss'

class HeaderComp extends React.Component {
    render () {
        return (
            <div className='main-header'>
                <ul>
                    <li>
                        <a href='/'>
                        trang chu
                        </a>
                    </li>
                    <li>
                        <a href='/products'>
                        san pham
                        </a>
                    </li>
                    <li>
                        <a href='/farms'>
                        nong trai
                        </a>
                    </li>
                    <li>
                        tin tuc
                    </li>
                    <li>
                        lien he
                    </li>
                </ul>
            </div>
        )
    }
}
export default HeaderComp