import React from 'react';
import { withRouter } from 'react-router-dom'

const _404Error = ({location}) => {

    return (   
        <div>
            <h1>Page not found at: <code>{location.pathname}</code></h1>
        </div>
    )
}
export default withRouter(_404Error)