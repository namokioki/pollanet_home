import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Route, withRouter } from 'react-router-dom';
import './Rank.css';
import RankItem from './RankItem';
import RankList from './RankList';

const RankPage = () => {
    const [dayUser, setDayUser] = useState('');
    const [weekUser, setWeekUser] = useState('');

    // const callDayUser = async () => {
    //     try {
    //         const result = await axios.get('/user/dayuser')
    //         setDayUser(result.data)
    //         console.log(dayUser)

    //         const result2 = await axios.get('/user/weekuser') 
    //         setWeekUser(result2.data)
    //         console.log(weekUser)
    //     } catch (err) {
    //         console.log("ERROR >>>>>>>", err)
    //     }
    // }

    const images = {
        '1': '1st_mungi.png',
        '2': '1st_rash.png',
        '3': '1st_ozoni.png',
        '4': '1st_plas.png',
        '5': '1st_meta.png',
        '': '1st_rash.png'
    }

    useEffect(() => {
        // callDayUser()
    }, []);

    // if (!dayUser) return (<h1>일일 데이터를 불러오는 중입니다!</h1>)
    // if (!weekUser) return (<h1>주간 데이터를 불러오는 중입니다!</h1>)
    return (
        <div className='user'>
            <div className='banner'>
                <h1 className='banner_title'> 유저 랭킹</h1>
                <h3 className='banner_desc1'> 이번주 폴래닛 1위는 누구일까요?</h3>
                <h3 className='banner_desc2'> 환경을 위해 열심히 일한 유저들을 만나보세요!</h3>
            </div>
            <div className='rank_header'>
                <h1 className='rank_header_title'>폴래닛 지구 방위대 랭킹</h1>
                {/* <div className='header_con'>
                    <div className='yesterday_rank'>
                        <h1 className='rank_title'>어제 미션 1등 유저</h1>
                        <img src={images[dayUser.character_sort]} style={{ width: "450px", margin: "10px" }} />
                        <h1 className='rank_nick'>{dayUser.nickName !== null ? dayUser.nickName : '랭킹 집계 중입니다!'}</h1>
                    </div>
                    <div className='lastweek_rank'>
                        <h1 className='rank_title'>저번주 미션 1등 유저</h1>
                        <img src={images[weekUser.character_sort]} style={{ width: "300px", margin: "10px" }} />
                        <h1 className='rank_nick'>{weekUser.nickName !== null ? weekUser.nickName : '랭킹 집계 중입니다!'}</h1>
                    </div>
                    <div className='con3'>
                        <h1 className='rank_title'>어제 미션 1등 유저</h1>
                        <img src={images['']} style={{ width: "300px", margin: "10px" }} />
                        <h1 className='rank_nick'>이거 미션 일등한 놈</h1>
                    </div>
                </div> */}
            </div>
            <Route path="/point/rankListWeb" component={RankList} />
            <Route path="/point/item" component={RankItem} />
        </div>
    )
}

export default withRouter(RankPage)