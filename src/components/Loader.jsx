import React from 'react'
import { Spin } from 'antd'

const Loader = () => (
  <div className='loader' style={{ minHeight: '50vh' }}>
    <Spin />
  </div>
)

export default Loader
