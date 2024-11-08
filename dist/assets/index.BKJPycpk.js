import"..Bl5S998A.js";import{u as r}from"./main.DT5YboeZ.js";import{k as o}from"./hooks.module.cQQMXFsl.js";function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...e.components};return r(o,{children:[r(n.hr,{}),`
`,r(n.h2,{children:`title: 코틀린 만나기 - 코틀린의 SAM, Lambda\r
writer: Mina\r
tags: [PLT, Kotlin, JVM, Java, OOP, Functional]\r
layout: layouts/posts.tsx\r
lang: kr`}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:"[코틀린 만나기 시리즈]의 두번째 글입니다."}),`
`]}),`
`,r(n.h2,{children:"SAM, Lambda"}),`
`,r(n.p,{children:`프로그래밍 공부를 조금 해보신 분꼐서는, Lambda라는 용어에 대해 어느 정도 친근감(?)을 가지실 수도 있을 거라고 생각합니다.\r
특히나, 람다의 경우에는 자바에서도 지원되는 기능이니 더더욱이요(많이 쓰는지는 아직 잘 모르겠습니다...).`}),`
`,r(n.p,{children:["람다에 대해 간단하게 정의하자면, ",r(n.strong,{children:"이름 없이 내용만 정의한 함수"}),`라고 이해하셔도 무방할 듯 합니다. 구글에서\r
Lambda Function을 검색하실 경우, 바로 연관 검색어로 Anonymous Function이 나오니까요.\r
어째서 람다라고 불리는지에 대한 내용은 `,r(n.a,{href:"https://en.wikipedia.org/wiki/Anonymous_function#Names",children:"Wikipedia-Anonymous Function"}),`\r
에서 확인해 보시면 좋을 것 같습니다!`]}),`
`,r(n.p,{children:["람다의 가장 큰 특징 중 하나는, ",r(n.strong,{children:"함수를 변수로써 다뤄"}),` 다른 함수의 인자값으로 전달하거나, 리스트에 저장하여 순회하는 등의\r
실제 값으로써 다룰 수 있다는 것입니다(이런 특징을 JS에서는 일급 객체라고 합니다). 그러나 다들 아시다시피, 자바, 코틀린의\r
실행 환경인 JVM은 이런 규칙을 허용하지 않습니다. 그러면 어떻게 자바와 코틀린에서는 람다를 지원할 수 있는 것일까요?`]}),`
`,r(n.h2,{children:"SAM(Single Abstract Method), Functional Interface"}),`
`,r(n.p,{children:["자바 8에서 람다를 지원하기 위해 등장한 개념이 바로 ",r(n.strong,{children:"SAM(Single Abstract Method)"}),` 인터페이스입니다.\r
사실 자바에서는 SAM이란 용어보다는 Functional Interface가 조금 더 친숙한 용어로 받아들여지고 있죠.`]}),`
`,r(n.p,{children:["Functional Interface는 ",r(n.strong,{children:"단 하나의 추상 메소드만을 가지는 인터페이스"}),"를 의미합니다. 대표적인 예시를 하나 들어볼까요?"]}),`
`,r(n.pre,{children:r(n.code,{className:"language-Java",children:`@FunctionalInterface\r
interface Runnable {\r
  void run();\r
}
`})}),`
`,r(n.p,{children:["위 코드는 Java에서 제공하는 Runnable 인터페이스입니다. 이 인터페이스는 단 하나의 추상 메소드인 ",r(n.code,{children:"run()"}),` 메소드만을 가지고 있습니다.\r
그러면 만약 이 인터페이스를 구현한다면, 프로그램 내부에서는 파라미터가 없고, 반환 값이 없는 함수를 정의할 수 있게 됩니다.`]}),`
`,r(n.pre,{children:r(n.code,{className:"language-Java",children:`Runnable r = () -> System.out.println("Hello, World!");\r
Runnable r2 = new Runnable() {\r
  @Override\r
  public void run() {\r
    System.out.println("Hello, World!");\r
  }\r
};\r
r.run();
`})}),`
`,r(n.p,{children:["위 코드를 보시면 아시다시피, Runnable이라는 인터페이스의 구현체는 ",r(n.strong,{children:"반드시 파라미터가 없고 반환 값이 void인 run() 메소드를 구현"}),`해야 함을\r
알 수 있습니다. 즉, 함수의 구조를 정의할 수 있게 된 것이죠.\r
자바에는 또한 익명 Interface 구현체 또한 존재하는데요, 위 코드의 `,r(n.code,{children:"r2"})," 변수를 선언할 때의 방식이 그것입니다."]}),`
`,r(n.p,{children:["이 모든것을 종합적으로 고려해 보면, SAM, Functional Interface는 ",r(n.strong,{children:"하나의 추상 메소드를 통해 함수의 구조를 정의한 것"}),`\r
이라는 내용을 이해할 수 있습니다.`]}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["자바에서는 기본적으로 이런 함수 구조를 정의하는 SAM 인터페이스들을 ",r(n.code,{children:"java.util.function"}),` 패키지 내에서 지원하고 있습니다.\r
`,r(n.code,{children:"Runnable"})," 외에도, ",r(n.code,{children:"Consumer<T>"}),", ",r(n.code,{children:"Supplier<T>"}),", ",r(n.code,{children:"Function<T, R>"})," 등 다양한 함수형 인터페이스를 제공하고 있습니다."]}),`
`,r(n.p,{children:["어떤 기본 인터페이스들이 제공되는지 궁금하시다면 ",r(n.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html",children:"Java Platform SE 8 - java.util.function"}),`\r
을 확인해 보셔도 될 거 같습니다.`]}),`
`,r(n.p,{children:"물론 여러분께서 직접 SAM을 만드셔도 되고요!"}),`
`]})]})}function a(e={}){const{wrapper:n}=e.components||{};return n?r(n,{...e,children:r(c,{...e})}):c(e)}export{a as default};
