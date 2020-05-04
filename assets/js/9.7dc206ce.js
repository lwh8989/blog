(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{219:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"lottie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lottie"}},[t._v("#")]),t._v(" Lottie")]),t._v(" "),s("p",[t._v("Lottie란 오픈소스 모바일 라이브러리입니다. json data파일을 만들어낼 수 있도록 도와주는 플랫폼입니다. 독일 영화 감독이자 실루엣 애니메이션의 선구자인 로띠 라이네거(Lotte Reiniger)의 이름을 따서 지어졌다고 합니다. 가장 잘 알려 진 그녀의 영화로는 가장 오래된 장편 영화인 ‘아흐메드 왕자의 모험’이 있는데, 이 영화는 월트 디즈니의 장편 백설 공주와 일곱 난쟁이를 10년 넘게 앞선다고 합니다.")]),t._v(" "),s("h2",{attrs:{id:"lottie애니메이션의-장점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lottie애니메이션의-장점"}},[t._v("#")]),t._v(" Lottie애니메이션의 장점")]),t._v(" "),s("ul",[s("li",[t._v("gif 애니메이션보다 훨씬 작은 용량으로 제작되어 리소스를 대폭으로 줄일 수 있습니다.")]),t._v(" "),s("li",[t._v("gif는 용량이 무거울 뿐 아니라, 고정된 크기로 렌더링 되기 때문에 해상도 대응이 어렵습니다.")]),t._v(" "),s("li",[t._v("json data파일로 제작하면 해상도에 구애받지 않는다는 큰 장점이 있습니다.")]),t._v(" "),s("li",[t._v("디자이너가 개발자에게 정교한 애니메이션을 요구하지 않고도 애니메이션을 만들어 제작할 수 있습니다.")]),t._v(" "),s("li",[t._v("에펙에서 플러그인을 사용하여 랜더링 버튼 클릭만으로 json파일로 내보낼 수 있습니다.")]),t._v(" "),s("li",[t._v("gif로 만들어진 애니메이션을 수정할 때 처음부터 scene로 일일이 수정할 필요가 없습니다. 기본적으로 에펙의 작업 파일을 가지고 있으니, 수정 후 다시 한 번 랜더링을 거치면 끝납니다. 이건 개인적으로 생각하는 가장 큰 장점이라고 생삿하는데, 에펙의 기초 기능만 알고 있다면, 디자이너가 만들어도 동작이 어설프지 않습니다.")]),t._v(" "),s("li",[t._v("개발자와 작업해 본 결과, 개발자가 매우 좋아했고 오류가 나는 부분에 대해서도 적극적으로 연구해 상용화가 가능했습니다.")])]),t._v(" "),s("h2",{attrs:{id:"lottie애니메이션의-단점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lottie애니메이션의-단점"}},[t._v("#")]),t._v(" Lottie애니메이션의 단점")]),t._v(" "),s("p",[t._v("안드로이드 저사양 단말에서는 Lottie로 애니메이션을 구현할 수 없다고 합니다. 그러나 저사양 단말에서는 협의를 통해 움직이는 이미지 대신 정적인 이미지를 넣는 등, 사양에 맞게 분기 설정을 하면 될 것입니다.\nbodtmovin 프로그램들이 유로라 무료로 해보는데 한계가 있습니다.")]),t._v(" "),s("h3",{attrs:{id:"animation-json파일-만들기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animation-json파일-만들기"}},[t._v("#")]),t._v(" animation json파일 만들기")]),t._v(" "),s("p",[t._v("우선 아래의 준비물이 필요합니다.\nLottie를 플랫폼으로 하는 Bodymovin ae plugin"),s("br"),t._v("\n리소스를 만들 Adobe illustrator"),s("br"),t._v("\n애니메이션을 제작할 Adobe After Effects"),s("br"),t._v("\n다음으로, 애니메이션의 소스를 만듭니다.")]),t._v(" "),s("p",[t._v("Adobe After Effects 를 켜기 전에 Bodymovin(유료입니다.) 플러그인을 설치한다.\n설치할 플러그인의 경로는 아래와 같습니다.")]),t._v(" "),s("p",[t._v("After Effects의 window > Extension에 bodymovin 메뉴가 보이면 설치가 완료 된 것입니다.\nAdobe After Effects에 제작한 ai파일을 불러온 후, 컴포지션을 생성합니다.")]),t._v(" "),s("p",[t._v("after effects의 Window > Extensions > Bodymovin 을 열어줍니다.\n랜더링 할 경로를 지정한 뒤 rander버튼을 클릭합니다.\n프로그레스 바가 채워지기를 기다리기도 전에 랜더링이 끝납니다.\n지정한 경로를 확인하여, json파일이 생성 되었다면 디자인 완료!")]),t._v(" "),s("h2",{attrs:{id:"웹에서-적용하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#웹에서-적용하기"}},[t._v("#")]),t._v(" 웹에서 적용하기")]),t._v(" "),s("p",[t._v("Bodymovin은 웹에서 Lottie JSON 파일을 렌더링 할 수 있습니다.")]),t._v(" "),s("p",[t._v("먼저 bodymovin 플레이어 자바 스크립트 라이브러리를 가져옵니다. https://cdnjs.com/libraries/bodymovin 에서 정적으로 호스팅 되거나 Get Playerbodymovin 플러그인 을 클릭하여 자바 스크립트를 직접 얻을 수 있습니다 .")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("js/bodymovin.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- OR --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdnjs.com/libraries/bodymovin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Bodymovin은 npm 및 bower에서도 제공됩니다."),s("br"),t._v("\n그런 다음 애니메이션 재생은 다음과 같이 간단합니다.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" animation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bodymovin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadAnimation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  container"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lottie'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Required")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Required")]),t._v("\n  renderer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'svg/canvas/html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Required")]),t._v("\n  loop"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional")]),t._v("\n  autoplay"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Name for future reference. Optional.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"html-플레이어-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-플레이어-설치"}},[t._v("#")]),t._v(" HTML 플레이어 설치")]),t._v(" "),s("p",[t._v("정적 URL\n또는 여기에서 스크립트 파일을 사용할 수 있습니다 :\n"),s("a",{attrs:{href:"https://cdnjs.com/libraries/lottie-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lottie Script"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"확장"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#확장"}},[t._v("#")]),t._v(" 확장")]),t._v(" "),s("p",[t._v("또는 플레이어 가져 오기를 클릭하여 AE 플러그인에서 직접 가져옵니다.")]),t._v(" "),s("h4",{attrs:{id:"로티-라이트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#로티-라이트"}},[t._v("#")]),t._v(" 로티 라이트")]),t._v(" "),s("p",[t._v("확장명에는 lottie_light.jssvgs로 내 보낸 애니메이션이 재생됩니다.")]),t._v(" "),s("h4",{attrs:{id:"npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[t._v("#")]),t._v(" NPM")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" lottie-web\n")])])]),s("h4",{attrs:{id:"bower"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bower"}},[t._v("#")]),t._v(" Bower")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("bower "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" lottie-web\n")])])]),s("h4",{attrs:{id:"사용방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용방법"}},[t._v("#")]),t._v(" 사용방법")]),t._v(" "),s("p",[t._v("lottie.loadAnimation ()을 호출하여 애니메이션을 시작하십시오. 다음과 같은 고유 매개 변수로 객체를 가져옵니다.")]),t._v(" "),s("ul",[s("li",[t._v("animationData : 내 보낸 애니메이션 데이터가있는 객체입니다.")]),t._v(" "),s("li",[t._v("path : 애니메이션 객체의 상대 경로입니다. (animationData와 경로는 상호 배타적입니다)")]),t._v(" "),s("li",[t._v("loop : true / false / number")]),t._v(" "),s("li",[t._v("autoplay : true / false 준비가되면 바로 재생을 시작합니다")]),t._v(" "),s("li",[t._v("name : 나중에 참조 할 애니메이션 이름")]),t._v(" "),s("li",[t._v("renderer : 'svg'/ 'canvas'/ 'html'렌더러 설정")]),t._v(" "),s("li",[t._v("container : 애니메이션을 렌더링 할 dom 요소\n재생, 일시 정지, setSpeed ​​등으로 제어 할 수있는 애니메이션 인스턴스를 반환합니다.")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("lottie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadAnimation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  container"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the dom element that will contain the animation")]),t._v("\n  renderer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loop"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  autoplay"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the path to the animation json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"사용방법-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용방법-2"}},[t._v("#")]),t._v(" 사용방법")]),t._v(" "),s("p",[t._v("애니메이션 인스턴스에는 다음과 같은 주요 방법이 있습니다.")]),t._v(" "),s("ul",[s("li",[t._v("anim.play ()")]),t._v(" "),s("li",[t._v("anim.stop ()")]),t._v(" "),s("li",[t._v("anim.pause ()")]),t._v(" "),s("li",[t._v("anim.setLocationHref (locationHref) -하나의 매개 변수는 일반적으로로 전달됩니다 location.href. URL에 #심볼 이없는 Safari에서 마스크 문제가 발생할 때 유용합니다.")]),t._v(" "),s("li",[t._v("anim.setSpeed ​​(speed) -하나의 매개 변수 속도 (1은 정상 속도)")]),t._v(" "),s("li",[t._v("anim.goToAndStop (value, isFrame) 첫 번째 매개 변수는 숫자 값입니다. 두 번째 매개 변수는 첫 번째 매개 변수의 시간 또는 프레임을 정의하는 value입니다")]),t._v(" "),s("li",[t._v("anim.goToAndPlay (value, isFrame) 첫 번째 매개 변수는 숫자 값입니다. 두 번째 매개 변수는 첫 번째 매개 변수의 시간 또는 프레임을 정의하는 value입니다")]),t._v(" "),s("li",[t._v("anim.setDirection (direction) -하나의 매개 변수 방향 (1은 법선 방향)")]),t._v(" "),s("li",[t._v("anim.playSegments (segments, forceFlag) -첫 번째 param은 단일 배열이거나 각각 두 값의 여러 배열 (fromFrame, toFrame)이며 두 번째 param은 새 세그먼트를 오른쪽으로 강제 적용하기위한 value입니다")]),t._v(" "),s("li",[t._v("anim.setSubframe (flag)-false 인 경우 원래 AE fps를 따릅니다 . true이면 가능한 한 많이 업데이트됩니다. (기본적으로 true")]),t._v(" "),s("li",[t._v("anim.destroy ()")])]),t._v(" "),s("p",[t._v("lottie에는 8 가지 주요 방법이 있습니다.")]),t._v(" "),s("ul",[s("li",[t._v("lottie.play () - 특정 애니메이션을 대상으로하는 선택적 매개 변수 이름 1 개")]),t._v(" "),s("li",[t._v("lottie.stop () - 특정 애니메이션을 대상으로하는 선택적 매개 변수 이름 1 개")]),t._v(" "),s("li",[t._v("lottie.setSpeed ​​() -첫 번째 매개 변수 속도 (1은 정상 속도)- 특정 애니메이션을 대상으로하는 선택적 매개 변수 이름 1 개")]),t._v(" "),s("li",[t._v("lottie.setDirection () -첫 번째 매개 변수 방향 (1은 법선 방향)- 특정 애니메이션을 대상으로하는 선택적 매개 변수 이름 1 개")]),t._v(" "),s("li",[t._v('lottie.searchAnimations () - "lottie"클래스를 가진 요소를 찾습니다')]),t._v(" "),s("li",[t._v("lottie.loadAnimation () -위에서 설명했습니다. 개별적으로 제어 할 애니메이션 인스턴스를 반환합니다.")]),t._v(" "),s("li",[t._v("lottie.destroy () -자원을 파괴하고 해제합니다. DOM 요소가 비워집니다.")]),t._v(" "),s("li",[t._v('lottie.registerAnimation ()-registerAnimation으로 직접 요소를 등록 할 수 있습니다. data.json url을 가리키는 "data-animation-path"속성이 있어야합니다.')]),t._v(" "),s("li",[t._v("lottie.setQuality () -기본 '높음', '높음', '중간', '낮음'또는 숫자> 1을 설정하여 플레이어 성능을 향상시킵니다. 2만큼 낮은 애니메이션에서는 차이가 나타나지 않습니다.")])]),t._v(" "),s("h4",{attrs:{id:"이벤트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트"}},[t._v("#")]),t._v(" 이벤트")]),t._v(" "),s("ul",[s("li",[t._v("onComplete")]),t._v(" "),s("li",[t._v("onLoopComplete")]),t._v(" "),s("li",[t._v("onEnterFrame")]),t._v(" "),s("li",[t._v("onSegmentStart")])]),t._v(" "),s("p",[t._v("다음 이벤트와 함께 addEventListener를 사용할 수도 있습니다.")]),t._v(" "),s("ul",[s("li",[t._v("complete")]),t._v(" "),s("li",[t._v("loopComplete")]),t._v(" "),s("li",[t._v("enterFrame")]),t._v(" "),s("li",[t._v("segmentStart")]),t._v(" "),s("li",[t._v("config_ready (when initial config is done)")]),t._v(" "),s("li",[t._v("data_ready (when all parts of the animation have been loaded)")]),t._v(" "),s("li",[t._v("DOMLoaded (when elements have been added to the DOM)")]),t._v(" "),s("li",[t._v("destroy")])]),t._v(" "),s("h4",{attrs:{id:"다른-로딩-옵션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#다른-로딩-옵션"}},[t._v("#")]),t._v(" 다른 로딩 옵션")]),t._v(" "),s("p",[t._v("기존 캔버스를 사용하여 그리려면 다음 구성으로 추가 객체 '렌더러'를 전달할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("lottie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadAnimation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    container"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the dom element")]),t._v("\n    renderer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    loop"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    autoplay"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    animationData"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" animationData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the animation data")]),t._v("\n    rendererSettings"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        context"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" canvasContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the canvas context")]),t._v("\n        scaleMode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'noScale'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        clearCanvas"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        progressiveLoad"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.")]),t._v("\n        hideOnTransparent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v('이렇게하면 각 프레임 후에 캔버스 지우기를 처리해야합니다.\n애니메이션을로드하는 또 다른 방법은 dom 요소에 특정 속성을 추가하는 것입니다. div를 포함시키고 클래스를 lottie로 설정해야합니다. 페이지를로드하기 전에 수행하면 "lottie"클래스가있는 모든 태그를 자동으로 검색합니다. 또는 페이지로드 후 lottie.searchAnimations ()를 호출하면 "lottie"클래스가있는 모든 요소를 ​​검색합니다.')]),t._v(" "),s("ul",[s("li",[t._v("data.json을 HTML과 관련된 폴더에 추가하십시오.")]),t._v(" "),s("li",[t._v("애니메이션이 포함될 div를 만듭니다.")])]),t._v(" "),s("p",[t._v("필수")]),t._v(" "),s("ul",[s("li",[t._v('"lottie"라는 클래스')]),t._v(" "),s("li",[t._v('데이터에 대한 상대 경로가있는 "data-animation-path"속성')])]),t._v(" "),s("p",[t._v("선택")]),t._v(" "),s("ul",[s("li",[t._v('"data-anim-loop"속성')]),t._v(" "),s("li",[t._v('특히 플레이 컨트롤을 목표로하는 이름을 지정하는 "data-name"속성')])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1067px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("600px")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lottie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-animation-path")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("animation/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-anim-loop")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ninja"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://lottiefiles.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lottie 예제보기"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://airbnb.io/lottie/#/web",target:"_blank",rel:"noopener noreferrer"}},[t._v("Airbnb Lottie 가이드"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);