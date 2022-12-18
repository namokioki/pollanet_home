import React from 'react'
import { useScrollClipPath, useScrollFadeIn } from '../../hooks';
import './Home.css';
import Homepage2 from './HomaPage2';
import HomePage3 from './HomePage4';
import HomePage5 from './HomePage5';
import HomePage6 from './HomePage6';

const Homepage = () => {
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

  return (
    <div className='home_container'>
      <div className='home_div1'>
        <div className='home_div1_title'>
          <div {...upScrollItem[0]}>
            <span>세상을 바꾸는 가장 작은 습관</span><br />
            <span>폴래닛</span><br />
            <button style={{ width: '140px', padding: '10px', borderRadius: '10px' }} className="main_button"><img src='applekorea.png' width={20} />App Store</button>&nbsp;
            <button style={{ width: '140px', padding: '10px', borderRadius: '10px' }} className="main_button"><img src='googleplay.png' width={20} />Google Play</button>
          </div>
        </div>
      </div>
      <div className='home_div2'>
        <div className='home_div2_content'>
          <div>
            <span>즐겁고 간편하게 환경보호활동을 해보세요.</span><br />
            <span>이제껏 경험 못했던 쉽고 즐거운 환경보호활동,</span><br />
            <span>폴래닛과 함께라면 당신의 일상이 새로워질 거예요.</span>
          </div>
        </div>
      </div>
      <Homepage2 />
      <div style={{ width: '100%', height: '100vh', marginTop: '1200px' }}>
        <HomePage3 />
      </div>
      <div style={{ width: '100%', height: '120vh', marginTop: '1200px', backgroundColor: '#F9FAFC' }}>
        <HomePage5 />
      </div>
      <div style={{ width: '100%',height: '40vh'}}>
        <HomePage6 />
      </div>
    </div>
  )
}

export default Homepage