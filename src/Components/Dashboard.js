import React, { useEffect } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Form, Input, Button } from 'antd';
import useHttpRequest from '../Hooks/useHttpRequest';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { loading, apiResponse, errorMessage, fetchData } = useHttpRequest();

  const onsubmitClick = () => {
    fetchData('https://api.stackexchange.com/2.3/questions', {
      params: {
        key: '7LKf)) oX9jsifAU1Yggifw((',
        site: 'stackoverflow',
        page: 1,
        pagesize: 100,
        order: 'desc',
        sort: 'votes',
        tagged: 'reactis',
        filter: 'default',
        nottagged: 'jquery;node js;angul arjs;vue.js;javascript',
      },
    });
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  console.log(apiResponse);
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout>
        <Header style={{ padding: 0, background: '#001529', color: '#ffffff' }}>
          DATA COLLECTION
        </Header>
        <Content
          style={{
            paddingBlock: '3rem',
            paddingInline: '2rem',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              border: '1px solid',
            }}
          >
            <Form
              {...layout}
              style={{
                maxWidth: 600,
                justifyContent: 'center',
              }}
            >
              <Form.Item label='stackOver URL'>
                <Input label='stackOver URL' name='stackOver URL'></Input>
              </Form.Item>
              <Form.Item label='API Key'>
                <Input label='API Key' name='API Key'></Input>
              </Form.Item>
              <Form.Item label='Number of hit'>
                <Input label='Number of hit' name='Number of hit'></Input>
              </Form.Item>
              <Form.Item label='Additional Inputs'>
                <Input
                  label='Additional Inputs'
                  name='Additional Inputs'
                ></Input>
              </Form.Item>
              <Form.Item label='File Name'>
                <Input label='File Name' name='File Name'></Input>
              </Form.Item>
              <Form.Item label='Path to store'>
                <Input label='Path to store' name='Path to store'></Input>
              </Form.Item>
              <Form.Item style={{ textAlign: 'right' }}>
                <Button onClick={onsubmitClick} type='primary'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>TCS Chat GPT</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
