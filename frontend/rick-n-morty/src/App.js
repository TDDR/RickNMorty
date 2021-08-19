import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Route} from 'react-router-dom';

import HomePage from './components/HomePage';
import CharacterPage from './components/CharacterPage';
import LocationPage from './components/LocationPage';
import EpisodePage from './components/EpisodePage';

import {Layout} from 'antd';
const {Header, Footer, Content} = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <h1 style={{color: 'white', textAlign: 'center'}}>
          Rick And Morty Wiki
        </h1>
      </Header>
      <Content>
        <div className="App">
          <BrowserRouter>
            <Route path='/' exact strict component={HomePage} />
            <Route path='/:id' exact strict component={CharacterPage} />
            <Route path='/location/:id' exact strict component={LocationPage} />
            <Route path='/episode/:id' exact strict component={EpisodePage} />
          </BrowserRouter>
        </div>
      </Content>
      <Footer>Created by TDDR</Footer>
    </Layout>
  );
}

export default App;
