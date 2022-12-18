import qs from 'qs';
import Pagination from "react-js-pagination";
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useScrollClipPath, useScrollFadeIn } from '../../hooks';
import MissionItem from './MissionItem';
import { withRouter } from 'react-router-dom';

const MissionCtg4 = ({location}) => {
  const search = qs.parse(location.search, { ignoreQueryPrefix: true })
  const m_page = !search.page ? 1 : parseInt(search.page)
  const searchWord = !search.word ? '' : search.word;
  const m_number = 9;
  const m_category = 4;
  const [missions, setMissions] = useState([]);

  const callMissionCT1 = async () => {
    const result = await axios.get(`/mission/categorylist?m_category=5&m_sort=&m_start=1&m_number=6`)
    console.log(m_category)
    setMissions(result.data);
  }

  useEffect(() => {
    callMissionCT1();
  }, [location]);

  return (
    <div className='mission_list'>
      {missions.map(mission =>
        <MissionItem key={mission.mission_code} mission={mission}></MissionItem>
      )}
    </div>
  )
}

export default withRouter (MissionCtg4)