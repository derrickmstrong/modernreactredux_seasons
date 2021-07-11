import React from 'react'

const Loader = ({message = "Loading..."}) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{message}</div>
        </div>
    )
}

export default Loader;