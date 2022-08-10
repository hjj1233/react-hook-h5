import React, { ReactNode, useRef, useState } from 'react'
import { Button, SearchBar, Space, Toast } from 'antd-mobile'
// import { DemoBlock } from 'demos'
import { SearchBarRef } from 'antd-mobile/es/components/search-bar'
import { SearchOutline, SetOutline } from 'antd-mobile-icons'
import SearchBox from './SearchStyle.js'
export default function Search() {
  const searchRef = useRef(null)
  const [icon, setIcon] = useState(<SetOutline />)

  return (
    <SearchBox block direction="vertical">
      <SearchBar
        ref={searchRef}
        placeholder="请输入内容"
        clearable
        onSearch={(val) => {
          Toast.show(`暂无此商品：${val}`)
        }}
        // onFocus={() => {
        //   Toast.show('获得焦点')
        // }}
        // onBlur={() => {
        //   Toast.show('失去焦点')
        // }}
        // onClear={() => {
        //   Toast.show('清空内容')
        // }}
        // onCancel={() => {
        //   Toast.show('取消搜索')
        // }}
      />
    </SearchBox>
  )
}
