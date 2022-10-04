import React, { useState } from 'react'

const App = () => {
  //button을 클릭했을 때 일어나는 일 -> setInput
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  return (
    <div style={{ textAlign: "center", padding: "100px 0" }}>
      {/* {input} */}
      <ul>
        {
          list.map((it, idx) => <li key={idx}>{it}</li>)
        }      
      </ul>
      
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input || ''} />
      {/* <button onClick={()=>setInput(input + 1)}>입력</button> */}
      {/* <button onClick={()=>setList(['01','02'])}>입력</button> */}
      {/* list가 배열이라 배열 안으 값을 들고올 때는 ...list로 적음 */}
      <button onClick={() => setList([...list, input])}>입력</button>
      { console.log(list) }

    </div>
  )
}

export default App;