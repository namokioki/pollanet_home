import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MissionRead = ({match}) => {
  const mission_code=match.params.mission_code;
  const [mission,setMission] = useState('')
  const callRead = async()=>{
    const result = await axios.get(`/mission/read/${mission_code}`)
    setMission(result.data);
  }
  useEffect(()=>{
    callRead();
  },[])

  if(!mission) return (<h1>데이터를 불러오는 중입니다.</h1>)
  return (
    <div className='mission_info_container' >
      <div className='mission_info_banner'>
        <h1 className='mission_info_banner_title'>미션 정보</h1>
        <h3 className='mission_info_banner_desc1'>세상을 바꾸는 작은 습관</h3>
        <h3 className='mission_info_banner_desc2'>플래닛의 미션을 만나보세요!</h3>
      </div>
      <div className='mission_info_box'>
        <img src={'/info.png'} className='mission_info_img'></img>
      </div>
      <div>
        <Link to="/mission/listTotal">
          <button className='mission_info_button'>뒤로가기</button>
        </Link>

      </div>
    </div>
  )
}

export default MissionRead