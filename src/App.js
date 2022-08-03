import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.css'
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import Header from './components/Header'
import Topics from './components/Topics'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Topics />
      </div>
    </div>
  )
}

export default withAuthenticator(App)
