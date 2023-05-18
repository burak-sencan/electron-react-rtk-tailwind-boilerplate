import { Provider } from 'react-redux'
import { store } from './app/store'

import Count from './components/Count'

const App = () => {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  )
}
export default App
