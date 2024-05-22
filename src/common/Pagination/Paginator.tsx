import React from 'react';
import s from "components/Users/users.module.css";

type PropsType = {
    totalCount:number
    pageSize:number
    Page:number
    onPageChanged: (p:number) => void
}

export const Pagination = (props:PropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    console.log(pagesCount)
    let pages = []
    for (let i = 1;i <= pagesCount;i++) {
        if (pages.length < 10) {
            pages.push(i)
        }
    }
    const onPageChangedHandler = (p:number) => {
        props.onPageChanged(p)

    }
    return (
        <div >
            <div>
                {pages.map(p => <span onClick={() => onPageChangedHandler(p)} className={props.Page === p ? `${s.pageStyle} ${s.isSelected}` : s.pageStyle}>{p}</span>)}
            </div>
        </div>
    );
};

