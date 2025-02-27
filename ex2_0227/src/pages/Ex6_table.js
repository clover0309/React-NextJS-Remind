import React, { useState } from "react";
import styles from '../css/Ex6.module.css';
import data from '../data/data.json';

export default function Ex6_table(prop) {
    //여기서, prop의 idx값으로 langId를 지정한다.
    const [langId, setLangId] = useState(prop.idx);
    //data.json파일에서 필터를 거쳐 ln은 ln의 subject값과, prop의 idx값이 겹치는 경우만
    // 값을 정렬하여, lang_list에 담아둔다.
    const lang_list = data.lang.filter(ln => ln.subject == prop.idx)
    
    return(
        <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>교과목</th>
                        <th>난이도</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    /*lang_list를 map 메서드를 사용하여, 필터링된 데이터를 순회하며
                    각 항목에 대해서 <tr> 태그를 생성한다. */
                    lang_list.map(
                        lang => {
                            return(
                                /*위에서 선언된 filter가 data의 lang
                                즉 data를 lang으로 뽑아다 쓰겠다는 의미가 되므로
                                lang을 사용해, id, title, level을 가져온다.*/
                                <tr key={lang.id}>
                                    <td>{lang.title}</td>
                                    <td>{lang.level}</td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
        </>
    );
}