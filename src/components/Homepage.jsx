import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { useGetCryptosQuery } from '../services/CryptoApi'

const { Title } = Typography

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery()

  console.log(data, 'data')
  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value='5' />
        </Col>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value='5' />
        </Col>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value='5' />
        </Col>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value='5' />
        </Col>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value='5' />
        </Col>
      </Row>
    </>
  )
}

export default Homepage
