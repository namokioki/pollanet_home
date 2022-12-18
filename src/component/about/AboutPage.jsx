import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import { useScrollClipPath, useScrollFadeIn } from '../../hooks';
import './About.css';

const AboutPage = () => {
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
    1: useScrollFadeIn('up', 1, 1),
    2: useScrollFadeIn('up', 1, 0.5),
    3: useScrollFadeIn('up', 1, 0.6),
    4: useScrollFadeIn('up', 1, 0.7),
    5: useScrollFadeIn('up', 1, 0.8),
    6: useScrollFadeIn('up', 1, 0.9),
  };

  const DownScrollItem = {
    0: useScrollFadeIn('down', 1, 1),
    1: useScrollFadeIn('down', 1, 2),
    2: useScrollFadeIn('down', 1, 3),
  };

  const leftScrollItem = {
    0: useScrollFadeIn('left', 1, 0),
    1: useScrollFadeIn('left', 1, 0.4),
    2: useScrollFadeIn('left', 1, 0.5),
    3: useScrollFadeIn('left', 1, 0.6),
  };

  const rightScrollItem = {
    0: useScrollFadeIn('right', 1),
    1: useScrollFadeIn('right', 1, 0.6),
    2: useScrollFadeIn('right', 1, 0.8),
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
    <div className='about_container'>
      <div className='about_div1'>
        <div className='about_div1_title'>
          <span {...upScrollItem[0]}>가장 작은 습관에서 시작된</span><br />
          <span {...upScrollItem[1]}>가장 빠른 움직임</span>
        </div>
      </div>
      <div className='about_div2'>
        <div className='about_div2_title'>
          <span style={{ opacity: (position - 400) / 300 }}>변화의 시작은</span><br />
          <span style={{ opacity: (position - 400) / 300 }}>사소한 아이디어였습니다</span>
          <div className='about_div2_content_right' {...leftScrollItem[1]}>
            <img src='./about_mimoticon/mimoticon2.png' />
          </div>
          <div className='about_div2_content_left' {...leftScrollItem[0]}>
            <img src='./about_mimoticon/mimoticon.png' />
          </div>
        </div>
      </div>
      <div className='about_div3'>
        <div className='about_div3_title' {...rightScrollItem[0]}>
          <span>폴래닛이라는 이름을 얻기까지</span>
        </div>
        <div className='about_div3_content'>
          <div {...upScrollItem[2]}>
            <h2>09월</h2>
            <ol>
              <li>15일 아이템 주제 회의1</li>
              <li>22일 아이템 주제 회의2</li>
              <li>29일 역할 분담</li>
            </ol>
          </div>
          <div {...upScrollItem[3]}>
            <h2>10월</h2>
            <ol>
              <li>5일 안드로이드 시장 조사</li>
              <li>6일 가제 선정 'Save Us'</li>
              <li>13일 유저 페르소나 선정 및 아이템 구체화</li>
              <li>20일 유저 플로우 선정</li>
              <li>27일 디자인 컨셉 회의</li>
            </ol>
          </div>
          <div {...upScrollItem[4]}>
            <h2>11월</h2>
            <ol>
              <li>3일 캐릭터 데모 버전 디자인 및 디자인 구체화</li>
              <li>10일 데이터 베이스 테이블 작성 및 백엔드 작업</li>
              <li>17일 안드로이드/ 프론트 작업 및 캐릭터, 디자인 확정</li>
              <li>24일 안드로이드/ 프론트 작업 마무리, 디버깅</li>
              <li>28일 프로젝트 완료 폴래닛 탄생!</li>
            </ol>
          </div>
        </div>
      </div>
      <div className='about_div4'>
        <div className='about_div4_container' style={{ opacity: (position - 2200) / 1000 }}>
          <div className='about_div4_title' >
            <span>'세상을 바꾸는 가장 작은 습관'</span><br />
          </div>
          <div className='about_div4_content'>
            <span>일회용 컵을 사용해 커피를 마실 때마다 배출되는 플라스틱의 양은 얼마일까?</span><br />
            <span>사소한 궁금증에서 시작된 폴래닛은</span><br />
            <span>'Pollution'과 'Planet'의 합성어로 오염된 행성을 뜻합니다.</span><br />
            <span>가장 작지만, 가장 빠른 생활 속의 환경보호활동으로</span><br />
            <span>기후위기 가속을 밟은 지구의 상황을</span><br />
            <span>조금이나마 늦추려는 사소한 노력이 폴래닛을 만들었습니다.</span>
          </div>

        </div>
      </div>
      <div className='about_div5'>
        <div className='about_div5_container'>
          <div className='about_div5_carousel_container'>
            <Carousel variant="dark">
              <Carousel.Item>
                <div className='about_div5_carousel_div'>
                  <div className='about_div5_carousel_img'>
                    <img src='./team/sujung.png' />
                  </div>
                  <div className='about_div5_carousel_content'>
                    <span>'우리나라에 이런 프로그램이 있으면 좋겠다' 라는 마음으로 나의 사업이라 생각하고 만들다 보니 왜 이리도 설레는지 모르겠습니다.  </span><br />
                    <span>그래서 프로젝트를 하는 과정은 나의 꿈을 그려보는 시간이었습니다. </span><br />
                    <span>그리고 한 가지 느낀 것은 어떤 일을 하고자 할 때 나아가야 할 방향과 목적이 뚜렷해야 한다는 것입니다.</span><br />
                    <span>그동안 추상적인 꿈처럼 생각해왔던 프로그램을 하나하나 완성하다보니 조금씩 풀려갔고 분량이 많아질수록 보람도 커졌습니다.</span><br />
                    <span>다 마치고 나니 정말 기쁘고 같이 만든 팀원들이 자랑스럽습니다. 또, 이런 값진 경험을 할 수 있어서 너무 감사합니다.</span>
                  </div>
                  <div className='about_div5_carousel_name'>
                    <span>Front-End Developer, 황수정</span>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='about_div5_carousel_div'>
                  <div className='about_div5_carousel_img'>
                    <img src='./team/woojin.png' />
                  </div>
                  <div className='about_div5_carousel_content'>
                    <span>하나의 목표를 가지고 모두가 함께 달려가면서 </span><br />
                    <span>서로에게 부족한 부분을 채워가고 알아갈 수 있었습니다.</span><br />
                    <span>다들 목표를 가진다면 끝까지 달려갈 수 있을 겁니다.</span><br />
                    <span>화이팅!</span><br />
                    <span>프로젝트 하는 동안 즐거웠습니다. 감사합니다.</span>
                  </div>
                  <div className='about_div5_carousel_name'>
                    <span>신우진</span>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='about_div5_carousel_div'>
                  <div className='about_div5_carousel_img'>
                    <img src='./team/hyerin.png' />
                  </div>
                  <div className='about_div5_carousel_content'>
                    <span>약 한 달간 진행한 프로젝트는 올해 가장 뜻깊었던 일이었습니다. </span><br />
                    <span>프로젝트 초기엔 그저 짐이 되지 말자고 시작했지만 팀원들 모두가 서로 서로 보완하며 성장해가니,</span><br />
                    <span>하나의 톱니바퀴로 맞물려 도움이 되고 있다는 사실이 기뻤습니다. </span><br />
                    <span>좋은 취지의 주제로 좋은 사람들과 좋은 프로그램을 완성했다는 사실은 앞으로의 작업에 있어 중요한 주춧돌이 될 것 같습니다. </span><br />
                    <span>이렇게 성장할 수 있도록 잘 이끌어주신 팀원분들께 감사드립니다.</span>
                  </div>
                  <div className='about_div5_carousel_name'>
                    <span>Full Stack Developer, 이혜린</span>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='about_div5_carousel_div'>
                  <div className='about_div5_carousel_img'>
                    <img src='./team/hyuna.png' />
                  </div>
                  <div className='about_div5_carousel_content'>
                    <span>새로운 도전을 할 수 있음에 감사한 시간이었습니다.</span><br />
                    <span>여태까지와는 또 다른 나를 만날 수 있었고, 값진 것은 어떤 것인지, 신중함은 중요하지만 망설임은 중요치 않다는 것도 깨달았습니다.</span><br />
                    <span>제가 걸어왔던 길을 조금쯤은 의심해도 괜찮다는 위로와, 저는 운이 좋다는 것도 알게 됐습니다.</span><br />
                    <span>흔히들 말하는 '초심자의 행운' 이었을지도 모릅니다. 행운일지, 실력일지는 앞으로의 제가 결정한다고 생각합니다.</span><br />
                    <span>많은 걸 알게 된 만큼 그것들을 제 것으로 만들겠습니다. 저와 함께 해주신 모든 분들께 감사합니다.</span>
                  </div>
                  <div className='about_div5_carousel_name'>
                    <span>Front-End Developer, 이현아</span>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='about_div5_carousel_div'>
                  <div className='about_div5_carousel_img'>
                    <img src='./team/teahee.png' />
                  </div>
                  <div className='about_div5_carousel_content'>
                    <span>전속력으로 달리면 금방 멈추게 됩니다.</span><br />
                    <span>지금 하고 있는 일도 마찬가지입니다.</span><br />
                    <span>조급한 생각으로 모든 것을 마무리 하려는 것보다</span><br />
                    <span>하나씩 완성해 나가는 것이 중요합니다.</span><br />
                    <span>감사합니다.</span>
                  </div>
                  <div className='about_div5_carousel_name'>
                    <span>Full Stack Developer/Team Leader, 박태희</span>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='about_div5_carousel_div'>
                  <div className='about_div5_carousel_img'>
                    <img src='./team/sunjae.png' />
                  </div>
                  <div className='about_div5_carousel_content'>
                    <span>게임 개발자도 게임을 하느라 밤을 새웠고,</span><br />
                    <span>유명 작가도 서점에서 글을 마음에 담았고,</span><br />
                    <span>거장들도 영화관에 살았던 관객이었습니다.</span><br />
                    <span>누구나 처음에는 그 일을 먼저 즐겼습니다.</span><br />
                    <span>즐기다 보니 그것을 만드는 사람이 되었습니다.</span>
                  </div>
                  <div className='about_div5_carousel_name'>
                    <span>Android Developer, 박선재</span>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='about_div5_carousel_div'>
                  <div className='about_div5_carousel_img'>
                    <img src='./team/ujin.png' />
                  </div>
                  <div className='about_div5_carousel_content'>
                    <span>프로젝트를 처음 시작할 땐 매우 두려웠습니다.</span><br />
                    <span>팀 작업이 처음이었기도 하고, '과연 내가 할 수 있을까?' 라는 생각이 계속 들었습니다.</span><br />
                    <span>하지만 프로젝트를 진행하면서 막히는 부분이나 힘들었던 부분을 서로 보완하고 맞춰서 나아갔습니다.</span><br />
                    <span>그 과정에서 팀원과의 소통, 화합이 중요하다는 것을 다시 한 번 깨닫게 되었습니다. </span><br />
                    <span>약 한 달간, 부족한 제가 훌륭한 팀원들과 멋진 프로젝트를 진행할 수 있어서 감사하다고 전하고 싶습니다.</span>
                  </div>
                  <div className='about_div5_carousel_name'>
                    <span>Android Developer, 변유진</span><br />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='about_div6'>
        <div className='about_div6_container'>
          <div className='about_div6_title'>
            <span {...DownScrollItem[0]}>안녕하세요</span><br />
            <span {...DownScrollItem[1]}>여기는 폴래닛입니다</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage