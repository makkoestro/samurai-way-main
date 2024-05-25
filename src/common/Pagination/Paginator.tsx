import React, {useState} from 'react';
import s from "components/Users/users.module.css";

type PropsType = {
    totalCount:number
    pageSize:number
    Page:number
    onPageChanged: (p:number) => void
    portionSize: number
}

export const Pagination = (props:PropsType) => {
    const [portion, setPortion] = useState(Math.ceil(props.Page / props.portionSize))
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1;i <= pagesCount;i++) {
            pages.push(i)
    }
    const portionCount = Math.floor( pagesCount / props.portionSize)
    const leftPortionPageNumber = (portion - 1) * props.portionSize + 1
    const rightPortionPageNumber = portion * props.portionSize
    console.log(portion)
    const onPageChangedHandler = (p:number) => {
        props.onPageChanged(p)
    }
    return (
        <div >
            <div>
                {portion > 1 && <button onClick={() => setPortion(portion -1)}>PREVIOUS</button>}


                {pages.filter(i => i >= leftPortionPageNumber && i <= rightPortionPageNumber).map(p => <span onClick={() => onPageChangedHandler(p)} className={props.Page === p ? `${s.pageStyle} ${s.isSelected}` : s.pageStyle}>{p}</span>)}
                {portion < portionCount && <button  onClick={() => setPortion(portion  + 1)}>NEXT</button>}
            </div>
        </div>
    );
};

