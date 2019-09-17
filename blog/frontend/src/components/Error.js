import React from 'react'
import { connect } from 'react-redux'


const Error = ( props ) => {

    const notificationStyle = {
        color: 'red',
        fontStyle: 'italic',
        fontSize: 25,
        backgroundColor: 'gainsboro',
        border: '1px solid red',
        padding: '35px',
        fontWeight: 'bold'
    }

    if(props.error === ''){
        return null
    }
    else{
        return (
            <div style={notificationStyle}>
                {props.error}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        error: state.error,
    }
}


export default connect(mapStateToProps)(Error)