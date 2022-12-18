import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useScrollClipPath, useScrollFadeIn } from '../../hooks';

const MissionItem = ({ mission }) => {
  const { m_title, mission_code, m_target, m_result, m_get_point, m_sort, m_category,m_image } = mission
  const [per, setPer] = useState(0);
  const [image, setImage] = useState();

  const onPer = () => {
    const success = Math.ceil(m_result / m_target)*100;
    setPer(success);
  }

  const sort = {
    'd': '일일 미션',
    'w': '주간 미션'
  }

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
  useEffect(()=>{
    onPer();
  },[])
  return (
    <div className='mission_item'>
      <Link to={`/mission/read/${mission_code}`}>
        <img src={m_image !== '' ? `/display?fileName=/${m_image}` : ''} className='mission_img' style={{ borderRadius: '20px' }} />
      </Link>
      <h3 className='mission_list_title ellipsis'>{m_title}</h3>
      <h3 className='mission_detail'>{sort[m_sort]}({m_get_point}점)</h3>
      <h3 className='mission_detail'>달성율 🔥 {per}% 🔥</h3>
    </div>
  )
}

export default MissionItem