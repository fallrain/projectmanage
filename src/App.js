import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import './App.css';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="vh100">
        <Header className="header">
          <div className="logo"/>
        </Header>
        <Layout>
          <Sider width={200} style={{background: '#fff'}}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{height: '100%', borderRight: 0}}
            >
              <SubMenu key="sub1" title={<span><Icon type="user"/>项目实施管理</span>}>
                <Menu.Item key="1">保函保证金</Menu.Item>
                <Menu.Item key="2">未回款查询</Menu.Item>
                <Menu.Item key="3">已开发票未回款跟踪</Menu.Item>
                <Menu.Item key="4">项目里程碑信息</Menu.Item>
                <Menu.Item key="5">里程碑变更</Menu.Item>
                <Menu.Item key="6">里程碑变更审核</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop"/>项目机会管理</span>}>
                <Menu.Item key="7">项目机会申请</Menu.Item>
                <Menu.Item key="8">option6</Menu.Item>
                <Menu.Item key="9">option7</Menu.Item>
                <Menu.Item key="10">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification"/>预算申请管理</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{padding: '0 24px 24px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>项目实施管理</Breadcrumb.Item>
              <Breadcrumb.Item>里程碑变更</Breadcrumb.Item>
              <Breadcrumb.Item>变更详情</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
              Content
            </Content>
          </Layout>
        </Layout>
        <Footer>建投数据</Footer>
      </Layout>
    );
  }
}

export default App;
