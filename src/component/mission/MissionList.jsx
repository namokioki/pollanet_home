
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { useScrollClipPath, useScrollFadeIn } from '../../hooks';
import MissionCtg1 from './MissionCtg1';
import MissionCtg2 from './MissionCtg2';
import MissionCtg3 from './MissionCtg3';
import MissionCtg4 from './MissionCtg4';
import MissionAll from './MissionAll';

const MissionList = () => {
	const [viewCtg1, setViewCtg1] = useState(false);
	const [viewCtg2, setViewCtg2] = useState(false);
	const [viewCtg3, setViewCtg3] = useState(false);
	const [viewCtg4, setViewCtg4] = useState(false);
	const [viewAll, setViewAll] = useState(true);

	const onViewAll = () => {
		setViewAll(true);
		setViewCtg1(false);
		setViewCtg2(false);
		setViewCtg3(false);
		setViewCtg4(false);
	}
	const onViewCtg1 = () => {
		setViewAll(false);
		setViewCtg1(true);
		setViewCtg2(false);
		setViewCtg3(false);
		setViewCtg4(false);
	}
	const onViewCtg2 = () => {
		setViewAll(false);
		setViewCtg1(false);
		setViewCtg2(true);
		setViewCtg3(false);
		setViewCtg4(false);
	}
	const onViewCtg3 = () => {
		setViewAll(false);
		setViewCtg1(false);
		setViewCtg2(false);
		setViewCtg3(true);
		setViewCtg4(false);
	}
	const onViewCtg4 = () => {
		setViewAll(false);
		setViewCtg1(false);
		setViewCtg2(false);
		setViewCtg3(false);
		setViewCtg4(true);
	}

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
		0: useScrollClipPath('left', 0.5, 0),
		1: useScrollClipPath('left', 0.7, 0),
		2: useScrollClipPath('left', 0.9, 0),
		3: useScrollClipPath('left', 1.1, 0),
		4: useScrollClipPath('left', 1.3, 0),
	}


	return (
		<div className='mission_list_container'>
			<div className='mission_navs_container'>
				<div className='mission_navs' {...leftClipPath[0]} onClick={onViewAll}>
					<img src='../character/plas_lv1.png' width={25} />
					<span className='mission_navs_title'>All Mission</span>
				</div>

				<div className='mission_navs1' {...leftClipPath[1]} onClick={onViewCtg1}>
					<img src='../character/meta_lv1.png' width={25} />
					<span className='mission_navs_title'>일회용품</span>
				</div>
				<div className='mission_navs2' {...leftClipPath[2]} onClick={onViewCtg2}>
					<img src='../character/ozoni_lv1.png' width={25} />
					<span className='mission_navs_title'>공해</span>
				</div>
				<div className='mission_navs3' {...leftClipPath[3]} onClick={onViewCtg3}>
					<img src='../character/ozoni_lv1.png' width={25} />
					<span className='mission_navs_title'>전기</span>
				</div>
				<div className='mission_navs4' {...leftClipPath[4]} onClick={onViewCtg4}>
					<img src='../character/ozoni_lv1.png' width={25} />
					<span className='mission_navs_title'>아나바다</span>
				</div>
			</div>

			{viewAll &&
				<>
					<MissionAll/>
				</>
			}
			{viewCtg1 &&
				<>
					<MissionCtg1/>
				</>
			}
			{viewCtg2 &&
				<>
					<MissionCtg2/>
				</>
			}
			{viewCtg3 &&
				<>
					<MissionCtg3/>
				</>
			}
			{viewCtg4 &&
				<>
					<MissionCtg4/>
				</>
			}
		</div>
	)
}

export default withRouter(MissionList)