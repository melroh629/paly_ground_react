import './App.css';
import { useState } from 'react';

function App() {
	const TodayDate = new Date();
	const CurrentDate = TodayDate.toLocaleDateString();

	let post = '강남 우동 맛집';
	let [글제목, 글제목변경] = useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
	//글제목 : state에 보관했던 자료
	//글제목변경: state 변경 도와주는 함수!!!!!!
	//useState(보관할 자료)

	// 좋아요 변경 
	let [따봉, 따봉변경] = useState(0);


	return (
		<div className="App">
			<div className='black-nav'>블로그 by 리액트 </div>
			<div className='list'>
				<h4>{
					글제목[0]}
					<button onClick={ ()=>{따봉변경(따봉+1)}}>따봉버튼</button>
					{/* onClick={ 함수이름만 써야함 } */}
					<span>{따봉}</span>
				</h4>
				<p>발행일: {CurrentDate}</p>
			</div>
		</div>
	);
}

export default App;
