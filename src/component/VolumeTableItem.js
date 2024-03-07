import React from 'react';
import {  useState, useEffect } from "react";

function VolumeTableItem({exerciseNum , exerciseName, handleExerciseNameChange}) {
	
	// 로컬 스토리지에서 데이터를 불러올 때 초기값을 설정
	const initialAddSet = JSON.parse(localStorage.getItem('ExerciseNum' + exerciseNum)) || [{set1: {} }];
	
	const [addSet, setAddSet] = useState(initialAddSet);

	
	
	// 세트 추가 함수
	const handleSetAddBtn = (e) => {
		e.preventDefault();
		const newSetAdd = { ['set'+ parseInt(addSet.length + 1) ]: {} };
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
	const handleExerciseNameChangeLocal = (e) => {
		const iptValue = e.target.value;
		handleExerciseNameChange(exerciseNum, iptValue);
	};
		
	useEffect(() => {
		localStorage.setItem('ExerciseNum' + exerciseNum, JSON.stringify(addSet));
	}, [addSet]);

	const handleValueChange = (e, setIndex) => {
		const iptValue = e.target.value;
		const iptId = e.target.className;
	
		setAddSet((prevExerciseValue) => {
			const updatedExerciseName = [...prevExerciseValue];
			const existingDataIndex = updatedExerciseName.findIndex(
				(item) => Object.keys(item)[0] === 'set' + (setIndex + 1)
			);
	
			if (existingDataIndex !== -1) {
				const existingItem = updatedExerciseName[existingDataIndex]['set' + (setIndex + 1)];
				
				if (typeof existingItem === 'object' && existingItem !== null) {
					existingItem[iptId] = parseInt(iptValue);
					if (iptId === 'complete') {
						existingItem[iptId] = e.target && e.target.checked;
					}
				}
			}
	
			return updatedExerciseName;
		});
	};
	const handleVolume = () => {
		const result = addSet.reduce((total, currentSet) => {
		  const setNumber = Object.keys(currentSet)[0];
		  const kgValue = currentSet[setNumber].kg || 0;
		  const amountValue = currentSet[setNumber].amount || 0;
		  return total + amountValue * kgValue;
		}, 0);
		return result
	}
	
	  



return (
	<>
		<thead>
			<tr>
				<td colSpan={4}>
					
					<div className="volume__table--name">
						<input
							type="text"
							placeholder='종목'
							value={exerciseName['ExerciseName' + exerciseNum]}
							onChange={handleExerciseNameChangeLocal}
						/>
					</div>
				</td>
			</tr>
			<tr>
				<td colSpan={4}>
						<p className='volume__table--volume'><span className="yellow">볼륨</span><span className="result"> {handleVolume()}</span><span className="gray">kg</span></p>
					</td>
				</tr>
			<tr>
				<th>세트</th>
				<th>KG</th>
				<th>횟수</th>
				<th>완료</th>
			</tr>
		</thead>
		<tbody>
			{addSet.map((AddSet, index) => (
				<tr key={index}>
					<td>
						<div className="volume__table--set">
							<input type="number" id={`set${(String(exerciseNum) + '_' + parseInt(index + 1))}`} name={`set${(String(exerciseNum) + '_' + parseInt(index + 1))}`} value={index + 1} disabled/>
						</div>
					</td>
					
					<td>
						<div className="volume__table--kg">
							<input type="number" id={`kg${(String(exerciseNum) + '_' + parseInt(index + 1))}`} name={`kg${(String(exerciseNum) + '_' + parseInt(index + 1))}`} onChange={(e) => handleValueChange(e, index)} value={AddSet['set' + parseInt(index + 1)].kg}  className='kg'/>
						</div>
					</td>
					<td>
						<div className="volume__table--amount">
							<input type="number" id={`amount${(String(exerciseNum) + '_' + parseInt(index + 1))}`} name={`amount${(String(exerciseNum) + '_' + parseInt(index + 1))}`} onChange={(e) => handleValueChange(e, index)} value={AddSet['set' + parseInt(index + 1)].amount} className='amount'/>
						</div>
					</td>
					<td>
						<div className="volume__table--check">
							<input type="checkbox" id={`complete${(String(exerciseNum) + '_' + parseInt(index + 1))}`} name={`complete${(String(exerciseNum) + '_' + parseInt(index + 1))}`} onChange={(e) => handleValueChange(e, index)} checked={AddSet['set' + parseInt(index + 1)].complete} className='complete'/>
							<label htmlFor={`complete${(String(exerciseNum) + '_' + parseInt(index + 1))}`}></label>
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
		</tbody>
	</>
	
	)
}

export default VolumeTableItem