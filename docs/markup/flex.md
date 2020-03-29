---
sidebarDepth: 3
---

# Flex
![Display flex 지원 범위](https://dummyimage.com/740x280/0099ff/fff "Display flex란 어떤걸까?")
우리가 가장 많이 이용하는 웹들은 크게 위에서 아래로 스크롤 하여 이용하는 새로(height)형태의 웹을 많이 사용합니다. 기본적으로 레이아웃은 block개념으로 쌓여 내려가는 형태의 구조를 보여주고 있습니다. 그래서 작업 시 새로(height)형태의 레이아웃은 큰 문제가 없지만 가로(width)형태의 레이아웃일 경우 다양한 문제들이 생겨납니다.   
  
가령 A와 B의 각각의 영역에 콘텐츠 양이 각각 다른데 최대양 기준으로 같은 높이의 레이아웃을 잡아주세요. 라는(적어놓고도 잘 이해가 안가겠지만...) 가로(width)형태의 화면을 보게되면 마크업 개발자들은 고민을 많이 하게 됩니다. 대응 가능한 방법으로 float 속성을 이용하거나, inline-block, table 속성을 이용하긴 하지만 생각보다 유연하지 못한 속성이기도 합니다.   
  
Display flexbox 속성은 이런 문제에 유연하게 대응 가능합니다. 기존에 나와있는 Display flexbox 속성의 글과 실무경험 시 IE9까지 지원하는 서비스를 하면서(언제적 IE9인데...) 제한적인 속성사용으로 인해서 대응했던 방법 들에 대한 내용을 편하게 풀어 써보겠습니다.  
  
아래의 링크는 flex속성을 재밌게 공부 할 수 있는 사이트 입니다.
- [flexBOX FROGGY](http://flexboxfroggy.com/#ko/)
    
## flexbox 속성이란?
flexbox속성은 다양한 상황에서 대응이 가능한 레이아웃 속성입니다. 예를 들면 요소의 크기가 가변적이거나, 동적으로 변할 때에도 효율적으로 요소를 배치, 정렬, 분산할 수 있는 방법을 보여주는 속성입니다.  
  
- flexbox 속성의 장점
  - 간단한 속성하나로 다양한 레이아웃을 대응 가능하다!
- flexbox 속성의 단점
  - Internet Explorer10(이하 IE10), Internet Explorer11(이하 IE11)에서는 100%지원이 되지 않습니다.(부분적으로 적용이 됩니다.)
  
가령 Internet Explorer에서는 layout상황에 따라 추가 클래스를 붙이다던지, 선택자를 사용해서 분기를 줘야 하지만 flex속성은 정렬, 방향, 순서, 크기 등을 유연하게 조절할 수 있기 때문에 별도의 분기 처리를 줄일 수 있고, CSS만으로 다양한 레이아웃을 구현할 수 있는 속성입니다.
  
### flexbox 지원 범위
flex속성은 IE10 이상이 지원 합니다. 하지만 생각과 달리 IE10 에서 완전히 지원하지는 않아 IE10, IE11에서 원하는 UI구현이 제대로 되지 않는 경우가 종종 있습니다. 그래서 PC에서는 flex속성을 사용하기에는 아직 많은 무리가 있습니다. 같은 서비스를 PC, Mobile 나눠서 작업한 적이 있었는데, 그때 같은 화면의 UI를 flex사용 유무의 차이로 꽤나 복잡한 공수가 있었습니다. 그런 상황도 한번 뒤에 추가해보겠습니다.
![Display flex 지원 범위](https://dummyimage.com/740x280/0099ff/fff "Display flex 지원 범위")
  
  
### flexbox 시작!
정렬하려는 요소의 부모 요소에 다음과 같이 display: flex 속성을 선언합니다. 
  
```css
.flex_container {
    display: flex; /* flex속성을 90%는 진행 한 것 입니다! */
}
```
display: flex 속성을 적용하면 flex container가 되고, flex container의 자식 요소는 flex item이 됩니다. flex container와 flex item은 부모 요소와 자식 요소를 한 세트로 사용하는 Tag들 가령 ul li, ol li 를 생각하면 쉽게 이해할 수 있습니다.
  
flex item은 주축(main axis :  사물의 중심 축, 축선 이라는 뜻)에 따라 정렬된다. 주축의 방향은 flex container의 flex-direction 속성으로 결정한다. flex-direction 속성을 따로 지정하지 않으면 기본값인 row가 적용됩니다. 속성값 row는 주축의 방향을 왼쪽에서 오른쪽 가로 방향으로 흐르게 합니다(display: inline-block 으로 이해). flex-direction 속성의 또 다른 속성값인 column은 주축의 방향을 위에서 아래 세로 방향으로 흐르게 합니다(display: block 으로 이해).
  
### flexbox 부모, 자식 요소의 속성 구분
flexbox에서 사용하는 속성은 부모 요소인 flex container에 정의하는 속성과 자식 요소인 flex item에 정의하는 속성으로 나눠집니다. 전체적인 정렬이나 흐름에 관련된 속성은 flex container에 정의하고, 자식 요소의 크기나 순서에 관련된 속성은 flex item에 정의합니다(위에 말한 ul li로 이해 해봅시다).
  
부모요소 flex container 속성: flex-direction, flex-wrap, justify-content, align-items, align-content  
자식요소 flex item 속성: flex, flex-grow, flex-shrink, flex-basis, order  
![Display flex 지원 범위](https://dummyimage.com/740x280/0099ff/fff "Display flex 부모 자식 그림")

### flex 속성 구성
flex 속성은 flex-grow, flex-shrink, flex-basic을 포함하고 있습니다. IE9 및 이전 버전은 flex 속성을 지원하지 않습니다. IE10은 대체 -ms-flex 속성을 지원 합니다 하지만 근본적인 해결첵이지는 못합니다. IE11 및 최신 버전은 flex 속성을 완전히 지원합니다(-ms- 접두사가 필요하지 않습니다). 
| flex 속성값  | 속성값 내용 |
| :------------ | :-----------: |
| display | flex container를 정의 |
| flex-flow | flex-direction와 flex-wrap의 단축 속성 |
| flex-direction | flex items의 주 축(main-axis)을 설정 |
| flex-wrap | flex items의 여러 줄 묶음(줄 바꿈) 설정 |
| justify-content | 주 축(main-axis)의 정렬 방법을 설정 |
| align-content | 교차 축(cross-axis)의 정렬 방법을 설정(2줄 이상) |
| align-items | 교차 축(cross-axis)에서 items의 정렬 방법을 설정(1줄) |

#### display
display 속성으로 flex container를 정의합니다.  
보통 요소의 표시 방법을 display: block;, display: inline-block 혹은 display: none; 같은 속성을 많이 쓰고있습니다. 같은 요소의 표시 방법으로 block이나 inline이 아닌 flex(display: flex, display: inline-flex)로 정의합니다.
| 값 | 의미 |
| :------------ | :-----------: |
| flex | block 특성의 flex container를 정의 |
| inline-flex | inline 특성의 flex container를 정의 |
flex와 inline-flex는 차이는 단순합니다.  
display: flex; - flex container는 block 요소와 같은 성향(수직 쌓임)을 가지며,  
display: inline-flex - flex container는 inline(inline block) 요소와 같은 성향(수평 쌓임)을 가집니다.
  
여기서 말하는 수직(height)과 수평(width) 쌓임은 items가 아니라 container라는 것에 인지 해야 합니다.
두 값의 차이는 내부에 items에는 영향을 주지 않습니다.
![display](https://dummyimage.com/740x280/0099ff/fff "display")

#### flex-flow
이 속성은 단축 속성으로 flex items의 주 축(main-axis)을 설정하고 items의 여러 줄 묶음(줄 바꿈)도 설정합니다.
```css
.flex-container {
  flex-flow: row-reverse wrap; /* 주축 여러줄묶음; */
}
```
| 값 | 의미 | 기본값 |
| :------------ | :-----------: | :-----------: |
| flex-direction | items의 주 축(main-axis)을 설정 | row |
| flex-wrap | items의 여러 줄 묶음(줄 바꿈) 설정 | nowrap |
각 속성별로 정의하면 다음과 같습니다.
  
##### flex-direction
items의 주 축(main-axis)을 설정합니다.
| 값 | 의미 | 기본값 |
| :------------ | :-----------: | :-----------: |
| row | Itmes를 수평축(왼쪽에서 오른쪽으로)으로 표시 | row |
| row-reverse | items를 row의 반대 축으로 표시 |  |
| column | items를 수직축(위에서 아래로)으로 표시 |  |
| column-reverse | items를 column의 반대 축으로 표시 |  |
![flex-direction](https://dummyimage.com/740x280/0099ff/fff "flex-direction")

##### 주 축(main-axis)과 교차 축(cross-axis)
위에서 언급했었던 주 축(main-axis)과 교차 축(cross-axis)의 개념은 다음과 같습니다.  
row: items를 수평축(width)으로 표시하므로 이때는 주 축이 수평이며 교차 축은 수직이 됩니다.  
column: items를 수직축(height)으로 표시하므로 주 축은 수직이며 교차 축은 수평이 됩니다.  
즉, 방향(수평, 수직)에 따라 주 축과 교차 축이 달라지는걸 알 수 있습니다.  
![flex-direction](https://dummyimage.com/740x280/0099ff/fff "flex-direction")

##### 시작점(flex-start)과 끝점(flex-end)
시작점(flex-start)과 끝점(flex-end)이라는 개념도 있습니다.  
이는 주 축이나 교차 축의 시작하는 지점과 끝나는 지점을 지칭합니다.  
역시 방향에 따라 시작점과 끝점이 달라집니다.  
flex-start와 flex-end를 사용하는데 이는 방향에 맞는 그 시작점과 끝점을 의미합니다.
![시작점(flex-start)과 끝점(flex-end)](https://dummyimage.com/740x280/0099ff/fff "시작점(flex-start)과 끝점(flex-end)")

##### flex-wrap
items의 여러 줄 묶음(줄 바꿈)을 설정합니다.
기본적으로 items는 한 줄에서만 표시되고 줄 바꿈 되지 않습니다.
이는 지정된 크기(주 축에 따라 width나 height)를 무시하고 한 줄 안에서만 가변합니다.
items를 줄 바꿈 하려면 값으로 wrap을 사용해야 합니다.
| 값 | 의미 | 기본값 |
| :------------ | :-----------: | :-----------: |
| nowrap | 모든 Itmes를 여러 줄로 묶지 않음(한 줄에 표시) | row |
| wrap | items를 여러 줄로 묶음 |  |
| wrap-reverse | items를 wrap의 역 방향으로 여러 줄로 묶음 |  |
![flex-wrap](https://dummyimage.com/740x280/0099ff/fff "flex-wrap")

##### justify-content
주 축(main-axis)의 정렬 방법을 설정합니다.  
| 값 | 의미 | 기본값 |
| :------------ | :-----------: | :-----------: |
| flex-start | items를 시작점(flex-start)으로 정렬 flex-start | flex-start |
| flex-end | items를 끝점(flex-end)으로 정렬 |  |
| center | items를 가운데 정렬 |  |
| space-between | 시작 item은 시작점에, 마지막 item은 끝점에 정렬되고 나머지 items는 사이에 고르게 정렬됨 |  |
| space-around | items를 균등한 여백을 포함하여 정렬 |  |
![justify-content](https://dummyimage.com/740x280/0099ff/fff "justify-content")

##### align-content
교차 축(cross-axis)의 정렬 방법을 설정합니다.  
주의할 점은 flex-wrap 속성을 통해 items가 여러 줄(2줄 이상)이고 여백이 있을 경우만 사용할 수 있습니다.
! items가 한 줄일 경우 align-items 속성을 사용하세요.
| 값 | 의미 | 기본값 |
| :------------ | :-----------: | :-----------: |
| stretch | container의 교차 축을 채우기 위해 items를 늘림	stretch | stretch |
| flex-start | items를 시작점(flex-start)으로 정렬 |  |
| flex-end | items를 끝점(flex-end)으로 정렬 |  |
| center | items를 가운데 정렬 |  |
| space-between | 시작 item은 시작점에, 마지막 item은 끝점에 정렬되고 나머지 items는 사이에 고르게 정렬됨 |  |
| space-around | items를 균등한 여백을 포함하여 정렬 |  |
값 stretch는 교차 축에 해당하는 너비(속성 width 혹은 height)가 값이 auto(기본값)일 경우 교차 축을 채우기 위해 자동으로 늘어납니다.
![align-content](https://dummyimage.com/740x280/0099ff/fff "align-content")

##### align-items
교차 축(cross-axis)에서 items의 정렬 방법을 설정합니다.  
items가 한 줄일 경우 많이 사용합니다.  
주의할 점은 items가 flex-wrap을 통해 여러 줄(2줄 이상)일 경우에는 align-content 속성이 우선합니다.  
따라서 align-items를 사용하려면 align-content 속성을 기본값(stretch)으로 설정해야 합니다.  
| 값 | 의미 | 기본값 |
| :------------ | :-----------: | :-----------: |
| stretch | container의 교차 축을 채우기 위해 items를 늘림 | stretch |
| flex-start | items를 각 줄의 시작점(flex-start)으로 정렬 |  |
| flex-end | items를 각 줄의 끝점(flex-end)으로 정렬 |  |
| center | items를 가운데 정렬 |  |
| baseline | items를 문자 기준선에 정렬 |  |
![align-items](https://dummyimage.com/740x280/0099ff/fff "align-items")

### flex items
flex items를 위한 속성들은 다음과 같습니다.  
| 속성 | 의미 |
| :------------ | :-----------: |
| order | flex item의 순서를 설정 |
| flex | flex-grow, flex-shrink, flex-basis의 단축 속성 |
| flex-grow | flex item의 증가 너비 비율을 설정 |
| flex-shrink | flex item의 감소 너비 비율을 설정 |
| flex-basis | flex item의 (공간 배분 전) 기본 너비 설정 |
| align-self | 교차 축(cross-axis)에서 item의 정렬 방법을 설정 |
![flex items](https://dummyimage.com/740x280/0099ff/fff "flex items")

#### order
item의 순서를 설정합니다.  
item에 숫자를 지정하고 숫자가 클수록 순서가 밀립니다.  
음수가 허용됩니다.  
! HTML 구조와 상관없이 순서를 변경할 수 있기 때문에 유용합니다.  
| 값 | 의미 | 기본값 |
| :------------ | :-----------: | :-----------: |
| 숫자 | item의 순서를 설정 | 0 |
![order](https://dummyimage.com/740x280/0099ff/fff "order")

#### flex
item의 너비(증가, 감소, 기본)를 설정하는 단축 속성입니다.  
| 값 | 의미 | 기본값 |
| :------------ | :-----------: | :-----------: |
| flex-grow | item의 증가 너비 비율을 설정 | 0 |
| flex-shrink | item의 감소 너비 비율을 설정 | 1 |
| flex-basis | item의 (공간 배분 전) 기본 너비 설정 | auto |
```css
.item {
  flex: 1 1 20px;  /* 증가너비 감소너비 기본너비 */
  flex: 1 1;  /* 증가너비 감소너비 */
  flex: 1 20px;  /* 증가너비 기본너비 (단위를 사용하면 flex-basis가 적용됩니다) */
}
```
flex-grow를 제외한 개별 속성은 생략할 수 있습니다.  
만약 flex: 1; 로 작성하면 flex-grow: 1; 과 같습니다.  
그러면 나머지 속성은 생략했으니 기본값이 적용되어 flex-shrink: 1;, flex-basis: auto; 가 됩니다.  
즉 flex: 1; 혹은 flex: 1 1;은 flex: 1 1 auto;와 같다고 볼 수 있습니다만 그렇지 않습니다.  
  
flex-basis의 기본값은 auto입니다만 단축 속성인 flex에서 그 값을 생략할 경우 0이 적용됩니다.  
다시 정리하면 flex: 1; 혹은 flex: 1 1;은 flex: 1 1 0;이 된다는 것입니다.  
이 부분을 기억하지 않으면 엉뚱한 결과가 나올 수 있으니 주의합시다.

#### flex-grow
item의 증가 너비 비율을 설정합니다.  
숫자가 크면 더 많은 너비를 가집니다.  
item이 가변 너비가 아니거나, 값이 0일 경우 효과가 없습니다.  
| 값 | 의미 | 기본값 |
| :------------ | :-----------: | :-----------: |
| 숫자 | item의 증가 너비 비율을 설정 |	0 |
모든 items의 총 증가 너비(flex-grow)에서 각 item의 증가 너비의 비율 만큼 너비를 가질 수 있습니다.
예를 들어 item이 3개이고 증가 너비가 각각 1, 2, 1이라면,
첫 번째 item은 총 너비의 25%(1/4)을,
두 번째 item은 총 너비의 50%(2/4)를,
세 번째 item은 총 너비의 25%(1/4)을 가지게 됩니다.
![flex-grow](https://dummyimage.com/740x280/0099ff/fff "flex-grow")

#### flex-shrink
item이 감소하는 너비의 비율을 설정합니다.  
숫자가 크면 더 많은 너비가 감소합니다.  
item이 가변 너비가 아니거나, 값이 0일 경우 효과가 없습니다.  
| 값 | 의미 | 기본값 |
| :------------ | :-----------: | :-----------: |
| 숫자 | item의 감소 너비 비율을 설정 |	1 |
감소 너비(flex-shrink)는 요소의 너비에 영향을 받기 때문에 계산하기 까다롭습니다.  
영향을 받는다는 요소의 너비는 width, height, flex-basis 등으로 너비가 지정된 경우를 의미합니다.  
container의 너비가 줄어 items의 너비에 영향을 미칠 경우, 영향을 미치기 시작한 지점부터 줄어든 거리 만큼 감소 너비 비율에 맞게 item의 너비가 줄어듭니다.
예를 들어 container의 너비가 줄어 item의 너비에 영향을 미치기 시작한 지점부터 실제 줄어든 거리가 90px일 때,
요소 너비가 같은 item이 2개이고 지정된 감소 너비가 각각 2와 1이라면,
감소 너비는 2:1 비율이며,  
첫 번째 item은 90px의 2/3인 60px 만큼 너비가 감소하고,  
두 번째 item은 90px의 1/3인 30px 만큼 너비가 감소합니다.  
  
다른 예시로 container의 너비가 줄어 item의 너비에 영향을 미치기 시작한 지점부터 실제 줄어든 거리가 90px일 때,
요소 너비가 다른 item이 2개이고 요소 너비는 각각 200과 100이고,
지정된 감소 너비가 각각 2와 1이라면,
200 x 2 = 400과 100 x 1 = 100 즉 감소 너비는 4:1 비율이며,
첫 번째 item은 90px의 4/5인 72px 만큼 너비가 감소하고,
두 번째 item은 90px의 1/5인 18px 만큼 너비가 감소합니다.
![flex-shrink](https://dummyimage.com/740x280/0099ff/fff "flex-shrink")

#### flex-basis
item의 (공간 배분 전) 기본 너비를 설정합니다.  
값이 auto일 경우 width, height 등의 속성으로 item의 너비를 설정할 수 있습니다.  
하지만 단위 값이 주어질 경우 설정할 수 없습니다.  
| 값 | 의미 | 기본값 |
| :------------ | :-----------: | :-----------: |
| auto | 가변 item과 같은 너비 | auto |
| 단위 | px, em, cm 등 단위로 지정 |  |
flex 속성에서 설명한 것 같이 단축 속성 내에서 flex-basis를 생략하면 값이 0이 되는 것을 주의해야합니다.
![flex-basis](https://dummyimage.com/740x280/0099ff/fff "flex-shrink")

#### align-self
교차 축(cross-axis)에서 개별 item의 정렬 방법을 설정합니다.  
align-items는 container 내 모든 items의 정렬 방법을 설정합니다.  
필요에 의해 일부 item만 정렬 방법을 변경하려고 할 경우 align-self를 사용할 수 있습니다.  
이 속성은 align-items 속성보다 우선합니다.  
| 값 | 의미 | 기본값 |
| :------------ | :-----------: | :-----------: |
| auto | container의 align-items 속성을 상속받음 | auto |
| stretch | container의 교차 축을 채우기 위해 item을 늘림 | | 
| flex-start | item을 각 줄의 시작점(flex-start)으로 정렬 | |
| flex-end | item을 각 줄의 끝점(flex-end)으로 정렬 | |
| center | item을 가운데 정렬 | |
| baseline | item을 문자 기준선에 정렬 | |
![flex-basis](https://dummyimage.com/740x280/0099ff/fff "flex-shrink")

이렇게 flex 속성에 대해서 나열을 해봤고, 속성을 이용해서 실무에서 사용한 경험들을 정리 해보겠습니다.  
IE에서는 어떤 이슈들이 발생했는지, 그리고 어떻게 대처했는지에 대해서 적어보겠습니다!

https://heropy.blog/2018/11/24/css-flexible-box/
  
##### 참고자료
[MDN web doc](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B0%9C%EB%85%90)  
[w3school flex](https://www.w3schools.com/cssref/css3_pr_flex.asp)  
