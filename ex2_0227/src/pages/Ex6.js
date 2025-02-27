import React, { useState } from "react";
import data from "../data/data.json";
import Ex6_table from "../pages/Ex6_table";

export default function Ex6() {
    //먼저 id값을 1로 지정한다.
    const [id, setId] = useState(1);

    //updateId 함수는 e라는 인자값을 받는다.
    function updateId(e) {
        //setId로 접근해, e의 대상의 값을 가져와 설정한다.
        setId(e.target.value);
    }
    return(
        <div>
            <ul className="{styles.m_list}">
                {
                /*data의 subject를 순회하며 li 태그를 생성함.
                sub.id와 sub.title값을 updateId 함수가 생성해준다.*/
                data.subject.map(sub => (
                    <li key={sub.id} onClick={updateId} value={sub.id}>{sub.title}</li>
                ))
                }
            </ul>
            {/*Ex6_table의 idx값을 상수 id로 지정한다. */}
            <Ex6_table idx={id}/>
        </div>
    );
}