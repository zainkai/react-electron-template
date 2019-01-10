import { connect } from 'react-redux'
import React from 'react'
import { ipcRenderer } from 'electron'

const sendToReducerAction = (type, data) => {
  return { type, data }
}

class IpcListener extends React.PureComponent {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.channels.forEach(chn => {
      this.createReduxListener(chn)
    })
  }

  componentWillUnmount () {
    this.props.channels.forEach(chn => {
      this.removeReduxListener(chn)
    })
  }

  createReduxListener (channel) {
    const { sendToReducer } = this.props
    ipcRenderer.on(channel, (e, data) => sendToReducer(e, data, channel))
  }

  removeReduxListener (channel) {
    const { sendToReducer } = this.props
    ipcRenderer.removeListener(channel, (e, data) => sendToReducer(e, data, channel))
  }

  render () { return null }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendToReducer: (e, data, type) => dispatch(sendToReducerAction(type, data))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(IpcListener)
