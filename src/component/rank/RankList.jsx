import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import qs from 'qs';
import Pagination from "react-js-pagination";
import './Pagination.css';
import { withRouter } from 'react-router-dom';
import RankItem from './RankItem'; 
import { useScrollFadeIn } from '../../hooks';
import { Card, Col, Row } from 'react-bootstrap';

const RankList = ({ location, history }) => {
	const search = qs.parse(location.search, { ignoreQueryPrefix: true })
	const page = !search.page ? 1 : parseInt(search.page)
	const searchWord = !search.word ? '' : search.word;
	const num = 10;
	const [users, setUsers] = useState([]);
	const [total, setTotal] = useState(0);
	const [word, setWord] = useState(searchWord);

	const callAPI = async () => {
		const result = await axios.get(`/point/rankListWeb?search=${word}&page=${page}&num=${num}`)
		setUsers(result.data.rankList);
		setTotal(result.data.total);
		console.log(searchWord);
		console.log(page);
		console.log(num);
	}

	const leftScrollItem = {
		0: useScrollFadeIn('left', 1),
		1: useScrollFadeIn('left', 1, 0.4),
		2: useScrollFadeIn('left', 1, 0.6),
	};

	const upScrollItem = {
		0: useScrollFadeIn('up', 1, 0),
		1: useScrollFadeIn('up', 1, 0.1),
		2: useScrollFadeIn('up', 1, 0.2),
		3: useScrollFadeIn('up', 1, 0.3),
		4: useScrollFadeIn('up', 1, 0.4),
	};

	const onKeyDown = (e) => {
		if (e.keyCode === 13) {
			history.push(`/point/rankListWeb?search=${e.target.value}&page=1&num=${num}`)
		}
	}

	const onChangePage = (e) => {
		history.push(`/point/rankListWeb?search=${searchWord}&page=${e}&num=${num}`)
	}

	useEffect(() => {
		callAPI();
	}, [location]);

	if (!users) return (<h1>데이터를 불러오는 중입니다!</h1>)

	return (
		<div className='rank_list_con'>
			{/* <h1 className='rank_header_title'>유저 랭크</h1> */}
			<div>
				<div className='input_card'>
					<input
						{...leftScrollItem[0]}
						className='saerch_input'
						value={word}
						onChange={(e) => setWord(e.target.value)}
						onKeyDown={onKeyDown}
						placeholder="찾고 싶은 유저의 키워드를 입력하세요"
						id="word"
					/>
					{/* <label for="word">유저 이름</label> */}
				</div>
				<Row className='rank_table'>
					<thead style={{margin:'0px auto', border:'4px solid gray', borderRadius:'20px', padding:'20px'}}>
						{/* <th className='rank_table_th'>순위</th>
						<th className='rank_table_th'>정보</th>
						<th className='rank_table_th'>계급</th>
						<th className='rank_table_th'>포인트</th>
						<th className='rank_table_th'>그룹</th> */}
						<tbody>
							{users.map(user =>
								<RankItem key={user.user_id} user={user} />
							)}
						</tbody>
					</thead>
				</Row>
				<Pagination
					activePage={page}
					itemsCountPerPage={num}
					totalItemsCount={total}
					pageRangeDisplayed={10}
					prevPageText={"‹"}
					nextPageText={"›"}
					onChange={onChangePage} />
			</div>
		</div>
	)
}

export default withRouter(RankList)