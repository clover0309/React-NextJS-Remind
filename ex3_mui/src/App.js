import { Container, Grid2 } from '@mui/material';
import './App.css';
import Content from './pages/Content';
import Header from './pages/Header';
import Nav from './pages/Nav';

function App() {
  return (
      //Container 태그를 사용해, 레이아웃을 고정해준다.
      <Container fixed>
      <Header/>
      {/*Grid2는 세로로 배치해주는 그리드레이아웃이다. */}
      <Grid2 container>
        {/* 사이즈를 12로 가정했을 때 size를 12에 맞춰서 지정해줘야한다.
        100%를 기준으로 했을때, 내가 30%의 비율을 원한다면 12기준으론 3*/}
        <Grid2 size={3}>
        <Nav/>
          </Grid2>
          {/*70%의 비율을 원한다면 12기준으론 9를 써주면 100%로 세로 레이아웃 배치가 가능하다.*/}
        <Grid2 size={9}>
          <Content/>
        </Grid2>
      </Grid2>
        </Container>

  );
}

export default App;
