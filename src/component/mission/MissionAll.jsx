import qs from 'qs';
import Pagination from "react-js-pagination";
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useScrollClipPath, useScrollFadeIn } from '../../hooks';
import MissionItem from './MissionItem';
import { withRouter } from 'react-router-dom';

const MissionAll = ({ location, history }) => {
  const search = qs.parse(location.search, { ignoreQueryPrefix: true })
  const m_start = !search.m_start ? 1 : parseInt(search.m_start)
  const searchWord = !search.word ? '' : search.word;
  const m_number = 9;
  const [missions, setMissions] = useState([]);
  const [total, setTotal] = useState(0);
  const [word, setWord] = useState(searchWord);

  const callMission = async () => {
    const result = await axios.get(`/mission/listTotal?m_keyword=${word}&m_start=${m_start}&m_number=${m_number}`)
    setMissions(result.data.list);
    setTotal(result.data.total);
    console.log(searchWord);
    console.log(m_start);
    console.log(m_number);
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      history.push(`/mission/listTotal?m_keyword=${e.target.value}&m_start=1&m_number=${m_number}`)
    }
  }

  const onChangePage = (e) => {
    history.push(`/mission/listTotal?m_keyword=${searchWord}&m_start=${e}&m_number=${m_number}`)
    console.log(e)
  }

  useEffect(() => {
    callMission();
  }, [location,history]);

  return (
    <>
      <div className='mission_input_card'>
        {/* <label for="word">검색</label> */}
        <input
          // {...leftScrollItem[0]}
          className='saerch_input'
          placeholder="찾고 싶은 미션의 키워드를 입력하세요."
          id="word"
          onChange={(e) => setWord(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>
      <div className='mission_list'>
        {missions.map(mission =>
          <MissionItem key={mission.mission_code} mission={mission}></MissionItem>
        )}
      </div>

      <Pagination
        activePage={m_start}
        itemsCountPerPage={m_number}
        totalItemsCount={total}
        pageRangeDisplayed={10}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={onChangePage} />
    </>
  )
}

export default withRouter(MissionAll)