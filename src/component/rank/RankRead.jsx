import axios from 'axios';
import React, { useEffect, useState } from 'react'
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import UserBoardItem from './UserBoardItem';
import UserMissionItem from './UserMissionItem';

const RankRead = ({ match, location }) => {
  const user_id = match.params.user_id;
  const search = qs.parse(location.search, { ignoreQueryPrefix: true })
  const page = !search.page ? 1 : parseInt(search.page)
  const num = 5;
  const [boards, setBoards] = useState([]);
  const [missions, setMissions] = useState([]);
  const [user, setUser] = useState('');
  const [viewBoard, setviewBoard] = useState(true);
  const [viewMission, setViewMission] = useState(false);

  const callUser = async () => {
    const result = await axios.get(`/point/rankReadWeb/${user_id}`)
    setUser(result.data);
  }

  const callBoard = async () => {
    const result = await axios.get(`/board/userBoardList/${user_id}?page=1&num=5`)
    setBoards(result.data);
  }
  const callMission = async () => {
    const result = await axios.get(`/umission/userMissionList/${user_id}?um_start=1&um_number=5`)
    setMissions(result.data);
  }

  const char = {
    '1': '먼지',
    '2': '래쉬',
    '3': '오조니',
    '4': '플라스',
    '5': '메타',
    '': '1st_rash.png'
  }

  const onViewBoard = () => {
    setviewBoard(true);
    setViewMission(false);

  }

  const onViewMission = () => {
    setviewBoard(false);
    setViewMission(true);
  }
  useEffect(() => {
    callUser();
    callBoard();
    callMission();
  }, []);

  if (!user) return <h1>데이터를 불러오는 중입니다!</h1>

  return (
    <div className='user_info_rank' >
      <div className='user_banner'>
        <h1 className='user_banner_title'>유저 정보</h1>
        <h3 className='user_banner_desc1'> 안녕하세요! 폴래닛 지구방위대</h3>
        <h3 className='user_banner_desc2'> {user.nickName}입니다!</h3>
      </div>
      <div className='user_con'>
        <div className='user_info_left'>
          <div className='user_info_box'>
            <div className='user_img_box'>
              <img src={`/display?fileName=${user.character_image}`} className='user_img' />
            </div>
            <h3 className='user_nickname'>{user.nickName}</h3>
            <span className='user_rank_no'>{user.rank} 위</span>
          </div>
        </div>
        <div className='user_info_right'>
          <div className='user_detail_box'>
            <h3 className='udb_title'>캐릭터</h3>
            <h3 className='udb_con'>{char[user.character_sort]}</h3>
            <h3 className='udb_title'>레벨</h3>
            <h3 className='udb_con'>LV {user.character_grade}</h3>
            <h3 className='udb_title'>포인트</h3>
            <h3 className='udb_point'>{user.user_point} 점</h3>
          </div>
          <div className='button_box' >
            <div className='button_baord' onClick={onViewBoard}>
              <h3 className='button_name'>게시글 보기</h3>
            </div>
            <div className='button_mission' onClick={onViewMission}>
              <h3 className='button_name'>미션 보기</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='list_con'>
        {viewBoard &&
          <>
            <h1 className='user_header_title'>
              ✨{user.nickName} ✨ 님의 BEST 게시글
            </h1>
            <div className='list_box'>
              <table className='user_board_table'>
                <thead className='ubt_header'>
                  <tr>
                    <th style={{ width: "800px" }}>게시글 제목</th>
                    <th style={{ width: "300px" }}>작성일</th>
                    <th style={{ width: "150px" }}>추천수</th>
                    <th style={{ width: "150px" }}>댓글수</th>
                  </tr>
                </thead>
                <tbody>
                  {boards.length === 0 ?
                    <tr>
                      <td className='udb_blank' colSpan={4}> 작성한 게시글이 없습니다!</td>
                    </tr>
                    :
                    boards.map(board =>
                      <UserBoardItem key={board.board_code} board={board} />
                    )}
                </tbody>
              </table>
            </div>
          </>
        }
        {viewMission &&
          <>
            <h1 className='user_header_title'>
            ✨{user.nickName} ✨ 님의 최근 미션
            </h1>
            <div className='list_box'>
              <table className='user_board_table'>
                <thead className='ubt_header'>
                  <tr>
                    <th style={{ width: "150px" }}>카테고리</th>
                    <th style={{ width: "800px" }}>미션</th>
                    <th style={{ width: "300px" }}>완료일</th>
                    <th style={{ width: "150px" }}>포인트</th>
                  </tr>
                </thead>
                <tbody>
                  {missions.length === 0 ?
                    <tr>
                      <td className='udb_blank' colSpan={4}> 최근 수행한 미션이 없습니다!</td>
                    </tr>
                    :
                    missions.map(mission =>
                      <UserMissionItem key={mission.user_mission_code} mission={mission} />
                    )}
                </tbody>
              </table>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default withRouter(RankRead)