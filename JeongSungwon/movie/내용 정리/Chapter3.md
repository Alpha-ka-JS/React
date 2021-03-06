# 3. STATE
## 3.0 Class Components and State
- state: data가 동적으로 변하는 것들(props로 해결이 불가한 것들)
- function component VS class component  
  1. function component  
      - function이므로 return 존재하고 이후 screen에 표시
  2. class component
      - class이지만, react component으로부터 확장 되고 screen에 표시  
      - react는 class component의 `render method를 실행`
- class component를 사용하는 이유는 `state 떄문`
- state 사용 예시

```JSX
state = {
  count: 0
}
render() {
  return <h1>{this.state.count}</h1>;
}
```

- React는 props로 onClick을 주면 클릭효과를 줌  
(JavaScript의 addEventlistener로 click을 주는 것과 같음)

## 3.1 All you need to know about State
- state 값을 직접 변경할 수 없고, setState()를 사용한다
- React는 setState() 후 render function을 재실행 시킴.

## 3.2. Component Life Cycle
- function component : render()만 갖을 수 있음
- class component : 다른 함수도 갖고 있음
  - componentDidMount() - 생성 될 때
  - componentDidUpdate - 업데이트 할 때
  - componentWillUnmount - 제거 할 때
