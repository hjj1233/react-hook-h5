import React from 'react'
import { CapsuleTabs } from 'antd-mobile'
import CascadeSelector from './componets/CascadeSelector'
import Commodity from './componets/Commodity'

export default () => {
  return (
    <>
      <CapsuleTabs>
        <CapsuleTabs.Tab title="分类" key="fruits">
          <CascadeSelector />
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="商品" key="vegetables">
          <Commodity />
        </CapsuleTabs.Tab>
      </CapsuleTabs>
    </>
  )
}
