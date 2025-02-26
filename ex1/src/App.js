import './App.css';

import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';
import Ex3 from './pages/Ex3';
import Ex4 from './pages/Ex4';

/* 라우터를 사용하기 위해 3가지를 import 해야한다. */
import { Link, Route, Routes } from 'react-router-dom';




function App() {
  //App에 HTML 태그를 반환하여, Hello React를 H1태그 속성을 가진 상태로
  // 출력을 해준다.
  //여기서는 큰 틀(제일 위에있는 div)안에서 태그를 이어주는 방식으로 작성해야한다.
  // 그렇게 사용하지 않으면 에러발생.
  return (
    <div className="App">
      <h1>Hello React</h1>
      <nav>
        <Link to="/Ex1">메뉴1</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/Ex2">메뉴2</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/Ex3">메뉴3</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/Ex4">메뉴4</Link>
      </nav>

      <Routes>
        <Route path='/Ex1' element={<Ex1/>}/>
        <Route path='/Ex2' element={<Ex2/>}/>
        <Route path='/Ex3' element={<Ex3/>}/>
        <Route path='/Ex4' element={<Ex4/>}/>
      </Routes>
    </div>

  );
}

export default App;
