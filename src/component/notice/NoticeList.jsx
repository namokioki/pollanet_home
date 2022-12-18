import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NoticeItem from './NoticeItem';
import qs from 'qs'
import Pagination from 'react-js-pagination';
const NoticeList = ({ location,history }) => {
  const search = qs.parse(location.search, { ignoreQueryPrefix: true })
  const page = !search.page ? 1 : parseInt(search.page)
  const searchWord = !search.word ? '' : search.word;
  const num = 10;
  const [notices, setNotices] = useState([]);
  const [total, setTotal] = useState(0);
  const [word, setWord] = useState(searchWord);
  const callNotice = async () => {
    const result = await axios.get(`/board/list?b_category=4&search=${word}&page=${page}&num=${num}`)
    setNotices(result.data.list);
    setTotal(result.data.total);
  }
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      history.push(`/board/list?b_category=4&search=${e.target.value}&page=${page}&num=${num}`)
    }
  }

  const onChangePage = (e) => {
    history.push(`/board/list?b_category=4&search=${searchWord}&page=${e}&num=${num}`)
  }
  useEffect(() => {
    callNotice();
  }, [location])

  if (!notices) return (<h1>데이터를 불러오는 중입니다.</h1>)
  return (
    <div className='notice_div1'>
      <div className='input_card_notice'>
        <input
          className='saerch_input_notice'
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="찾고 싶은 키워드를 입력하세요."
        />
      </div>
      <ul className='notice_div2_ul'>
        {notices.map(notice=>
        <NoticeItem key={notice.board_code} notice={notice}/>  
        )}
      </ul>
      <Pagination
        activePage={page}
        itemsCountPerPage={num}
        totalItemsCount={total}
        pageRangeDisplayed={10}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={onChangePage} />
    </div>
  )
}

export default NoticeList