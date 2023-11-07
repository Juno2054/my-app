import { useState } from 'react';
import './App.css';



function App() {
const [제목,제목변경] = useState('');
const [제목입력,제목입력변경]= useState([]);
const [내용, 내용변경] = useState('');
const [내용입력,내용입력변경]= useState([]);
const [하는중, 하는중변경] = useState([]);
const [끝남,끝남변경]=useState([]);

  function 추가 (){
    let 복사1 = [...제목];
    let 복사2= [...내용];
    let 복사3= [...하는중];
    복사1.push(제목입력);
    복사2.push(내용입력);
    제목변경(복사1);
    내용변경(복사2);
    복사3.push( {제목:제목입력,내용:내용입력});
    하는중변경(복사3);
  }
  function 삭제 (i,a,b)
  {
    let 복사1=[...a];
    b(복사1);
    복사1.splice(i,1);
  }
function 완료(i,a,b,c,d){
  let 복사1 = [...a];
  let 완료이동 = 복사1[i]
  let 복사2 = [...b,완료이동];
  복사1.splice(i, 1);
  c(복사1);
  d(복사2);

}

function 입력값(e,변경){
  변경(e.target.value)
}

  return (
    <div className="App">
      <div>나의 to.do.list</div>
      <div>
        <form action="">
          제목<input onChange={(e) => {입력값(e,제목입력변경) }} type="text" value={제목입력}/>
          내용 <input onChange={(e) => {입력값(e,내용입력변경) }} type="text" value={내용입력}/>
          <button onClick={(e)=>{ 
             e.preventDefault();
            추가();
            제목입력변경("");
            내용입력변경("");
          }} type='submit'>추가하기</button>
        </form>
      </div>
      <div>
        <div className='list'>
          <p>하는중</p>
          <div >
            {
            하는중.map(function(a,i){
              return(
              <div>
              <h4>`제목임`{a.제목}</h4>
              <h4>`내용임`{a.내용}</h4>
              <button onClick={function(){삭제(i,하는중,하는중변경)}}>삭제</button>
              <button onClick={function () {완료(i,하는중,끝남,하는중변경,끝남변경)}}>완료</button>
              </div>
              )
            })
          }
          </div>
        </div>
        <div className='list'>
          <p>끝남</p>
          <div >
          {
            끝남.map(function(a,i){
              return(
              <div>
              <h4>`제목임`{a.제목}</h4>
              <h4>`내용임`{a.내용}</h4>
              <button onClick={function(){삭제(i,끝남,끝남변경)}}>삭제</button>
              <button onClick={function () {완료(i,끝남,하는중,끝남변경,하는중변경)}}>취소</button>
              </div>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
