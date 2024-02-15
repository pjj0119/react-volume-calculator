import React from 'react';
import {  useState, useEffect } from "react";
import "../res/css/VolumeTable.css";

function VolumeTableItem({add}) {
	
	// 로컬 스토리지에서 데이터를 불러올 때 초기값을 설정
	const initialAddSet = JSON.parse(localStorage.getItem('storageKey' + add)) || [{ id: 1 }];
	const [addSet, setAddSet] = useState(initialAddSet);

	// 세트 추가 함수
	const handleSetAddBtn = (e) => {
		e.preventDefault();
		const newSetAdd = { id: addSet.length + 1 };
		setAddSet([...addSet, newSetAdd]);
	}

	// 세트 삭제 함수
	const handleSetDeleteBtn = (e) => {
		e.preventDefault();
		const newSetDelete = addSet.slice(0, -1);
		if(addSet.length > 1){
			setAddSet(newSetDelete);
		}
	}

	// 로컬 스토리지에 초기값 설정
	useEffect(() => {
		localStorage.setItem('storageKey' + add, JSON.stringify(addSet));
	}, [addSet]);
return (
	<>
		{addSet.map(AddSet => (
			<tr key={AddSet.id}>
				<td>
					<div className="volume__table--set">
						<input type="number" id={`set${AddSet.id}`} name={`set${AddSet.id}`} value={AddSet.id} disabled/>
					</div>
				</td>
				
				<td>
					<div className="volume__table--weight">
						<input type="number" id={`weight${AddSet.id}`} name={`weight${AddSet.id}`}/>
					</div>
				</td>
				<td>
					<div className="volume__table--amount">
						<input type="number" id={`amount${AddSet.id}`} name={`amount${AddSet.id}`}/>
					</div>
				</td>
				<td>
					<div className="volume__table--check">
						<input type="checkbox" id={`check${AddSet.id}`} name={`check${AddSet.id}`}/>
						<label htmlFor={`check${AddSet.id}`}></label>
					</div>
				</td>
			</tr>
			
		))}
		
		<tr>
			<td colSpan={4}>
				<ul className="volume__btn">
					<li><a href="#" className='volume__btn--setAdd' onClick={handleSetAddBtn}>+ 세트추가</a></li>
					<li><a href="#" className='volume__btn--setDelte' onClick={handleSetDeleteBtn}>- 세트삭제</a></li>
				</ul>
			</td>
		</tr>
	</>
	
	)
}

export default VolumeTableItem