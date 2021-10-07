import React from 'react';
import { Spin } from 'antd';

const Loader = () => (
  <div className="loader" my={6}>
    <Spin />
  </div>
);

export default Loader;