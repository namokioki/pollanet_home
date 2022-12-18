import React, { useEffect, useState } from 'react'
import { useScrollClipPath, useScrollFadeIn } from '../../hooks';

const HomePage6 = () => {
  const [position, setPosition] = useState(0);
  const onScroll = () => {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const upScrollItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.1),
    2: useScrollFadeIn('up', 1, 0.2),
    3: useScrollFadeIn('up', 1, 0.3),
    4: useScrollFadeIn('up', 1, 0.4),
  };

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

  return (
    <div className='home6_container'>
      <div class="home6_text_animaiton" {...upScrollItem[1]}>
        <div class="text_animaiton_container">
          <p class="text_animaiton_text_left">폴래닛은</p>
          <ul class="text_animaiton_list">
            <li class="text_animaiton_list_item">친구</li>
            <li class="text_animaiton_list_item">환경</li>
            <li class="text_animaiton_list_item">공유</li>
            <li class="text_animaiton_list_item">지구</li>
          </ul>
          <p class="text_animaiton_text_right">입니다.</p>
        </div>
      </div>
      <div className='home6_div2'>
        {/* <div className='home6_div2_left' {...leftClipPath[0]}>

        </div>
        <div className='home6_div2_right' {...rightClipPath[1]}>

        </div> */}
      </div>
    </div>
  )
}

export default HomePage6