## useState 사용시 렌더링 문제

`
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])
  
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
      if(toDo === ""){
        return;
      }
    settoDos((current) => [toDo, ...current]);
    console.log(toDos);
    settoDo("");
  };
`

### 문제점 : 위 코드에서 `console.log` 작성시 toDo와 합쳐진 값이 나와야하는데, toDos의 예전값만 노출

### 이유
React의 상태 업데이트가 비동기적이기 때문이다.

settoDos실행시 React에서 다음 렌더링 주기에서 처리할 상태 업데이트를 예약한다. 하지만 `console.log`의 시점에서 아직 상태 업데이트가 적용되지 않았기 때문에 예전 값으로 출력해준다.

### 해결방법
toDos를 출력할 때, useEffect를 사용해주면 변경된 값을 노출해준다.

`
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);
`
