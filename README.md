# vdong

### 참고할만한거
- https://bootstrap-vue.org/docs/components : 뷰에서 컴포넌트 쉽게 쓸수 있도록 만들어놔서 개꿀임
- npm install json-server
- json-generator : https://json-generator.com/ 
- 개발자의품격 선생님 : https://github.com/thegreat-jeremy/fullstack-bootstrap
## npm 20 사용 
```
$ nvm ls
->     v20.12.0
lts/iron -> v20.12.0
```

## 깃시그니쳐
```
git config --local user.name "dong"
git config --local user.email "ultraraptor@naver.com"
```

## vuex 톺아보기 (상태관리)
```
https://v3.vuex.vuejs.org/kr/
vuex 는 vue APP 상태관리패턴+라이브러리
app 에서 모든 컴포넌트들에 대한 중앙집중식 저장소 역할
```

### 상태관리 배워보기
```text

- "단방향 데이터 흐름" 개념
  - State 상태 : 앱을 작동하는 원본 소스 입니다.
  - View(vue 아님) : 상태의 선언적 매핑입니다.
  - Action : 뷰 에서 사용자 입력에 대해 반응적으로 상태를 바꾸는 방법입니다.

[Actions] -> [State] -> [View] 
     ㄴ-------------------ㅓ


- 하지만 상태공유라는 문제...
- 공통의 상태를 공유하는 여러 컴포넌트 가 있는 경우 단순함이 빠르게 저하되는 문제가 있음
  - 여러 뷰는 같은 상태에 의존합니다.
  - 서로 다른 뷰의 작업은 동일한 상태를 반영해야 할 수 있습니다.


- Vuex는 공유된 상태 관리를 처리하는 데 유용하지만, 개념에 대한 이해와 시작하는 비용도 함께 듭니다. 
- 그것은 단기간과 장기간 생산성 간의 기회비용이 있습니다.
- 대규모 SPA를 구축하지 않고 Vuex로 바로 뛰어 들었다면, 시간이 오래 걸리고 힘든일일 것입니다. 이것은 일반 적인 일입니다. 앱이 단순하다면 Vuex없이는 괜찮을 것입니다. 간단한 글로벌 이벤트 버스 (opens new window)만 있으면됩니다. 그러나 중대형 규모의 SPA를 구축하는 경우 Vue컴포넌트 외부의 상태를 보다 잘 처리할 수 있는 방법을 생각하게 될 가능성이 있으며 Vuex는 자연스럽게 선택할 수 있는 단계가 될 것입니다.
```