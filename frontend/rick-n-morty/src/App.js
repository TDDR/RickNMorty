import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Route} from 'react-router-dom';

import HomePage from './components/HomePage';
//import CharacterPage from './components/CharacterPage';

import {Layout} from 'antd';
const {Header, Footer, Content} = Layout;

function App() {
  return (
    <Layout>
      <Header>Rick And Morty</Header>
      <Content>
        <div className="App">
          <BrowserRouter>
            <Route path='/' exact strict component={HomePage} />
            {/* <Route path='/:id' exact strict component={CharacterPage} /> */}
          </BrowserRouter>
        </div>
      </Content>
      <Footer>Created by TDDR</Footer>
    </Layout>
  );
}

export default App;
