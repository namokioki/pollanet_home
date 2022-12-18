import qs from 'qs';
import Pagination from "react-js-pagination";
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useScrollClipPath, useScrollFadeIn } from '../../hooks';
import MissionItem from './MissionItem';
import { withRouter } from 'react-router-dom';

const MissionCtg1 = ({ location }) => {
  const search = qs.parse(location.search, { ignoreQueryPrefix: true })
  const m_page = !search.page ? 1 : parseInt(search.page)
  const m_number = 9;
  const [missions, setMissions] = useState([]);

  const callMission = async () => {
    const result = await axios.get(`/mission/categorylist?m_category=1&m_sort=&m_start=${m_page}&m_number=${m_number}`)
    setMissions(result.data);
  }

  useEffect(() => {
    callMission();
  }, [location]);

  return (
    <div className='mission_list'>
      {missions.map(mission =>
        <MissionItem key={mission.mission_code} mission={mission}></MissionItem>
      )}
    </div>
  )
}

export default withRouter (MissionCtg1)