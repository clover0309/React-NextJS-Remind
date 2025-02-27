import React, { useState } from "react";

//밑에서 사용하는 list에서 던지는 member를 Data 함수에서 인자값을 받아
//member라는 객체안의 num, name, email 값을 불러온다.
function Data({member}) {
    return(
        <tr>
            <td>{member.num}</td>
            <td>{member.name}</td>
            <td>{member.email}</td>
        </tr>
    );
}

export default function Ex4() {
    //list는 상태 변수, setList는 해당 상태를 업데이트 하는 상수.
    const [list, setList] = useState([
        {num:"1", email:"inhae@test.com", name:"안인혜"},
        {num:"2", email:"illha@test.com", name:"류일화"},
        {num:"3", email:"juhee@test.com", name:"김주희"},
        {num:"4", email:"jangb@test.com", name:"장비찬"},
        {num:"5", email:"goguma@test.com", name:"고구마"}
    ]);
    return(
        <table>
        <thead>
            <tr>
                <th>번호</th>
                <th>이름</th>
                <th>이메일</th>
            </tr>
        </thead>
        <tbody>
            {/*
            list 상수에서 정의된 만큼 map이 호출이 된다.
            즉 반복문을 수행하는 것과 유사하다.
            list 상수에서 주는 요소가 Data라는 함수 컴포넌트롤 호출 할때
            인자인 member라는 변수에 vo를 전달해준다.(속성값을 준다.)
            */}
            {list.map(vo => <Data member={vo}/> )}
        </tbody>
    </table>
    );
}