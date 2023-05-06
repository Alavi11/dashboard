import React from 'react'
import Menu from '../menu/Menu'
import Main from '../main/Main'
import Body from '../body/Body'
import "./Root.css"


const Root = () => {
  return <>
        <div className="rooot">
                <Menu/>
                <Main/>
                <Body/>
        </div>
  </>
}

export default Root