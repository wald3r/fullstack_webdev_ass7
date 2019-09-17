import React from 'react'
import { connect } from 'react-redux'


const Notification = (props) => {

    const notificationStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 25,
        backgroundColor: 'gainsboro',
        border: '1px solid green',
        padding: '35px',
        fontWeight: 'bold'
    }

    if(props.notification === ''){
        return null
    }
    else{
        return (
            <div style={notificationStyle}>
                {props.notification}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notification: state.notification,
    }
}

export default connect(mapStateToProps)(Notification)


