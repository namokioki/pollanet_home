import React from 'react'
import './Home.css';
import { BsSearch } from "react-icons/bs";
import { useScrollClipPath, useScrollFadeIn } from '../../hooks';

const HomePage3 = () => {
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
    <div className='home3_container'>
      <div className='home3_div1'>
        <div className='home3_div1_title' {...rightScrollItem[0]}>
          <h1>
            <span>폴래닛만의 캐릭터</span><br />
            <div className='home3_div1_content'>
              <span>기후변화로 인해 태어난 다섯가지 귀여운 캐릭터와 다양한 미션을 수행해보세요</span><br />
              <span>나만의 캐릭터를 선택해 함께 기후위기를 헤쳐나갈 수 있어요</span>
              <span></span>
            </div>
          </h1>
        </div>
        <div className='home3_div1_image'>
          <div className='home3_div1_image_plas'>
            <a href='/plas'>
              <img src='./character/plas_lv4.png'  {...upScrollItem[0]} />
              <div className='home3_div1_image_plas_button'>
                <BsSearch size={50}/>
              </div>
            </a>
          </div>
          <div className='home3_div1_image_rash'>
            <a href='/rash'>
              <img src='./character/rash_lv4.png'  {...upScrollItem[1]}/>
              <div className='home3_div1_image_rash_button'>
                <span>상세보기</span>
              </div>
            </a>
          </div>
          <div className='home3_div1_image_meta'>
            <a href='/meta'>
              <img src='./character/meta_lv5.png'  {...upScrollItem[2]}/>
              <div className='home3_div1_image_meta_button'>
                <span>상세보기</span>
              </div>
            </a>
          </div>
          <div className='home3_div1_image_munji'>
            <a href='/munji'>
              <img src='./character/munji_lv4.png' {...upScrollItem[3]}/>
              <div className='home3_div1_image_munji_button'>
                <span>상세보기</span>
              </div>
            </a>
          </div>
          <div className='home3_div1_image_ozoni'>
            <a href='/ozoni'>
              <img src='./character/ozoni_lv4.png' {...upScrollItem[4]}/>
              <div className='home3_div1_image_ozoni_button'>
                <span>상세보기</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage3