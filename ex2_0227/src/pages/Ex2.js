import React, { useState } from "react";

export default function Ex2() {
    //상수를 하나 선언하여, str과 setSTR을 배열에 저장한다.
    // 이때, str에는 접근 시 값을 절때로 바꿀 수 없지만,
    // useState가 지정되 있는 상황에서는 setSTR에는 접근 시 값을 최신화 가능하다.
    // 값이 바뀐다. 라고도 표현을 할 수 있지만, 실제로 표면상의 값이 바뀌는 것이니
    // 최신화라고 표현하는게 올바를듯 하다.
    const[str, setSTR] = useState('값이 변경되는지 확인해봅시다.');

    //밑에서 onClick에서 1,2,3의 인자값을 test함수의 e 인자값에 던진다.
    //이때 e가 받은 값을 통해, 케이스 문을 수행하게 된다.
    //내가 가장 약한 인자값 부분이니, 조금 더 유심히 유의하면서 봐야겠음.
    function test(e){
        //변수 msg를 사용하기 위해, 값을 0 지정.
        let msg = 0;
        //switch문은 e라는 인자값으로 진행이 된다.
        switch(e){
            //1이면 msg값이 100
            case 1:
                msg = 100;
                break;
            //2이면 msg값이 200
            case 2:
                msg = 200;
                break;
            //3이면 msg값이 300
            case 3:
                msg = 300;
                break;
        }
        //setSTR에 msg값을 넣어, 값을 최신화 해준다.
        setSTR(msg);
    }

    return(
         <div>
            <h2>두번째 화면 : {str}</h2>
            {/*
                () => 함수명
                 해당 형태는 ()라는 것이 익명 함수라고 하는 것이다.
                 익명함수는 즉시 실행함수로 사용되는 경우가 많다.
                 변수에 할당하거나, 다른 함수의 인자로 전달해야 호출이 가능하다.
            */}
            <button type="button" onClick={()=>test(1)}>변경1</button>
            <button type="button" onClick={()=>test(2)}>변경2</button>
            <button type="button" onClick={()=>test(3)}>변경3</button>
        </div>
    );
}