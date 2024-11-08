import"..Bl5S998A.js";import{u as e}from"./main.DT5YboeZ.js";import{k as d}from"./hooks.module.cQQMXFsl.js";function o(r){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",...r.components};return e(d,{children:[e(n.hr,{}),`
`,e(n.h2,{children:`title: Deno에 대한 최근 생각\r
writer: Mina\r
tags: [personal]\r
layout: layouts/posts.tsx\r
lang: kr`}),`
`,e(n.h2,{children:"tl;dr"}),`
`,e(n.p,{children:`Deno는 충분히 흥미롭고, 관심을 끌 만한 프로젝트로써 NodeJS 유저들에게 어필할 수 있었으나,\r
최근의 라이브러리 컨트리뷰션 개수 및 유지보수 상황과, 업데이트의 방향성을 고려할 때,\r
커뮤니티의 관심이 굉장히 많이 식은 것으로 보이며,\r
프로덕션에 사용하기에는 에코시스템이 미성숙한 상황이 너무나도 오래 지속되는 것으로 보인다.`}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:`해당 글은 필자의 경험에 의한 개인적인 사견을 담은 글으로, 필자가 속한 그룹이나 어떤 조직의\r
의견을 대변하지도, 투영하지도 않으며,`}),`
`,e(n.p,{children:`이 글의 필자는 이 글을 통해 어떤 결론을 내리거나, 미래를 예언하는 등의 단언을 하는 것이\r
절대로 아니므로, 이 글을 바탕으로 한 모든 의견 전개나 참조에 있어서 신중하시기 바랍니다.`}),`
`,e(n.p,{children:`이 글은 어떤 JS 런타임이 더 낫다! 라는 글보다는, 단순히 Deno를 사용한 후 좋았던 점과 아쉬웠던 점,\r
어떤 식의 발전이 현재의 Deno에 필요한지에 대한 주제의 글이므로, 투기장을 열지는 말아 주세요.`}),`
`]}),`
`,e(n.h2,{children:"Deno를 알게 된지 약 4년"}),`
`,e(n.p,{children:`저는 이전부터, JS보다 TS에 훨씬 충분한 이점이 있을 것이라고 지속적으로 생각하고 있었습니다.\r
약타입 언어의 약점에 대해서 이미 ~~몸으로~~ 배운 상태기도 했고,\r
프로그래밍을 강타입 언어로 시작하며, 프론트엔드보다는 백엔드, 어플리케이션보다는 시스템에 가까운\r
개발을 주 분야로 활동하였기 때문에, 어쩌면 강타입과 컴파일에 조금 더 익숙하고 가까웠을 수도 있었겠네요.`}),`
`,e(n.p,{children:"제가 한창 JS를 처음 시작한 때에는, JS의 온갖 악명이 인터넷에 돌고 있던 시기였습니다."}),`
`,e(n.p,{children:[e(n.code,{children:"[Object object]"}),", ",e(n.code,{children:"v is not a function"}),", ba",e(n.code,{children:"NaN"}),`a, 온갖 JS의 타입 에러들이 "밈"으로써\r
인터넷에 쏟아져 나왔고, 그런 상황에서 JS에서 TS로의 전환은 많은 문제를 금방 해결해줄 것으로 보였죠.`]}),`
`,e(n.p,{children:`그때 당시의 NodeJS는, node-ts라는 라이브러리를 이용해 nodeJS를 통해서 직접 TS 파일을\r
인터프리팅 후 실행할 수 있었습니다(지금도 마찬가지로 사용하고 있습니다. 물론 많은 발전을 이뤘지만).\r
그 때 당시에는 ts를 직접 실행한다는 것에 대한 지원이 미비하기도 했고, 관련 내용이 모자라기도 하고,\r
결국은 TS는 컴파일되어 JS로써 실행된다는 특징상, 런타임 시점에서의 타입 안정성을 완전히 보장할\r
수는 없었죠.`}),`
`,e(n.p,{children:["NodeJS를 만들어낸 개발자 Ryan Dahl은 2018년 JSConf에서, ",e(n.a,{href:"https://youtu.be/M3BM9TB-8yA",children:"NodeJS애 관해 후회하는 10가지"}),`\r
라는 발표를 진행합니다. 그리고, Ryan Dahl은 그 자리에서, 새로운 JS/TS 런타임인 Deno를 발표합니다.`]}),`
`,e(n.p,{children:"Deno는 Ryan Dahl이 후회하는 10가지에 대한 해답을 제시하기 위해 만들어진 런타임인 셈입니다."}),`
`,e(n.h2,{children:"Deno의 캐치프라이즈"}),`
`,e(n.p,{children:"그렇다면 Deno가 NodeJS에 비해 어느 부분에서 이점이 있었을까요?"}),`
`,e(n.h3,{children:"런타임에 임베드된 TS 실행 환경"}),`
`,e(n.p,{children:`눈에 보이는 가장 큰 특징이었죠. Deno는 TS 파일을 별다른 Extension 없이 바로 실행시킬 수 있었습니다\r
(물론 내부적으로는 JS로 컴파일 후 V8 엔진을 통해 실행하기 때문에 ts-node와 큰 차이는 없습니다만,\r
ts-node의 방식에서 벗어나 새로운 ts 실행환경을 개발할 예정이라는 이야기로 기억하고 있습니다).\r
온갖 복잡한 살행 과정 설정 등의 내용들이 굉장히 간략화되었고, 이는 타입스크립트에 대한 진입 장벽을\r
낮추는데 많은 도움이 되었죠.`}),`
`,e(n.h3,{children:"URL을 통한 패키지의 직접 참조"}),`
`,e(n.p,{children:`NPM 기반의 node-modules 방식은 ~~그때 당시에는 최선이었겠지만~~ 많은 부작용을 낳았습니다.\r
lock파일과 실제 다운로드된 모듈간의 불일치, 폴더가 다를 경우 같은 라이브러리를 여러번 다운로드하는\r
비효율성, 이상할 정도로 많은 용량을 잡아먹던 라이브러리들, 느린 다운로드 시간 등\r
굉장히 많은 문제를 안고 있엇고, Ryan Dahl은 이 부분에 대한 해결책으로 URL을 통한 import를 제시했습니다.`}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:`import * as jose from 'https://deno.land/x/jose@v5.8.0/index.ts'
`})}),`
`,e(n.p,{children:`정말 깜짝 놀랄 일이지 않나요? URL을 넣어 두기만 하면, 해당 라이브러리에 대한 저장, 캐싱, 관리는\r
전부 Deno가 직접 하고, 별다른 add/install 명령어 없이도 바로 사용할 수 있는 장점을 가진 방식이었죠.`}),`
`,e(n.h3,{children:"안정적인 보안성과 사용자 확인 추구"}),`
`,e(n.p,{children:`당시 NodeJS 커뮤니티에는 고민이 하나 있었습니다. 바로 사기(Scam) 라이브러리였죠.\r
유명 라이브러리와 동일한 이름으로 여러 라이브러리를 파서, 다운로드 하면 비트코인 채굴 바이너리가 실행되거나,\r
백도어가 실행되며 정보를 빼가는 바이러스를 심는 등의 일들이 비일비재했죠.`}),`
`,e(n.p,{children:`사실 사람이 몰리는 곳에는 어디든지 그런 일이 벌어지므로, 이 문제는 NodeJS만의 문제는 아닙니다.\r
최근 오픈 소스 라이브러리 보상안으로써 떠오른 TEA 프로토콜(컨트리뷰트 횟수와 다운로드 횟수에 따라\r
일정량의 토큰을 컨트리뷰터에게 지급하는 블록체인 프로토콜) 시스템에서 제공하는 tea 토큰을 얻기 위해\r
다른 유명 라이브러리들을 복사/붙여넣기 하여 배포하거나, 라이브러리에 본인의 암호화폐 지갑 주소를\r
PR 요청으로 넣으려고 하는 시도가 있는 등 오픈 소스 라이브러리와 쉽게 돈을 벌고자 하는 사기꾼들간의\r
싸움은 이제는 없으면 어색할 정도로 오랜 전통이었습니다.`}),`
`,e(n.p,{children:`물론 많은 라이브러리들은 신고와 함께 NPM Registry에서 삭제되었으나, 만일 이런 스캠 라이브러리에\r
의존성을 가진 라이브러리가 배포되기라도 하는 날에는, 정말 예상하지 못할 끔찍한 일이 벌어질 셈이겠죠.`}),`
`,e(n.p,{children:`Deno는 최소힌의 안전장치로, Deno가 시스템 권한이 필요한 작업(예를 들자면, 인터넷 접속이나 포트 listen 등의 작업)\r
을 실행할 때, 반드시 사용자의 허가를 받아 허용되지 않은 작업이 실행되지 않도록 했습니다.\r
이를 통해, 사용자가 원하지 않는 위험할 수 있는 작업이 실행될 경우, 사용자는 이를 실행되기 전\r
사전에 차단하고 방지할 수 있게 하는 것이 이 기능의 핵심이었습니다.`}),`
`,e(n.h3,{children:"귀여운 마스코트(중요)"}),`
`,e(n.p,{children:`사실 꽤나 중요한 내용입니다. 라이브러리/프레임워크나 언어, 런타임에서 마스코트가 생각보다\r
많은 비중을 차지하고, 그 언어의 커뮤니티에 어떤 구심점 역할을 하기도 쉬워집니다.\r
Java/JVM의 마스코트인 Duke가 많은 Java 라이브러리에서는 노츨되지 않으나,\r
GoLang의 마스코트인 The Gopher는 GoLang 기반 라이브러리의 많은 부분에서 보인다는 것을\r
생각해 본다면 말이지요...`}),`
`,e(n.p,{children:e(n.img,{src:"./Jaeger.png",alt:"Golang 기반 트레이싱 플랫폼 Jaeger의 로고에 등장하는 Gopher"})}),`
`,e(n.p,{children:e(n.em,{children:"^ Golang 기반 트레이싱 플랫폼 Jaeger의 로고에 등장하는 Gopher"})}),`
`,e(n.p,{children:e(n.img,{src:"./deno-rect-24fps.gif",alt:"Deno 런타임의 마스코트, Deno"})}),`
`,e(n.p,{children:[e(n.em,{children:"^ Deno 런타임의 마스코트, Deno"}),": An animated Deno logo - ",e(n.a,{href:"https://hashrock.studio.site/",children:"hashrock"})]}),`
`,e(n.h2,{children:"듣기만 하면 굉장히 좋아 보이는데..."}),`
`,e(n.p,{children:`사실, Deno 자체로는 충분히 좋은 플랫폼이 맞다. NodeJS에서 "이상하다"고 느꼈던 부분에 대해서 많은 개선을 이루어냈고,\r
오래된 기존의 패키지 관리 구조를 혁신화하였으며, 보안성과 호환성을 동시에 챙겼다는 점에서 탄탄한 플랫폼으로써의\r
기초를 다져내었다.`}),`
`,e(n.p,{children:`Deno가 Node와의 호환성을 제공하기 위해 Node Compatibility layer를 제공하며, 기존의 많은 npm 라이브러리도\r
호환되며 실행될 수 있게 되었다(물론, 이런 많은 interop들은 당연하게도, 완벽하게 지원될 수 없다.)`}),`
`,e(n.p,{children:`또한, Deno는 Deno 프로젝트를 관리하는 Deno Land Inc. 회사에서, 직접 Deno 웹 프레임워크인 Fresh를 제공하며\r
웹에서의`})]})}function l(r={}){const{wrapper:n}=r.components||{};return n?e(n,{...r,children:e(o,{...r})}):o(r)}export{l as default};
