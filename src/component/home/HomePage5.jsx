import React from 'react'
import './Home.css';
import { useScrollClipPath, useScrollFadeIn } from '../../hooks'

const HomePage5 = () => {
  const upClipPath = {
    0: useScrollClipPath('up', 0.3, 0),
    1: useScrollClipPath('up', 0.5, 0),
    2: useScrollClipPath('up', 0.7, 0),
    3: useScrollClipPath('up', 0.9, 0),
    4: useScrollClipPath('up', 1.1, 0),
  }

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

  return (
    <div className='home5_container'>
      <div className='home5_div1'>
        {/* <div className='home5_div1_title'>
          <span>미션으로 쌓은 포인트로 랭킹을 올려보세요</span><br />
        </div> */}
        <div className='home5_div2'>
          <div className='home5_div2_image'>
            {/* <img src='./example_image/mission_list.jpg' width={360} style={{ position: 'absolute', left: '610px', top: '50px' }} /> */}
            <img src='mobile4.png' width={500} style={{ position: 'relative' }} />
          </div>
          <div className='home5_div2_left' {...rightScrollItem[0]}>
            <p>미션으로 포인트를 쌓아</p>
            <p>캐릭터 레벨업을</p>
            <p>열심히 해보세요</p>
          </div>
          <div className='home5_div2_right' {...leftScrollItem[2]}>
            <p>포인트에 따라</p>
            <p>랭킹을 올릴 수 있고</p>
            <p>랭커에 도전할 수 있어요</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage5