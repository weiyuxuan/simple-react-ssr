import React, { useState, useEffect, useRef, cloneElement } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const withPage = (PageComponent) => {
  return ({ fetchInitialData, staticContext }) => {
    const { pathname } = useLocation()

    const [initialData, setInitialData] = useState(() => {
      return __IS_BROWSER__
        ? window.__INITIAL_DATA__?.[pathname]
        : staticContext?.data?.[pathname]
    })

    const dataFetched = useRef(initialData ? true : false)

    useEffect(() => {
      if (!dataFetched.current) {
        fetchInitialData(pathname).then((resp) => {
          setInitialData(resp?.data)
          dataFetched.current = true
        })
      }
    }, [dataFetched.current, pathname])

    return <PageComponent initialData={initialData} />
  }
}

export default withPage
