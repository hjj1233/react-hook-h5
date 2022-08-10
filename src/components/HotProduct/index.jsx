import React from 'react'
import { Grid, Divider } from 'antd-mobile'
import GridBox from './HotProductsStyle'

export default function HotProduct() {
  return (
    <>
      <h3>热门食品</h3>
      <Divider />
      <GridBox>
        <Grid columns={3} gap={8}>
          <Grid.Item>
            <div className="grid-demo-item-block">
              <img
                src="https://alifei05.cfp.cn/creative/vcg/veer/1600water/veer-159882804.jpg"
                alt=""
              />
              <span>蔬菜</span>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className="grid-demo-item-block">
              <img
                src="https://alifei05.cfp.cn/creative/vcg/veer/1600water/veer-159882804.jpg"
                alt=""
              />
              <span>蔬菜</span>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className="grid-demo-item-block">
              <img
                src="https://alifei05.cfp.cn/creative/vcg/veer/1600water/veer-159882804.jpg"
                alt=""
              />
              <span>蔬菜</span>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className="grid-demo-item-block">
              <img
                src="https://alifei05.cfp.cn/creative/vcg/veer/1600water/veer-159882804.jpg"
                alt=""
              />
              <span>蔬菜</span>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className="grid-demo-item-block">
              <img
                src="https://alifei05.cfp.cn/creative/vcg/veer/1600water/veer-159882804.jpg"
                alt=""
              />
              <span>蔬菜</span>
            </div>
          </Grid.Item>
        </Grid>
      </GridBox>
    </>
  )
}
