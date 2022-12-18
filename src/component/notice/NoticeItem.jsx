import React, { useState } from 'react'

const NoticeItem = ({ notice }) => {
  const { b_title, b_content, b_user_id, b_register_Date } = notice;
  const [visible, setVisible] = useState(false)
  const onContent = () => {
    setVisible(!visible)
  }
  return (
    <li role="button" className='notice_div2_li'>
      <div className='notice_div2_li_content' onClick={onContent}>
        <span role="text">{b_title}</span><br />
        <time role="text">{b_register_Date}</time>
      </div>
      {visible &&
        <div className='notice_content'>
          <div className='n_content_box'>
            <h3 className='notice_title'> {b_title}</h3>
            <h3 className='notice_writer'>작성자 : {b_user_id}</h3>
          </div>
          <p className='n_content'>{b_content}</p>
        </div>
      }
    </li>
  )
}

export default NoticeItem