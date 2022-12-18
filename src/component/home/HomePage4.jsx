import React, { useEffect, useState } from 'react'
import './Home.css';
import { useScrollFadeIn } from '../../hooks';
import HomePage3 from './HomePage3';

const HomePage4 = () => {
  const [position, setPosition] = useState(0);
  const onScroll = () => {
    setPosition(window.scrollY);
    console.log(position)
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

  const leftScrollItem = {
    0: useScrollFadeIn('left', 1),
    1: useScrollFadeIn('left', 1, 0.1),
    2: useScrollFadeIn('left', 1, 0.2),
  };

  const rightScrollItem = {
    0: useScrollFadeIn('right', 1),
    1: useScrollFadeIn('right', 1, 0.1),
    2: useScrollFadeIn('right', 1, 0.2),
  };
  
  return (
    <div>
      <HomePage3 />
      <div className='home4_container'>
        <div className='home4_div1'>
          <div className='home4_div1_title' {...leftScrollItem[0]}>
            <span>다양한 레벨</span>
            <div className='home4_div1_content'>
              <span>나만의 캐릭터를 성장시켜보세요</span><br />
              <span>Lv4까지 성장시켰다면</span><br />
              <span>또 다른 캐릭터와 함께 할 수도 있어요</span>
            </div>
          </div>
          <div className='home4_div2'>
            <div className='home4_div2_image' style={{ opacity: (position - 4800) / 100 }}>
              <img src='./character/plas_lv1.png' />
            </div>
            <div className='home4_div2_image' style={{ opacity: (position - 4850) / 100 }}>
              <img src='./character/plas_lv2.png' />
            </div>
            <div className='home4_div2_image' style={{ opacity: (position - 4900) / 100 }}>
              <img src='./character/plas_lv3.png' />
            </div>
            <div className='home4_div2_image' style={{ opacity: (position - 4950) / 100 }}>
              <img src='./character/plas_lv4.png' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage4