---
sidebarDepth: 3
---

# Display - flex
![Display Flex 지원 범위](https://dummyimage.com/740x280/0099ff/fff "Display Flex 지원 범위")
Display 속성을 정리하고 활요하는 방법을 정리합니다. 우리가 보는 대부분의 사이트는 레이아웃이 수직 구성에 위에서 아래로 스크롤 하여 사용합니다. 마크업 개발자가 레이아웃을 구성할 때 가장 많이 사용하는 Elements들은 기본적으로 Display 속성을 많이 사용하게 됩니다. Layout 설명에 앞서서 display 속성에 개념을 정리해볼까 합니다. 브라우저별로 지원가능 유무를 나눠서 이용방법을 정리하는 시간을 가져보겠습니다. 아래의 링크는 flex속성을 재밌게 공부 할 수 있는 사이트 입니다.
- [FLEXBOX FROGGY](http://flexboxfroggy.com/#ko/)


## Flex 속성이란?
flex속성은 다양한 상황에서 대응이 가능한 레이아웃 속성입니다. 예를 들면 요소의 크기가 가변적이거나, 동적으로 변할 때에도 효율적으로 요소를 배치, 정렬, 분산할 수 있는 방법을 보여주는 속성입니다.  
  
- flex 속성의 장점
    - 간단한 속성하나로 다양한 레이아웃을 대응 가능하다!
- flex 속성의 단점
    - Internet Explorer10, Internet Explorer11에서는 100%지원이 되지 않습니다.
  
가령 Internet Explorer에서는 Layout상황에 따라 추가 클래스를 붙이다던지, 선택자를 사용해서 분기를 줘야 하지만 flex속성은 정렬, 방향, 순서, 크기 등을 유연하게 조절할 수 있기 때문에 별도의 분기 처리를 줄일 수 있고, CSS만으로 다양한 레이아웃을 구현할 수 있는 속성입니다.


### Display Flex 지원 범위
flex속성은 Internet Explorer 10 이상이 지원한다. 하지만 Internet Explorer 10 이상이 완전히 지원하지는 않아 Internet Explorer 10과 Internet Explorer 11에서 원하는 UI구현이 제대로 되지 않는다. 그래서 PC에서는 flex속성을 사용하기에는 아직 많은 이슈가 있다. 같은 서비스를 PC, Mobile 나눠서 작업한 적이 있었는데, 그때 같은 화면의 UI를 flex사용 유무의 차이로 꽤나 복잡한 공수가 있었다. 그런 상황도 한번 뒤에 추가로 정리 해보려고 하겠습니다.
![Display Flex 지원 범위](https://dummyimage.com/740x280/0099ff/fff "Display Flex 지원 범위")


### flex
flex 속성은 flex-grow, flex-shrink, flex-basic을 포함하고 있습니다.    
Internet Explorer 9 및 이전 버전은 flex 속성을 지원하지 않습니다. Internet Explorer 10은 대체 -ms-flex 속성을 지원 합니다. Internet Explorer 11 및 최신 버전은 flex 속성을 완전히 지원합니다. (-ms- 접두사가 필요하지 않습니다)
  
| Flex 속성값  | 속성값 내용 |
| :------------ | :-----------: |
| flex-grow | flexible item이 들어갈 너비들에 대한 증가형 숫자를 지정합니다. |
| flex-shrink | flexible item이 들어갈 너비들에 대한 감소형 숫자를 지정합니다. |
| flex-basic | item의 길이를 지정합니다. |
| auto | 1 1 auto와 같다. |
| initial | 0 1 auto와 같다. |
| none | 0 0 auto와 같다. |
| inherit | 부모 요소로부터 값을 상속 받는다. |
  
예시)   
```css
#main div {
    -webkit-flex: 1; /* IE 10 */
    -ms-flex: 1; /* IE 10 */
    flex: 1;
}
```
[flex 예제](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_flex/)


### flexbox
Flexbox 레이아웃 모듈 이전에는 4 가지 레이아웃 모드가있습니다.
- 웹 페이지의 섹션에 대한 차단
- 텍스트 인라인
- 2 차원 테이블 데이터의 테이블
- 요소의 명시 적 위치를 위해 배치
플렉시블 박스 레이아웃 모듈은 플로트 또는 위치 지정없이 유연한 반응 형 레이아웃 구조를보다 쉽게 ​​설계 할 수 있습니다. flexbox 모델을 사용하려면 먼저 Flex 컨테이너를 정의해야합니다. display속성을 flex 로 설정하면 컨테이너가 유연 해집니다.  
  
[flexbox 예제](https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox/)
  

### flex-grow
width에 대한 증가형 숫자를 지정합니다. 기본값은 0입니다.  
Internet Explorer 10 및 이전 버전은 flex-grow 속성을 지원 하지 않습니다.  
  
예시)   
```html
<div id="main">
    <div style="background-color: red"></div>
    <div style="background-color: yellow"></div>
    <div style="background-color: green"></div>
    <div style="background-color: blue"></div>
    <div style="background-color: pink"></div>
</div>
```

```css
#main {
    width: 350px; /* 원하는 수치를 넣으면 됩니다. */
    height: 100px; /* 원하는 수치를 넣으면 됩니다. */
    display: flex; /* flexbox 사용하기 위해서 먼저 정의 */
}

#main div:nth-of-type(1) {flex-grow: 1;} /* 기본값은 0입니다. */
#main div:nth-of-type(2) {flex-grow: 3;} 
#main div:nth-of-type(3) {flex-grow: 1;} 
#main div:nth-of-type(4) {flex-grow: 1;} 
#main div:nth-of-type(5) {flex-grow: 1;}
```
[flex-grow 예제](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_flex-grow/)