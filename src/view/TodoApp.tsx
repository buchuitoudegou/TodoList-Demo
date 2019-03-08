import './TodoApp.css';

import * as React from 'react';

import AddTodo from 'src/components/AddTodo';
import { Layout } from 'antd';
import TodoList from 'src/components/TodoList';

const { Sider, Content, Header }  = Layout;

export default function TodoApp() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className='header'>
        Header
      </Header>
      <Content style={{ padding: '0 50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Layout style={{ padding: '24px', background: '#fff', height: '80%' }}>
          <Sider id='sider' style={{ background: '#fff' }}>
            <AddTodo />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <TodoList />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}
