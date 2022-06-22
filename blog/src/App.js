import './App.css';
import { useState } from 'react';

function App() {
	let post = '역삼우동맛집'
	let [글제목,제목변경] = useState(['남자코트 추천','강남 우동맛집', '파이썬 독학']);
	//a = state에 보관했던 자료 나옴
	//b = state 변경 도와주는 함수
	let [좋아요, 좋아요변경] = useState(0)
	function 좋아요함수(){
		좋아요변경(좋아요+1)
	}
	function 제목변경함수(){
		let copy = [...글제목];
		copy[0] = '여자코트추천';
		제목변경(copy);
	}
	function listSort(){
		let copy2 = [...글제목];
		copy2.sort()
		제목변경(copy2)
	}
	return (
		<div className="App">
			<div className='black-nav'>
				<h2>리액트로 만든 블로그임</h2>
			</div>
			<button onClick={ 제목변경함수 }>제목변경버튼</button>
			<button onClick={ listSort }>정렬 버튼</button>
			<div className="list">
				<h4>
					{ 글제목[0] }
					<span onClick={좋아요함수}>💘</span>
					{좋아요}
				</h4>
				<p>발행: 2월 17일</p>
			</div>
			<div className="list">
				<h4>{ 글제목[1] }</h4>
				<p>발행: 2월 17일</p>
			</div>
			<div className="list">
				<h4>{ 글제목[2] }</h4>
				<p>발행: 2월 17일</p>
			</div>
			<Modal />
		</div>
	);
}


function Modal(){
	return(
		<div className='modal'>
			<h4>제목</h4>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	)
}
// 변수와 state 차이점
/*
일반 변수는 html에 자동으로 변경 안됨
state는 변경 되면 자동으로 재렌더링 됨 
변경시 자동으로 html에 반영하게 되도록 하고 싶으면 좋은 말 할때 state 쓰자
*/

export default App;
