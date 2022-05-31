import React from 'react'
import './index.css'
class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <div className='footer'>
                    Copyright 2022 by Nithi Tex. All Rights Reserved.
                </div>
            </React.Fragment>
        )
    }
}
export default Footer;