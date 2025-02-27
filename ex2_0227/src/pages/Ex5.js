import React, { useState } from "react";
import Ex5_sub from "./Ex5_sub";

export default function Ex5(d) {
    
    const[title, setTITLE] = useState(d.STR);
    const[year, setYEAR] = useState(d.year);

    
    return(
        <div>
        <p>{title} ({year})</p>
        {/*Ex5_sub에서 {year}를 인자값으로 받고 있기 때문에
        인자값을 꼭 줘야한다. */}
        {/* Ex5_sub는 하나의 컴포넌트다. */}
        <Ex5_sub year={year}/>
        <hr/>

        {/* 해당부분은 익명함수로 값을 변경해주는 부분이다. 
            title이 "류일화"가 아니면, "류일화"로 변경해주고,
            맞다면, 버튼을 눌렀을때 화이트스페이스가 표기된다.
        */}
        <button type="button" onClick={() => {
            //해당부분은 익명함수 영역이다.
            setTITLE(title != '류일화'?'류일화':'');
            setYEAR(year+1);
        }}>변경</button>
    </div>
    );
}