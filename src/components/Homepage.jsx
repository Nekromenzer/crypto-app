import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { useGetCryptosQuery } from '../services/CryptoApi'
import { Link } from 'react-router-dom'
import { News, Cryptocurrencies  } from '../components'
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
            value={millify(globalData.totalMarkets)}
          />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title className='home-title' level={2}>
          Top 10 Cryptocurrencies in the 🌎
        </Title>
        <Title className='show-more' level={4}>
          <Link to='/cryptocurrencies'>show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplyfied />

      <div className='home-heading-container'>
        <Title className='home-title' level={2}>
          Latest Crypto 📰
        </Title>
        <Title className='show-more' level={4}>
          <Link to='/news'>show more</Link>
        </Title>
      </div>
      <News simplyfied />
    </>
  )
}

export default Homepage
