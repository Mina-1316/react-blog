import"..Bl5S998A.js";import{u as e}from"./main.DT5YboeZ.js";import{k as t}from"./hooks.module.cQQMXFsl.js";function i(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r.components};return e(t,{children:[e(n.h1,{children:"1932 - 정수 삼각형"}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:"문제 원문: https://www.acmicpc.net/problem/1932"}),`
`]}),`
`,e(n.h2,{children:"풀이"}),`
`,e(n.p,{children:`이 문제에서, 가장 합이 최대가 되는 경로를 구하는 프로그램을 작성하기 위해서는,\r
모든 경우의 수를 고려해야 합니다. 이전의 선택이 이후의 선택에서의 선택지에\r
영향을 주기 때문에, Greedy Algorithm을 사용할 수는 없습니다. 따라서, 모든 경우의\r
수를 효율적으로 고려하기 위해, Dynamic Programming을 사용하면 해결할 수 잇을\r
것으로 예측 가능합니다.`}),`
`,e(n.p,{children:"우선, 요구사항에 맞는 점화식을 작성합니다."}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:["리스트에 접근할 때, Index가 범위 밖에 잇을 경우 -1을 반환하는 함수를 ",e(n.code,{children:"zero()"}),`,\r
값을 여러개 받았을 때, 가장 최대의 값을 반환하는 함수를 `,e(n.code,{children:"max()"}),"라고 하고,"]}),`
`,e(n.p,{children:[e(n.code,{children:"i"}),"를 선택한 높이, ",e(n.code,{children:"j"}),`를 해당 높이에서의 트리의 index라고 하였을 때, 트리의\r
값을 `,e(n.code,{children:"v[i][j]"}),", 최대 값을 ",e(n.code,{children:"dp[i][j]"}),"라고 하면,"]}),`
`,e(n.p,{children:[e(n.code,{children:"dp[i][j] = max(zero(dp[i-1][j-1]), zero(dp[i-1][j])) + v[i][j]"}),"의 관계가 성립"]}),`
`,e(n.p,{children:["풀어서 말하자면, ",e(n.code,{children:"i"}),"번째 높이에서 ",e(n.code,{children:"j"}),`번째 index를 선택했을 때의 최대 합은,\r
`,e(n.code,{children:"i-1"}),"번째 높이에서 ",e(n.code,{children:"j-1"}),"번째 index를 선택했을 때의 최대 합과, ",e(n.code,{children:"i-1"}),`번째\r
높이에서 `,e(n.code,{children:"j"}),`번째 index를 선택했을 때의 최대 합 중, 더 큰 값에 현재 높이의 값을\r
더한 값이라고 할 수 있습니다.`]}),`
`]}),`
`,e(n.p,{children:"이제, 이 점화식을 코드로 구현하면 됩니다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-python",children:`I = input\r
O = print\r
\r
from typing import TypeVar\r
\r
# DP를 사용하여 해결\r
depth = int(I())\r
\r
tree: list[list[int]] = [[i for i in map(lambda x: int(x), I().split(" "))] for _ in range(depth)]\r
\r
memory: list[list[int]] = []\r
\r
T = TypeVar("T")\r
def getOrNone(list: list[T], idx: int) -> T | None:\r
    if idx < 0 or idx >= len(list):\r
        return None\r
    else:\r
        return list[idx]\r
\r
# i번째 depth의 t번째 노드에 도착했을 때의 최대 기대값을 c[i][t] 라고 하고,\r
# 해당 트리의 i번째 depth의 t번째 노드의 값을 v[i][t]라고 할 때\r
# c[i][t] = max(c[i-1][t-1], c[i-1],[t]) + v[i][t]\r
\r
for currentDpt in range(depth):\r
    toMemory = [0 for _ in range(len(tree[currentDpt]))]\r
    for idx, value in enumerate(tree[currentDpt]):\r
        memvalue_a = getOrNone(getOrNone(memory, currentDpt-1) or [], idx - 1) or 0\r
        memvalue_b = getOrNone(getOrNone(memory, currentDpt-1) or [], idx) or 0\r
        toMemory[idx] = max(memvalue_a, memvalue_b) + value\r
    memory.append(toMemory)\r
\r
O(max(memory.pop()))
`})})]})}function l(r={}){const{wrapper:n}=r.components||{};return n?e(n,{...r,children:e(i,{...r})}):i(r)}export{l as default};
