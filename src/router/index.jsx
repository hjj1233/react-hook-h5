import React, { useRef, useState } from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  Routes,
  MemoryRouter as Router,
} from 'react-router-dom'
import Home from '../page/home'
import Todo from '../page/todo'
import './index.css'
import PageHome from '../page/pageHome'

const titleObj = {
  '/home': '首页',
  '/todo': '我的待办',
  '/message': '消息列表',
  '/me': '我的',
}
export default function Demo(props) {
  const ref = useRef(null)
  const [titleUrl, setTitleUrl] = useState('/home')
  console.log(props)
  return (
    <Router initialEntries={['/home']}>
      <div className={'app'}>
        <div className={'top'}>
          <NavBar>{titleObj[titleUrl]}</NavBar>
        </div>
        <div className={'body'}>
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  {' '}
                  <Home />
                </>
              }
            />
            <Route
              path="/todo"
              element={
                <>
                  {' '}
                  <Todo />
                </>
              }
            />
          </Routes>
        </div>
        <div className={'bottom'}>
          <PageHome ref={ref} setTitleUrl={setTitleUrl} />
        </div>
      </div>
    </Router>
  )
}
