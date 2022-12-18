import './Home.css';
import React, { useEffect, useState } from 'react'
import { useScrollClipPath, useScrollFadeIn } from '../../hooks';

const HomePageNONE = () => {
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
  return (
    <div>
      <div style={{ width: '100%', height: '100vh', paddingTop: '300px' }}>
        <div {...DownScrollItem[0]}>
          <div style={{ textAlign: 'left', marginLeft: '250px' }}>
            <span style={{ fontSize: '1.5rem' }}>미션</span><br />
            <span style={{ fontSize: '2rem' }}>
              <span>환경에 직접적인 영향을 끼치면서</span><br />
              <span>쉽고 즐겁게 수행할 수 있는</span><br />
              <span>다양한 미션을 즐겨보세요</span>
            </span>
          </div>
        </div>
        <div>
          <div className='MainTest5MissionLayout'>
            <div style={{ width: '100%' }}>
              <img src='./mission/mission_use_ecobag.png' width={450} style={{opacity: (position - 5000) / 200}}/>
            </div>
          </div>
          <div className='MainTest5MissionLayout'>
            <div style={{ width: '100%' }}>
              <img src='./mission/mission_donation.png' width={450} style={{opacity: (position - 5100) / 200}}/>
            </div>
          </div>
          <div className='MainTest5MissionLayout'>
            <div style={{ width: '100%' }}>
              <img src='./mission/mission_eat_all.png' width={450} style={{opacity: (position - 5300) / 200}}/>
            </div>
          </div>
          <div className='MainTest5MissionLayout'>
            <div style={{ width: '100%' }}>
              <img src='./mission/mission_pull_off.png' width={450} style={{opacity: (position - 5200) / 200}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageNONE