import React from 'react'
import { Route } from 'react-router-dom';
import './Notice.css';
import NoticeItem from './NoticeItem';
import NoticeList from './NoticeList'
const NoticePage = () => {
  return (
    <div className='notice_container'>
      <div className='notice_div1'>
        <h1 className='notice_div1_title'>공지사항</h1>
      </div>
      <Route path={'/board/list'} component={NoticeList}/>
      <Route path={'/board/item'} component={NoticeItem}/>
    </div>
  )
}

export default NoticePage