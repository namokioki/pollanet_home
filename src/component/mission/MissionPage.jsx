import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import MissionList from './MissionList';
import './Mission.css';
import { useScrollClipPath, useScrollFadeIn } from '../../hooks';
import MissionItem from './MissionItem';

const MissionPage = () => {
  const [todayMission, setTodayMission] = useState('');
  const [weekMission, setWeekMission] = useState('');
  const [bestMission, setBestMission] = useState('');

  // const callBestMission = async () => {
  //   try {
  //     const result = await axios.get('/mission/todayMission')
  //     setTodayMission(result.data)
  //     console.log(todayMission)

  //     const result2 = await axios.get('/mission/weekMission')
  //     setWeekMission(result2.data)
  //     console.log(weekMission)

  //     const result3 = await axios.get('/mission/bestMission')
  //     setBestMission(result3.data)
  //     console.log(bestMission)

  //   } catch (err) {
  //     console.log("ERROR >>>>>>>", err)
  //   }
  // }


  const upScrollItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.1),
    2: useScrollFadeIn('up', 1, 0.2),
    3: useScrollFadeIn('up', 1, 0.3),
    4: useScrollFadeIn('up', 1, 0.4),
  };

  const DownScrollItem = {
    0: useScrollFadeIn('down', 1, 0),
    1: useScrollFadeIn('down', 1, 0.2),
    2: useScrollFadeIn('down', 1, 0.3),
  };

  const leftScrollItem = {
    0: useScrollFadeIn('left', 1),
    1: useScrollFadeIn('left', 1, 0.4),
    2: useScrollFadeIn('left', 1, 0.6),
  };

  const rightScrollItem = {
    0: useScrollFadeIn('right', 1),
    1: useScrollFadeIn('right', 1, 0.4),
    2: useScrollFadeIn('right', 1, 0.6),
  };

  const upClipPath = {
    0: useScrollClipPath('up', 1, 0),
    1: useScrollClipPath('up', 2, 0),
    2: useScrollClipPath('up', 3, 0),
    3: useScrollClipPath('up', 4, 0),
  }

  const downClipPath = {
    0: useScrollClipPath('down', 1, 0),
    1: useScrollClipPath('down', 2, 0),
    2: useScrollClipPath('down', 3, 0),
    3: useScrollClipPath('down', 4, 0),
  }

  const rightClipPath = {
    0: useScrollClipPath('right', 1, 0),
    1: useScrollClipPath('right', 2, 0),
    2: useScrollClipPath('right', 3, 0),
    3: useScrollClipPath('right', 4, 0),
  }

  const leftClipPath = {
    0: useScrollClipPath('left', 2, 0),
    1: useScrollClipPath('left', 4, 0),
    2: useScrollClipPath('left', 6, 0),
    3: useScrollClipPath('left', 8, 0),
  }

  useEffect(() => {
    // callBestMission()
  }, []);

  // if (!todayMission) return (<h1>데이터를 불러오는 중입니다!</h1>)
  // if (!weekMission) return (<h1>데이터를 불러오는 중입니다!</h1>)
  // if (!bestMission) return (<h1>데이터를 불러오는 중입니다!</h1>)

  return (
    <div className='mission_container'>
      <div className='mission_banner'>
        <h1 className='mission_banner_title'> 미션소개</h1>
        <h3 className='mission_banner_desc1'> 환경을 움직이는 폴래닛의 작은 습관들</h3>
        <h3 className='mission_banner_desc2'> 폴래닛만의 다양한 환경 미션을 만나보세요!</h3>
      </div>
      <div className='mission_header'>
        <div className='mission_header_title'>
          <h1>폴래닛의 미션을 소개합니다.</h1>
          <h4>기후변화 위기를 겪고 있는 지구의 환경에 직접적인 영향을 끼치면서도 쉽고 재밌습니다.</h4>
        </div>
        <div className='best_mission'>
          <div className='yesterday_best_mission' {...upScrollItem[0]}>
            <div className='mission_best_title' >
              <span>환경 지킴이들의 추천 미션 👍</span>
            </div>
            <img src='mission_plogging.png' style={{ width: '90%', borderRadius: '20px' }} />
            <div className='mission_nick'>
              <h3 className='mission_rcm_title'>리필 제품 사용하기</h3>
              <h3 className='mission_rcm_content'>주간미션</h3>
              <h3 className='mission_rcm_content'>포인트 🔥 20점 🔥</h3>
            </div>
          </div>
          <div className='lastweek_best_mission' {...upScrollItem[1]}>
            <div className='mission_best_title'>
              <span>폴래닛 유저들의 추천 미션 👍</span>
            </div>
            <img src='mission_tumblur.png' style={{ width: '90%', borderRadius: '20px' }} />
            <div className='mission_nick'>
            <h3 className='mission_rcm_title'>텀블러 사용하기</h3>
              <h3 className='mission_rcm_content'>일일미션</h3>
              <h3 className='mission_rcm_content'>포인트 🔥 10점 🔥</h3>
            </div>
          </div>
          {/* <div className='lastweek_best_mission' {...upScrollItem[2]}>
            <div className='mission_best_title'>
              <span>포인트 가장 많이 주는 미션</span>
            </div>
            <img src='mission_refill.png' style={{ width: '100%', borderRadius: '20px' }} />
            <div className='mission_nick'>
              <span>(bestMission.m_title)</span>
            </div>
          </div> */}
          {/* <div className='yesterday_best_user'>
            <div className='mission_title'>
              <span>어제 미션 1등 유저</span>
            </div>
            <img src={images['']} style={{ width: "300px", margin: "10px" }} />
            <img src='mission_refill.png' style={{width:'100%', borderRadius:'20px'}}/>
            <div className='mission_nick'>
              <span>이거 미션 일등한 놈</span>
            </div>
          </div> */}
        </div>
      </div>
      <Route path={`/mission/listTotal`} component={MissionList} />
      <Route path={`/mission/item`} component={MissionItem} />

    </div>
  )
}

export default MissionPage