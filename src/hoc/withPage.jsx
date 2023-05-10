import React, { useState, useEffect, useRef, cloneElement } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const withPage = (PageComponent) => {
  return ({ initialData: serverInitialData, fetchInitialData }) => {
    const { pathname } = useLocation()

    const [initialData, setInitialData] = useState(() => {
      return __IS_BROWSER__
        ? window.__INITIAL_DATA__?.[pathname]
        : serverInitialData?.[pathname]
    })

    useEffect(() => {
      if (!initialData && fetchInitialData) {
        fetchInitialData(pathname).then((resp) => {
          setInitialData(resp?.data)
        })
      }
    }, [initialData, fetchInitialData, pathname])

    return <PageComponent initialData={initialData} />
  }
}

export default withPage
