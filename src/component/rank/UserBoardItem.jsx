import React from 'react'

const UserBoardItem = ({ board }) => {
    const { b_user_id, b_register_Date, b_title, b_recommend, b_del, b_comment_count, board_code } = board;
    return (
        <>
            {b_del === '1'
                ?
                <tr className='udb_content'>
                    <td colSpan={4}> 삭제 된 게시글 입니다</td>
                </tr>
                :
                <tr className='udb_content'>
                    <td>{b_title}</td>
                    <td>{b_register_Date}</td>
                    <td>{b_recommend}</td>
                    <td>{b_comment_count}</td>
                </tr>
            }
        </>
    )
}

export default UserBoardItem 