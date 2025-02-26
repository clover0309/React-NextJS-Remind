import React, { useState } from "react";
import "../css/ex4.css";

function Ex4() {
    // 상수는 원래는 변하지 않는 값이다. 다만
    //초기화를 하게되면 계속 값을 받아 올 수 있다.
    // 대신에, SetText를 통해서만 접근하여서 데이터가 수정이 가능해진다.
    const [txt, SetText] = useState("insert value..");
    function setValue(e) {
        /* setValue안의 e라는 인자값으로 이벤트 객체를 지정해준다.
        이 값을 setValue 함수를 통해 값을 변경 해 줄 수 있음.  */
        SetText(e.target.value);
    }
    // onChange안에 setValue함수를 불러, 값이 변하게 이벤트가 지정이 가능하다.
    return(
        <div>
            <input type="text" placeholder={txt}
            onChange={setValue}/>
            <br/>
            {/*위의 setValue 함수를 통해서 txt 즉 const로 상수를 선언해 놓은
            값을 SetText를 통해서 값이 실시간으로 변경되는 것을 확인 할 수 있다. */}
            <p className="box">{txt}</p>
        </div>
    );
}
export default Ex4;