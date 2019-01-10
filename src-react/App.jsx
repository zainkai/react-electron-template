import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import IpcListener from './redux/IpcListener'
import configureStore from './configureStore'

const store = configureStore()
const electronChannels = [
  'HELLO_WORLD'
]

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <IpcListener channels={electronChannels} />
        {/* React screen here */}
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
