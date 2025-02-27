import React, { useState } from "react";

export default function Ex3() {
    //useState를 VO객체 처럼 사용하기 위해, 값을 VO, setVO로 지정했다.
    //useState안에 값을 여러 개를 사용하거나, 지정하고 싶을때는 JSON표기법을 이용해
    //({이름:"값", 이름2:"값", 이름3:"값"})으로 작성해줘야 한다.
    //현재는 안에 name, email, tel이 자리잡고 있다.
    const [VO,setVO] = useState({name:"",email:"",tel:""});

    //이벤트 객체처럼 사용하기 위해 인자값 e를 지정했다.
    //이벤트 객체만 만들때는 인자 값만 사용하고,
    //특정 객체에게 이벤트를 걸때는 아래 인자값을 예시로 e.target를 사용해야한다.
    function editVO(e){
        //개발자 모드 콘솔창에서 e인자값이 들어간 타겟의 값을 나타내준다.
        console.log(e.target.value);

        //변수 value에는 e인자값이 들어간 타겟의 값을 넣고,
        //변수 id에는 e인자값이 들어간 타겟의 id값을 넣는다.
        let value = e.target.value;
        let id = e.target.id;

        //중괄호() 안에 대괄호{}는, 속성을 의미한다.
        setVO({
            // ...은 스프레이드 속성을 의미한다. 객체를 하나 복사해 놓는 개념이라 생각하면 된다.
            //절대로 ...이 잘못된것이 아니다. 없는 문법이라고 속지말것.
            ...VO,
            [id]:value
        })
    }

    return(
        /*만약에 어떤 태그로 시작해야 할지 모르겠는 경우엔
            <> </>를 사용하면 알아서 잡아준다.
            대신에 ID값이나 NAME값을 지정할 수 없다. */
        <>
            <div>
                <label>이름</label>
                <input type="text" id="name" onChange={editVO}/>
            </div>

            <div>
                <label>이메일</label>
                <input type="text" id="email" onChange={editVO}/>
            </div>

            <div>
                <label>전화번호</label>
                <input type="text" id="tel" onChange={editVO}/>
            </div>

            <hr/>
            {/*아까전에 사용한 상수안에 있는 VO의 name, email, tel 값을 가져온다. */}
            <p>이름: {VO.name}  </p>
            <p>이메일: {VO.email}  </p>
            <p>전화번호: {VO.tel}  </p>

        </>
    );
}