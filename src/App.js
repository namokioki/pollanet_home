import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Homepage from './component/home/Homepage';
import RankPage from './component/rank/RankPage';
import AboutPage from './component/about/AboutPage';
import NoticePage from './component/notice/NoticePage';
import RankRead from './component/rank/RankRead';
import MissionPage from './component/mission/MissionPage';
import MissionRead from './component/mission/MissionRead';


function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
        <Route path="/" component={Homepage} exact/>
        <Route path="/point/rankListWeb" component={RankPage} exact/>
        <Route path="/point/rankReadWeb/:user_id" component={RankRead}/>
        <Route path="/mission/read/:mission_code" component={MissionRead}/>
        <Route path="/mission/listTotal" component={MissionPage} exact/>
        <Route path="/about" component={AboutPage} exact/>
        <Route path="/board/list" component={NoticePage} exact/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
