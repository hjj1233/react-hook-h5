import React from 'react'
import { Divider, Grid } from 'antd-mobile'
import HotRecomendBox from './HotRecommendStyle'
import { FireFill } from 'antd-mobile-icons'

export default function HotRecommend() {
  return (
    <>
      <h3>热门推荐</h3>
      <Divider />
      <HotRecomendBox>
        <Grid columns={2} gap={5}>
          <Grid.Item>
            <div className="grid-demo-item-block">
              <img
                src="https://image.16pic.com/00/63/09/16pic_6309386_s.jpg?imageView2/0/format/png"
                alt=""
              />
              <div style={{ margin: '0 5px' }}>
                <div className="price">￥ 32.00</div>
                <div className="text">
                  这是一件神奇的食品，他可以给人带来无比的快乐，吃了后神清气爽，感觉年轻了十岁
                </div>
                <div className="hot">
                  <span>
                    热度：
                    <FireFill color="red" />
                    <span className="numberStyle"> 99999</span>
                  </span>
                </div>
                <div>
                  <span>
                    好评： <span className="goodstyle">9.8</span>
                  </span>
                </div>
              </div>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className="grid-demo-item-block">
              <img
                src="https://image.16pic.com/00/63/09/16pic_6309386_s.jpg?imageView2/0/format/png"
                alt=""
              />
              <div style={{ margin: '0 5px' }}>
                <div className="price">￥ 32.00</div>
                <div className="text">
                  这是一件神奇的食品，他可以给人带来无比的快乐，吃了后神清气爽，感觉年轻了十岁
                </div>
                <div className="hot">
                  <span>
                    热度：
                    <FireFill color="red" />
                    <span className="numberStyle"> 99999</span>
                  </span>
                </div>
                <div>
                  <span>
                    好评： <span className="goodstyle">9.8</span>
                  </span>
                </div>
              </div>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className="grid-demo-item-block">
              <img
                src="https://image.16pic.com/00/63/09/16pic_6309386_s.jpg?imageView2/0/format/png"
                alt=""
              />
              <div style={{ margin: '0 5px' }}>
                <div className="price">￥ 32.00</div>
                <div className="text">
                  这是一件神奇的食品，他可以给人带来无比的快乐，吃了后神清气爽，感觉年轻了十岁
                </div>
                <div className="hot">
                  <span>
                    热度：
                    <FireFill color="red" />
                    <span className="numberStyle"> 99999</span>
                  </span>
                </div>
                <div>
                  <span>
                    好评： <span className="goodstyle">9.8</span>
                  </span>
                </div>
              </div>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className="grid-demo-item-block">
              <img
                src="https://image.16pic.com/00/63/09/16pic_6309386_s.jpg?imageView2/0/format/png"
                alt=""
              />
              <div style={{ margin: '0 5px' }}>
                <div className="price">￥ 32.00</div>
                <div className="text">
                  这是一件神奇的食品，他可以给人带来无比的快乐，吃了后神清气爽，感觉年轻了十岁
                </div>
                <div className="hot">
                  <span>
                    热度：
                    <FireFill color="red" />
                    <span className="numberStyle"> 99999</span>
                  </span>
                </div>
                <div>
                  <span>
                    好评： <span className="goodstyle">9.8</span>
                  </span>
                </div>
              </div>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className="grid-demo-item-block">
              <img
                src="https://image.16pic.com/00/63/09/16pic_6309386_s.jpg?imageView2/0/format/png"
                alt=""
              />
              <div style={{ margin: '0 5px' }}>
                <div className="price">￥ 32.00</div>
                <div className="text">
                  这是一件神奇的食品，他可以给人带来无比的快乐，吃了后神清气爽，感觉年轻了十岁
                </div>
                <div className="hot">
                  <span>
                    热度：
                    <FireFill color="red" />
                    <span className="numberStyle"> 99999</span>
                  </span>
                </div>
                <div>
                  <span>
                    好评： <span className="goodstyle">9.8</span>
                  </span>
                </div>
              </div>
            </div>
          </Grid.Item>
        </Grid>
      </HotRecomendBox>
    </>
  )
}
