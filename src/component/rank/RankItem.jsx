import React from 'react'
import { Link } from 'react-router-dom';

const RankItem = ({ user }) => {
    const { user_id, nickName, user_point, user_grade, character_name, rank,character_image } = user;
    const style = {
        1: '_first',
        2: '_second',
        3: '_third'
    }
    return (
        <tr>
            <td className={'td_rank' + style[rank]}>{rank}</td>
            <Link to={`/point/rankReadWeb/${user_id}`}>
                <td className='td_char'>
                    <img src={`/display?fileName=${character_image}`} className={'td_image' + style[rank]} />
                    <span className='td_name'>{nickName}</span>
                </td>
            </Link>
            <td className='td_info'>{character_name} </td>
            <td className='td_info'>{user_point} 점</td>
            <td className='td_group'>{user_point} 점</td>
        </tr>
    )
}

export default RankItem