import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from './components/root'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import 'antd/dist/antd.css'

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Root />
  </ConfigProvider>,
  document.getElementById('root')
)
