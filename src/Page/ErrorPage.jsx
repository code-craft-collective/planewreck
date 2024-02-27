import React from 'react'

const ErrorPage = ({ errorCode, errorMessage }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Error {errorCode}</h1>
      <p>{errorMessage}</p>
    </div>
  )
}

export default ErrorPage
