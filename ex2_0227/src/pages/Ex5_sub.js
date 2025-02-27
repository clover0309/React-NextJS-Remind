import React from "react";

//밑에서 year라는 값을 받고있기 때문에, 함수 선언 후, 인자값을 구성한다.
export default function Ex5_sub({year}) {
    return (
        <h1>운수대통: {year}</h1>
    );
}