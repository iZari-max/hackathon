"use client"
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'


const persistor = persistStore(store)


interface Props {
    children: ReactNode 
}

export const Providers = (props:Props) => {
  return (
    <Provider store={store}><PersistGate persistor={persistor}>{props.children}</PersistGate></Provider>
  )
}
