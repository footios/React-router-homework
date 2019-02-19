import React from 'react';

const _404Error = ({location}) => {

    return (   
        <div>
            <h1 style={{textAlign:'center'}}>Page not found at: <code>{location.pathname}</code></h1>
        </div>
    )
}
export default _404Error