import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { useGetCryptosQuery } from '../services/CryptoApi'

const { Title } = Typography

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery()
  const globalData = data?.data?.stats

  if (isFetching) return 'Loading......'
  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value={globalData.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Exchanges'
            value={millify(globalData.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Market Cap'
            value={millify(globalData.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total 24th Volume'
            value={millify(globalData.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Markets'
            value={millify(globalData.totalMarkets )}
          />
        </Col>
      </Row>
    </>
  )
}

export default Homepage
