import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'
import './assets/scss/styles.scss';

export const CtsApp = () => {

  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  )
}

