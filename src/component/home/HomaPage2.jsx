import React from 'react'
import { useScrollFadeIn } from '../../hooks';
import Homepage from './Homepage';

const HomaPage2 = () => {
  const upScrollItem = {
    0: useScrollFadeIn('up', 1),
    1: useScrollFadeIn('up', 1, 0.1),
    2: useScrollFadeIn('up', 1, 0.2),
    3: useScrollFadeIn('up', 1, 0.3),
    4: useScrollFadeIn('up', 1, 0.4),
  };

  const rightScrollItem = {
    0: useScrollFadeIn('right', 1),
    1: useScrollFadeIn('right', 1, 0.2),
    2: useScrollFadeIn('right', 1, 0.4),
  };

  const leftScrollItem = {
    0: useScrollFadeIn('left', 1),
    1: useScrollFadeIn('left', 1, 0.2),
    2: useScrollFadeIn('left', 1, 0.4),
  };

  return (
    <div className='home2_container'>
      <div className='home2_div1'>
        <div>
          <div {...rightScrollItem[0]}>
            <div className='home2_div1_left'>
              <h1 className='home2_div1_left_title'>
                <span style={{ fontSize: '1.2rem', color: "#01a3df" }}>미션</span><br />
                <span>환경보호미션</span><br />
                <div className='home2_div1_content'>
                  <span>기후변화를 늦출 수 있는</span><br />
                  <span>확실하지만, 쉬운</span><br />
                  <span>여러가지 미션</span><br />
                </div>
              </h1>
            </div>
          </div>
          <div className='iphoneImage' {...upScrollItem[0]}>
            {/* <img src='./example_image/mission_list.jpg' width={360} style={{ position: 'absolute', left: '120px', top: '50px', zIndex: '1' }} /> */}
            <img src='mobile3.png' width={500} style={{ position: 'relative', zIndex: '10' }} />
          </div>
          <div className='iphoneImage2' {...leftScrollItem[0]}>
            {/* <img src='./example_image/mission_list.jpg' width={360} style={{ position: 'absolute', left: '120px', top: '50px', zIndex: '1' }} /> */}
            <img src='mobile2.png' width={500} style={{ position: 'relative', zIndex: '10' }} />
          </div>
          <div>
            <div {...upScrollItem[1]}>
              <div className='home2_div1_right'>
                <h1 className='home2_div1_right_title'>
                  <span style={{ fontSize: '1.2rem', color: "#01a3df" }}>공유</span><br />
                  <span>게시글 작성</span><br />
                  <div className='home2_div1_content'>
                    <span>완료한 미션을 게시글로 작성해</span><br />
                    <span>다른 유저와 공유해보세요</span><br />
                    <span>마음에 든다면 추천을 눌러줄 수도 있어요</span><br />
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomaPage2