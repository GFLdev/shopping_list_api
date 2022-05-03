import './App.css';
import { Layout, Menu } from 'antd';
import Routes from './routes';
import { PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="main">
      <Layout className="main_content">
        <Sider className='menu'>
          <Menu className='menu_section'>
            <Menu.Item key={1} icon={<PlusOutlined />}>
              Adicionar produto
            </Menu.Item>
            <Menu.Item key={2} icon={<UnorderedListOutlined />}>
              Listar produto
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className='header'>Header</Header>
          <Content>
            <Routes />
          </Content>
          <Footer className='footer'>Todos os direitos reservados.</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
