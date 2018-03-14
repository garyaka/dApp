import React, { Component } from 'react';
import { Layout } from 'antd';

import HeaderMenu from './WalletComponents/HeaderMenu';
import Table from './WalletComponents/Table';

const { Content } = Layout;

class Wallet extends Component {
  render() {
    return (
      <Layout style={{ background: '#FFF' }}>
        <Content style={{ background: '#FFF' }}>
          <HeaderMenu />
          <Table />
        </Content>
      </Layout>
    );
  }
}

export default Wallet;
