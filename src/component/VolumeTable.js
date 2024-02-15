import React from 'react'
import {  useState, useEffect } from "react";
import "../res/css/VolumeTable.css";
import VolumeTableItem from './VolumeTableItem'
import VolumeBtn from './VolumeBtn'

function VolumeTable() {
	
	// 로컬 스토리지에서 데이터를 불러올 때 초기값을 설정
	const initialAdd = JSON.parse(localStorage.getItem('add')) || [{ id: 1, storageKey: 1 }];
  
	// 운동
	const [add, setAdd] = useState(initialAdd);
  
	// useEffect를 사용하여 add 상태가 변경될 때마다 로컬 스토리지에 저장
	useEffect(() => {
	  localStorage.setItem('add', JSON.stringify(add));
	}, [add]);
	
	// 운동추가
	const addBtn = (e) => {	
		e.preventDefault();
		const NewAdd = {id: add.length + 1 ,storageKey :add.length + 1 };
		setAdd([...add, NewAdd])
	}
	// 운동삭제
	const delteBtn = (e) => {
		e.preventDefault();
		const newDelete = add.slice(0, -1);
		if(add.length > 1){
			setAdd(newDelete);
			localStorage.removeItem("storageKey" + add.length);
		}
		
	}
  return (
	<>
		<div className='volume__table'>
			{add.map(add => (
				<table key={add.id}>
					<caption>세트, KG, 횟수, 완료</caption>
					<colgroup>
						<col/>
						<col style={{width:'30%'}}/>
						<col style={{width:'30%'}}/>
						<col/>
					</colgroup>
					<thead>
						<tr>
							<td colSpan={4}>
								<div className="volume__table--name">
									<input type="text" placeholder='종목'/>
								</div>
							</td>
						</tr>
						<tr>
							<td colSpan={4}>
									<p className='volume__table--volume'><span className="yellow">볼륨</span>0 <span className="gray">kg</span></p>
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
						<VolumeTableItem 
							add = {add.storageKey}
						></VolumeTableItem>
					</tbody>
				</table>
				
			))}
		</div>
		
		<VolumeBtn
			addBtn = {addBtn}
			delteBtn = {delteBtn}
		></VolumeBtn>
	</>
  )
}

export default VolumeTable