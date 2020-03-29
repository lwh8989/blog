---
sidebarDepth: 3
---

# Animation?
마크업을 하면서 구조가 탄탄한 웹을 보고있으면 참 기분이 좋습니다. 그런 구조 및 활용성을 중시하는 작업을 하다보면 이제 좀 동적인 재미를 주고 싶다는 욕심이 생겨납니다. 적절한 애니메이션의 활용은 웹, 앱의 퀄리티를 높여주고 사용자에게 더 좋은 UX/UI를 경험하게 해 줍니다. 단순 CSS애니메이션 외에 Lottie라는걸 이용해서 SVG애니메이션을 제작하고 실무에 활용, 그리고 예제들을 정리 해볼까 합니다.

## Lottie
Lottie는 Airbnb에서 만들었고 실시간으로 After Effect 애니메이션을 랜더링하고 iOS, Android, React Native에서 동작하는 고품질 애니메이션 라이브러리입니다. json data파일을 만들어낼 수 있도록 도와주는 플랫폼입니다. 명칭의 기원은 독일 영화 감독이자 실루엣 애니메이션의 선구자인 로띠 라이네거(Lotte Reiniger)의 이름을 따서 지어졌다합니다. After Effect에서 만든 파일은 .aep나 .aepx인데 이것을 Bodymovin이라는 After Effect Plugin을 설치해서 안드로이드에서 사용할 수 있는 파일로 변환 해 줘야합니다. 차근차근 만드는 방법과 실무 적용에 대해서 정리 해 가보도록 하겠습니다.
  
[Lottie - 로티 작업 가이드 ](https://airbnb.design/lottie/)  
[Lottie Files - 로티 예제 모음 ](https://lottiefiles.com/)  