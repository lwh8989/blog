---
sidebarDepth: 3
---

# Flex layout
![Display flex 지원 범위](https://dummyimage.com/740x280/0099ff/fff "Display flex란 어떤걸까?")
기본적으로 flex 속성을 알아봤다면 이제는 활용으 해볼려고 합니다. 같은 상황을 IE이슈로 인해서 다르게 처리한 방법입니다. 빠르게 IE가...지양되는 환경이 오길...

## 말줄임(text) + 아이콘(icon) Layout
### inline-flex 활용
![말줄임 + 아이콘 형태의 리스트](https://dummyimage.com/740x280/0099ff/fff "말줄임 + 아이콘 형태의 리스트")
플랫폼 마크업개발을 하게되면 가장많이 접하게되는 스타일 입니다. 영역에서 text와 icon이 같이 정렬 되어있고, flex container인 부모 요소의 영역이 작아지면 flex item인 자식 요소의 텍스트를 모두 표시할 수 없을 때 줄임표(…)가 나타나게 하는 레이아웃입니다.주로 text영역은 말줄임, icon은 고정영역인게 이 레이아웃에 핵심 포인트입니다.
```html
 <div class="list-fixed">
	<div class="title-wrap">
		<p class="title">여기에는 text가 들어갑니다. 내용이 길어 질 경우 말줌임으로 표시가 됩니다.</p>
		<span class="icon-wrap" role="img" aria-label="아이콘이름">
            <i class="ic-name"></i>
        </span>
	</div>
</div>           
```
```css
.list-fixed {
    /* 리스트의 기본 골격입니다. */
    height: 60px;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.title_wrap {
    display: inline-flex; /* inline-flex를 부여합니다. */
    max-width: 100%;
    height: 100%;
    align-items: center;
}
.title_wrap .title {
    padding-top: 3px;
    font-size: 18px;
    /* [S] title에 말줄임 관련 속성입니다. */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* [E] title에 말줄임 관련 속성입니다. */
}
.icon-wrap {
    margin-left: 4px;
}
```
flex container에 display: inline-flex 속성과 max-width: 100% 속성을 적용합니다. 그렇게 되면 text 영역은 가변적으로 변하게 되며 고정영역인 icon에는 겹치지 않게 됩니다. icon갯수가 늘어나도 max-width: 100% 속성때문에 추가 분기 처리없이 화면에 구현됩니다.

### IE를 지원해야 하는 경우
같은 작업이라도 IE의 특정버전까지 지원하게 되면 불필요한 tag가 많이 붙게 됩니다. 그리고 icon의 갯수가 늘어남에 따라 클래스명으로 특정 분기를 줘야 합니다. 
```html
<ul class="list">
    <li class="list-item">
        <div class="group">
            <div class="group-col group-tit">
                <!-- IE에서는 간격을 자동으로 주지 못하기때문에 갯수에 따라 분기처리가 필요합니다. -->
                <div class="tit-icon00"> 
                    <div class="tit-txt">여기에는 text가 들어갑니다. 내용이 길어 질 경우 말줌임으로 표시가 됩니다.</div>
                     <!-- tit-icon-wrap영역은 고정영역이니다. -->
                    <div class="tit-icon-wrap">
                        <i class="ic-name"></i>
                    </div>
                </div>
            </div>
        </div>
    </li>
</ul>          
```
```css
.list {
}
.list-item {
    position: relative;
}
.list-item .group {
    width: 100%;
    /* flex를 사용못하는 IE에서는 가장 비슷하게 대응 가능한 속성이 table 관련 속성입니다. */
    display: inline-table;
    table-layout: fixed;
}
.list-item .group .group-col {
    /* cell속성을 줌으로써 유동적인 구조가 되니다. */
    display: table-cell;
    white-space: nowrap;
}
.list-item .group .group-col .tit-txt {
    position: relative;
    /* 아아콘의 영역은 고정입니다. 최대값에 아이콘영역값을 빼주시면됩니다. */
    max-width: calc(100% - 아이콘 간격);
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.list-item .group .group-col .tit-icon-wrap {
    position: relative;
    display: inline-block;
}
```
코드를 보게되면 같은 UI를 구현함에 있어서 IE는 가변적영역 + 가변적영역 이 구현이 되지 않습니다. 그 이유가 우선 flex관련 속성을 안쓰고 table속성을 사용하게되면 특정 수지를 입력 안하면 전체영역 / 갯수 로 강제로 나눠버립니다. 가변영역 + 고정영역 식으로 나눠서 작업해야합니다. 그 관련 속성으로 width: clac(100% - 00px); 을 이용 해 줍니다.

## 말줄임(text) + 이미지(image) Layout
### flex 활용
![말줄임 + 아이콘 형태의 리스트](https://dummyimage.com/740x280/0099ff/fff "말줄임 + 아이콘 형태의 리스트")
플랫폼 마크업개발을 하게되면 가장많이 접하게되는 스타일 입니다. 영역에서 text와 icon이 같이 정렬 되어있고, flex container인 부모 요소의 영역이 작아지면 flex item인 자식 요소의 텍스트를 모두 표시할 수 없을 때 줄임표(…)가 나타나게 하는 레이아웃입니다.주로 text영역은 말줄임, icon은 고정영역인게 이 레이아웃에 핵심 포인트입니다.
```html
<ul class="list">
    <li class="list-item">
        <div class="group">
            <div class="group-col group-tit">
                <!-- IE에서는 간격을 자동으로 주지 못하기때문에 갯수에 따라 분기처리가 필요합니다. -->
                <div class="tit-icon00"> 
                    <div class="tit-txt">여기에는 text가 들어갑니다. 내용이 길어 질 경우 말줌임으로 표시가 됩니다.</div>
                     <!-- tit-icon-wrap영역은 고정영역이니다. -->
                    <div class="tit-icon-wrap">
                        <i class="ic-name"></i>
                    </div>
                </div>
            </div>
        </div>
    </li>
</ul>          
```
```css
.list {
}
.list-item {
    position: relative;
}
.list-item .group {
    width: 100%;
    /* flex를 사용못하는 IE에서는 가장 비슷하게 대응 가능한 속성이 table 관련 속성입니다. */
    display: inline-table;
    table-layout: fixed;
}
.list-item .group .group-col {
    /* cell속성을 줌으로써 유동적인 구조가 되니다. */
    display: table-cell;
    white-space: nowrap;
}
.list-item .group .group-col .tit-txt {
    position: relative;
    /* 아아콘의 영역은 고정입니다. 최대값에 아이콘영역값을 빼주시면됩니다. */
    max-width: calc(100% - {아이콘 간격});
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.list-item .group .group-col .tit-icon-wrap {
    position: relative;
    display: inline-block;
}
```
flex container에 display: inline-flex 속성과 max-width: 100% 속성을 적용합니다. 그렇게 되면 text 영역은 가변적으로 변하게 되며 고정영역인 icon에는 겹치지 않게 됩니다. icon갯수가 늘어나도 max-width: 100% 속성때문에 추가 분기 처리없이 화면에 구현됩니다.