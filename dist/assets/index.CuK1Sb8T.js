import"..Bl5S998A.js";import{u as r}from"./main.DT5YboeZ.js";import{k as t}from"./hooks.module.cQQMXFsl.js";function i(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e.components};return r(t,{children:[r(n.hr,{}),`
`,r(n.h2,{children:`title: 코틀린 만나기 - 코틀린의 Extension Function\r
writer: Mina\r
tags: [PLT, Kotlin, JVM, Java, OOP]\r
layout: layouts/posts.tsx\r
lang: kr`}),`
`,r(n.h2,{children:"시작하기 전에 - Kotlin의 등장 배경"}),`
`,r(n.p,{children:`기존의 Java문법의 한계를 극복하기 위해 Jetbrain사를 중심으로 개발중인 코틀린은,\r
자바 문법의 많은 허점들을 해결하고자 하며, 자바와의 상호운용성을 중시하는\r
언어입니다.`}),`
`,r(n.p,{children:`자바를 사용해 보신 분들은 아실 수 있겠지만, 사실 자바를 하면서 꼭 배우게 되는\r
"디자인 패턴"은, 사실 자바 언어의 많은 한계를 우회적으로 해결하기 위해서\r
만들어진 내용들이 꽤 있습니다. 대표적인 예시로, 자바에서 기존 코드 변경 없이\r
지정된 동작을 Parameter 타입으로 넘겨주어 OCP를 보장하기 위해 만들어진 "전략\r
패턴(Strategy Pattern)"은, 사실 파이썬, JS 등에서는 사실상 필요하지 않은\r
내용입니다. 함수를 변수로써 다룰 수 없는 자바에서나 인터페이스 정의와 복잡한\r
클래스 구조가 필요하죠. 아래 코드를 예를 들어 보겠습니다.`}),`
`,r(n.pre,{children:r(n.code,{className:"language-java",children:`public abstract Character {\r
   public MovingStrategy movingStrategy;\r
\r
   public void setMovingStrategy(MovingStrategy movingStrategy) {\r
      this.movingStrategy = movingStrategy;\r
   }\r
\r
   public void move(KeyInput key) {\r
      movingStrategy.applyMove(this, key);\r
   }\r
}
`})}),`
`,r(n.pre,{children:r(n.code,{className:"language-typescript",children:`abstract class Character {\r
   var movingStrategy: (key: KeyInput) => void;\r
   \r
   public move(key: KeyInput) {\r
      this.movingStrategy(key);\r
   }\r
}
`})}),`
`,r(n.p,{children:[`두 코드는 같은 내용을 담고 있으나, 자바의 구현이 조금 더 복잡합니다. 자바는\r
메소드를 `,r(n.strong,{children:"일급 객체"}),`로써 취급하지 못하기 때문입니다. 변수에 저장할 수도 없고,\r
객체 인자로 넘길 수도 없으며, 리턴할 수도 없습니다. 자바 8로 넘어와 람다\r
표현식(Lambda Expression)이 추가되면서 그나마 다른 언어와 비슷한 형태로 함수\r
인스턴스를 선언할 수 있게 되었지만, 이 또한 내부적으로는 함수형 인터페이스를\r
통한 복잡한 구현을 제공하기 때문에, 기존의 구조를 확장만 할 수 있는 자바\r
언어로써는, 자바 극초기의 언어의 한계를 고스란히 들고 갈 수밖에 없다는 말이죠.`]}),`
`,r(n.p,{children:`코틀린은 이러한 자바의 한계를, 바이트코드를 생성하는 컴파일러 단계에서 해결하기\r
위해 만들어진 언어입니다. 코틀린은 자바와의 상호운용성을 중시하기 때문에, 자바의\r
모든 라이브러리를 그대로 사용할 수 있으며, 자바로 작성된 코드도 코틀린에서\r
그대로 사용할 수 있습니다. 코틀린은 자바의 문법적인 한계를 해소하고자 노력을\r
기울였으며, 실제로 많은 부분을 해소해 냈습니다.`}),`
`,r(n.p,{children:`앞으로 이런 Kotlin을 기존의 Java와 비교하며, Kotlin의 장점을 알아보는 글을 좀 더\r
작성해보려고 합니다.`}),`
`,r(n.h2,{children:"본문으로 돌아와서... Extension Function이 뭔데?"}),`
`,r(n.p,{children:`Extension Function은, 기존의 클래스를 변경하지 않고 새로운 메소드를 추가하는\r
기능입니다. 간단하게 예시를 볼까요?`}),`
`,r(n.pre,{children:r(n.code,{className:"language-kotlin",children:`// StringEncodeUtil.kt\r
fun String.toBase64(): String = Base64.getEncoder().encodeToString(this.toByteArray())\r
\r
val encoded = "Hello, World!".toBase64()
`})}),`
`,r(n.p,{children:["보다시피, String 객체에 제공되지 않는 ",r(n.code,{children:"String.toBase64()"}),` 메소드를 정의/호출하고\r
있습니다. Java에서의 String은 final이기 때문에, 새로운 String을 상속받은\r
클래스를 만든 것도 아니고, 따라서 메소드가 새로 추가된 것도 아니죠. 그럼 어떻게\r
이런 동작이 가능할까요?`]}),`
`,r(n.p,{children:[`이 구현 방법은, 이 Extension Function을 Java에서 실행해 볼 때 어떻게\r
구현되었는지 확인 가능합니다. 아래 코드는 위의 Kotlin 코드의 `,r(n.code,{children:"String.toBase64()"}),`\r
메소드를 호출한 것입니다.`]}),`
`,r(n.pre,{children:r(n.code,{className:"language-java",children:`import StringEncodeUtilKt;\r
\r
public class Main {\r
    public static void main(String[] args) {\r
        String encoded = StringEncodeUtilKt.toBase64("Hello, World!");\r
        System.out.println(encoded);\r
    }\r
}
`})}),`
`,r(n.p,{children:["보다시피, ",r(n.code,{children:"StringEncodeUtil.kt"}),` 파일에 따라 자바 내에서 사용하기 위해\r
`,r(n.code,{children:"StringEncodeUtilKt"})," 클래스가 정의되었고, ",r(n.code,{children:"toBase64"}),` 메소드가 정적 메소드로\r
정의되었습니다. 이렇게 정의된 메소드는, 자바에서도 그대로 사용할 수 있습니다.`]}),`
`,r(n.p,{children:`그러면 코틀린이 이런 Extension Function을 제공하는 이유가 무엇일까요? Java의\r
구현처럼 Static 메소드를 이용하는 것에 비해 어떤 장점이 있을까요?`}),`
`,r(n.ol,{children:[`
`,r(n.li,{children:["기존의 클래스를 변경하지 않고도, 새로운 메소드를 추가할 수 있습니다.",`
`,r(n.ul,{children:[`
`,r(n.li,{children:[`기존의 클래스에 인스턴스 메소드로써 추가되기 때문에, 개발 경험에서 러닝\r
커브가 줄어듭니다.`,r(n.br,{}),`
`,`Static 메소드의 경우, 메소드 호출이 클래스와 분리되어 있기 때문에,\r
찾아내거나 사용하기 위해서 더 많은 노력이 필요하며, IDE의 자동완성 기능도\r
제한적으로 사용 가능합니다.`]}),`
`]}),`
`]}),`
`,r(n.li,{children:["기존의 클래스를 상속받지 않고도, 새로운 메소드를 추가할 수 있습니다.",`
`,r(n.ul,{children:[`
`,r(n.li,{children:[`기존의 클래스를 상속받지 않기 때문에, 문법적 제한 요소에 대한 부담이\r
줄어듭니다.`,r(n.br,{}),`
`,`자바는 특히나, 한 클래스당 한개의 클래스만 상속할 수 있기 때문에, 상속을\r
기반으로 Extension을 구현할 시 매우 복잡해지고, 문법적인 한계에 부딛히기\r
쉬워집니다.`,r(n.br,{}),`
`,`하지만 코틀린의 Extension Function은 클래스를 상속받지 않으며, 결국\r
내부적으로는 Static 메소드를 사용하기 때문에, 이런 문제가 발생하지\r
않습니다.`]}),`
`]}),`
`]}),`
`,r(n.li,{children:["기존 객체의 메소드가 아니기 때문에, 접근 제한자는 객체에 독립적이지 않습니다.",`
`,r(n.ul,{children:[`
`,r(n.li,{children:["이 요소에 대해서는, 아래 코드로 설명하는 게 더 좋아 보입니다.",`
`,r(n.pre,{children:r(n.code,{className:"language-kotlin",children:`class InsideExtensionScope {\r
   private fun String.toBase64(): String = Base64.getEncoder().encodeToString(this.toByteArray())\r
\r
   fun encode() {\r
      val encoded = "Hello, World!".toBase64()\r
      println(encoded)\r
   }\r
}\r
\r
class OutsideExtensionScope {\r
   fun encode() {\r
      val encoded = "Hello, World!".toBase64() \r
      // 에러 발생! toBase64는 InsideExtensionScope의 private 메소드이기 때문에 접근 불가\r
      println(encoded)\r
   }\r
}
`})}),`
`,`위 코드에서 볼 수 있듯이, Extension Function를 통해 String에 toBase64\r
메소드를 추가했지만, 이 메소드는 `,r(n.code,{children:"InsideExtensionScope"}),` 클래스의 private\r
메소드이기 때문에, `,r(n.code,{children:"OutsideExtensionScope"}),` 클래스에서는 접근할 수\r
없습니다.`,r(n.br,{}),`
`,`이를 통해, 클래스가 확장되는 범위를 제한할 수 있고, 이는 네임스페이스 오염\r
등의 문제를 방지하는 데에도 도움이 됩니다.`]}),`
`]}),`
`]}),`
`,r(n.li,{children:[`Kotlin은 Extension Function을 인스턴스 메소드 취급하기 때문에, Operator\r
overloading이 가능합니다.`,`
`,r(n.ul,{children:[`
`,r(n.li,{children:[`Kotlin에서는\r
`,r(n.a,{href:"https://kotlinlang.org/docs/operator-overloading.html",children:"Operator overloading"}),`이\r
가능합니다(이 부분에 대해서는 차후 추가적으로 글을 작성할 생각입니다).`,r(n.br,{}),`
`,`Extension function 또한 인스턴스 메소드로 취급되기 때문에, 이를 통해\r
Operator overloading을 구현할 수 있습니다.`,`
`,r(n.pre,{children:r(n.code,{className:"language-kotlin",children:`operator fun Long.plus(other: Int): Long = this + other.toLong()\r
\r
val result = 1L + 1
`})}),`
`,"위 코드에서 볼 수 있듯이, ",r(n.code,{children:"Long.plus"})," 메소드를 정의함으로써, ",r(n.code,{children:"Long"}),` 타입의\r
객체에 `,r(n.code,{children:"+"})," 연산자를 사용할 수 있게 되었습니다.",r(n.br,{}),`
`,"또한, 이 오버로딩 메소드도 접근 제한자를 통해 범위를 제한할 수 있습니다."]}),`
`]}),`
`]}),`
`,r(n.li,{children:["함수형 프로그래밍에서의 유용성",`
`,r(n.ul,{children:[`
`,r(n.li,{children:[`함수형 프로그래밍은 범용적인 동작을 정의하고, 이를 특정 함수의 파라미터로\r
넘기거나, 조합하여 원하는 동작을 만들어내는 방식을 주로 사용하며, 여기에서\r
많이 사용하는 기법 중 하나로 `,r(n.code,{children:"Method Chaining"}),`을 사용합니다. 이 Method\r
Chaining을 사용하기 위해서는, 해당 함수가 반드시 원하는 클래스의 인스턴스\r
메소드로 제공되어야 하기 때문에, 기존에는 사용하기 힘들었지만, Extension\r
Function을 사용하면 이를 가독성도 신경쓰며 쉽게 구현할 수 있습니다.`,`
`,r(n.pre,{children:r(n.code,{className:"language-kotlin",children:`fun String.toBase64(): String = Base64.getEncoder().encodeToString(this.toByteArray())\r
\r
fun main() {\r
    val encoded = "Hello, World!"\r
        .toBase64()\r
        .toBase64()\r
        .toBase64()\r
\r
    val encodedWithoutChain = toBase64(toBase64(toBase64("Hello, World!")))\r
\r
    println(encoded)\r
}
`})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,r(n.h2,{children:"한계 및 주의할 점"}),`
`,r(n.p,{children:["위와 같이 많은 장점이 있음에도 불구하고, Extension Function은 어디까지나 ",r(n.strong,{children:`이름\r
그대로 메소드를 확장한 것 뿐이지, 절대 메소드를 클래스의 멤버로 추가한 것이\r
아니므로,`})," 이를 반드시 이해하고 사용하여야 합니다."]}),`
`,r(n.ol,{children:[`
`,r(n.li,{children:["Private Field/Method에 접근할 수 없음",`
`,r(n.ul,{children:[`
`,r(n.li,{children:[`Extension Function은 클래스의 멤버로 추가된 것이 아니기 때문에, private\r
field/method에 접근할 수 없습니다.`,r(n.br,{}),`
`,"어떻게 보면 굉장히 당연한 이야기일 수 있죠."]}),`
`]}),`
`]}),`
`,r(n.li,{children:["Extension Function은 Reflection에 의해 호출 불가능합니다.",`
`,r(n.ul,{children:[`
`,r(n.li,{children:`마찬가지로, Extension Function은 클래스의 멤버로 추가된 것이 아니기 때문에,\r
Reflection을 사용하여도, 클래스의 멤버로 불러올 수 없고, 호출 또한 일반적인\r
Static Method를 호출하듯이 사용해야만 합니다. Reflection이 Java/JVM 기반\r
방식이기 때문에 발생하는 모순이라고도 볼 수 있겠네요.`}),`
`]}),`
`]}),`
`,r(n.li,{children:["Extension Function은 상속을 통해 오버라이딩할 수 없습니다.",`
`,r(n.ul,{children:[`
`,r(n.li,{children:`이 또한 마찬가지로, Extension Function은 상속받아 온 프로퍼티가 아니기\r
때문에, 오버라이딩 할 수 없습니다. 물론, 상위 타입의 메소드를 하위 타입에서\r
호출하는 것은 가능합니다. 다만, 이는 상속을 통한 오버라이딩이 아닌, 상위\r
타입의 메소드를 업캐스팅을 통해 호출하는 것이기 때문입니다.`}),`
`]}),`
`]}),`
`]}),`
`,r(n.hr,{}),`
`,r(n.h3,{children:"출처"}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:[`Kotlin Documentation:\r
`,r(n.a,{href:"https://kotlinlang.org/docs/extensions.html",children:"Extension Functions"})]}),`
`,r(n.li,{children:[`Baeldung:\r
`,r(n.a,{href:"https://www.baeldung.com/kotlin/extension-methods",children:"Kotlin Extension Functions"})]}),`
`]})]})}function d(e={}){const{wrapper:n}=e.components||{};return n?r(n,{...e,children:r(i,{...e})}):i(e)}export{d as default};
