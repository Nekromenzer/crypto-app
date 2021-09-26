import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../services/CryptoNews'
import { useGetCryptosQuery } from '../services/CryptoApi'

const { Title, Text } = Typography
const { Option } = Select
const demoImgUrl =
  'https://static.toiimg.com/thumb/msid-86361927,imgsize-87688,width-400,resizemode-4/86361927.jpg'

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = React.useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory ,
    count: simplified ? 6 : 12
  })
  const { data } = useGetCryptosQuery(100)

  if (!cryptoNews?.value) return 'loading......'
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder='select a news category'
            optionFilterProp='children'
            onChange={value => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value='Cryptocurrency'>Cryptocurrency</Option>
            {data?.data?.coins.map(coin => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={12} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImgUrl}
                  alt={news.name}
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImgUrl
                    }
                    alt='avatar image'
                  />
                  <Text className='provider-name'>
                    {news?.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished)
                    .startOf('ss')
                    .fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News
