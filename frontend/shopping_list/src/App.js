import './App.css';
import { Layout, Menu } from 'antd';
import Routes from './routes';
import { PlusOutlined, UnorderedListOutlined, GithubFilled, LinkedinFilled, MailFilled, ShopFilled } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const history = useHistory();

  return (
    <div className="main">
      <Layout className="main_content">
        <Sider className='menu'>
          <h1 className='menu_logo'><ShopFilled /></h1>
          <Menu className='menu_section'>
            <Menu.Item className='menu_item' key={1} icon={<PlusOutlined />} onClick={() => {
                history.push('/add')
              }}>
              Adicionar produto
            </Menu.Item>
            <Menu.Item className='menu_item' key={2} icon={<UnorderedListOutlined />} onClick={() => {
                history.push('/products')
              }}>
              Listar produto
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className='header'>
            <Menu mode='horizontal' className='header_menu'>
              <div className='home_container'>
                <Menu.Item className='home' key='/' onClick={() => {
                  history.push('/')
                }}>
                  Página Inicial
                </Menu.Item>
              </div>
              <div className='contact_container'>
                <Menu.Item className='contact' onClick={() => {
                  // eslint-disable-next-line no-restricted-globals
                  location.href = 'https://github.com/GabFrancoL'
                }} key='github'>
                  <GithubFilled />
                </Menu.Item>
                <Menu.Item className='contact' onClick={() => {
                  // eslint-disable-next-line no-restricted-globals
                  location.href = 'https://www.linkedin.com/in/gfrancolourenco/'
                }} key='linkedin'>
                  <LinkedinFilled />
                </Menu.Item>
                <Menu.Item className='contact' onClick={() => {
                  // eslint-disable-next-line no-restricted-globals
                  location.href = 'mailto:gabrielfranco0724@gmail.com'
                }} key='mail'>
                  <MailFilled />
                </Menu.Item>
              </div>
            </Menu>
          </Header>
          <Content>
            <Routes />
          </Content>
          <Footer className='footer'>@2022 Shopping List API&nbsp;&nbsp;&nbsp;&nbsp;Todos os direitos reservados</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
