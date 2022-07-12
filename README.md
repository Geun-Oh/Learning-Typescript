# Learning-Typescript
typescript를 익히고 예제를 배우는 repo입니다.

nomadcoder의 'Typescript로 블록체인 만들기' 강의를 보고 연습하는 repo입니다.


### 22.05.03

강의를 들으면서 기본적인 ts에 대한 공부를 진행중.

type, readonly, interface, class, public, private, protected
각 키워드들을 보고 어떤 기능을 하는지 떠올릴 수 있을 것.

### 22.05.06

어제부터 typescript 핸드북에 대한 정리를 시작했다.
기본 타입과 함수에 대한 정리를 마쳤고, 인터페이스에 대한 내용을 다루는 글을 올리려고 한다.
### 22.05.07

ts-blockchain 강의를 수강 중. ts 기본 설정을 하는 방법과 js 모듈을 어떻게 ts가 이해하는지에 대해 배웠다.

### 22.05.08

벨로퍼트님의 '리액트에서 타입스크립트 사용하기' 글을 읽고 예제를 연습중이다. 재밌다!!

### 22.05.13

리액트에서 타입스크립트 사용하기 중 useState, useReducer 사용하기를 연습해보았다. 마저 정리하자.

### 22.05.27

타입스크립트로 백준 문제 풀이를 시작했다. stdin을 이용해 fs에서 예제를 불러오고, console.log()로 정답을 출력한다.

### 22.05.30

타입스크립트로 스택 구현하기에 성공했다. 스택은 push, pop, size, empty, top의 다섯 가지 메서드를 가진다. 구글링을 통해 찾은 예제를 한 번 구현하고 백준에 있는 문제대로 혼자 구현하는 것을 연습하였다.

### 22.05.31

9012번 문제를 타입스크립트로 푸는 중. while 문을 사용하는 과정에서 메모리 누수가 심한 것 같다. 다시 잘 짜보도록 하자.
Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory 라고 한다. 

### 22.06.01

어제 풀지 못한 문제를 풀고 있는데, 예제는 전부 같은 출력값을 가지는데에도 불구하고 틀렸다고 뜬다.
어디서 문제인지 다시 파악해보자.

이분탐색 알고리즘 코드를 만드는 중.
시간 남을 때 손으로 로직 써두고
구현은 밤에 하는 습관을 들이자.

### 22.06.02

백준 1874번 해결 중, 로직은 거의 다 구현 완료하였고
이제 답을 잘 나타내기만 하면 완료다!

### 22.06.03

shift, unshift, push, pop 메소드의 시간복잡도가 O(n)... 너무 길다. 다른 방법을 찾거나 본래 스택을 가져와 구현하거나 하자!

### 22.06.06

버블 정렬에 대한 문제를 푸는 도중에 시간 초과로 막혀있다. 병합 정렬을 사용해야한다고 하니 이를 배우고 적용해보자.

### 22.06.08

스택과 큐의 기능을 동시에 하는 클래스 구현 중. shift와 unshift를 제작하자.

### 22.06.12

두 문제를 추가로 풀었다. 4949번을 해결 중. 마저 생각해보자!

### 22.06.13

4949번 왜 틀리는 건지 너무 모르겠어서 임건님께 여쭤보는 것으로 했다. 오늘 추가적으로 4344, 11656번 해결했다.
문자열을 다루는 문제를 해결할 때는 trim()을 꼭 신경쓰자.
그 외에도 기본적인 js 메소드(반올림, 나눗셈, 사전순 정렬 등등의 수학적인 연산자들)를 잘 익혀두자. 매우 쓸모있다.
사전순정렬이 ts 내에서도 string에도 적용된다! 잘 알아두자.

### 22.06.14

골드 문제에 도전해보고 싶어 도전장을 내밀었다. 결과는 맞았지만 꽤 시간이 걸렸다. 그러나 맞았다는 것에 의의를 두기로 했다!
골드 문제를 풀었다는 것 자체가 골드 5에 도달할 수 있다는 것으로 생각되어 더 열심히 문제를 푸는 원동력이 되지 않을까 싶다.
17609번을 풀면서는 반례를 잘 캐치해 조건문을 잘 걸어두는 것이 중요했다고 생각한다.
수고했다ㅜㅜ

### 22.06.16

2839번. dp 연습을 시작했는데 너무 어렵게 생각하는 걸지도...? 좀 더 간단하게 생각해보자!

### 22.06.19

1463, 1003 번을 해결했다. 대충 메모이제이션과 DP의 전체적인 과정에 대해 얼추 이해하는 중인 듯 하다.

9095번을 추가로 풀었고, 11053번을 고민 중에 있다. 잘 해결해보자.

### 22.06.20

백준 1912, 1932 번 문제를 추가로 풀었다.

문제를 해결하는 로직만 구현할 수 있다면 코드 짜는 것은 시간문제가 되는 것 같다.
DP를 이용한 로직 구현도 나날이 발전 중이다!
더 힘내자.

### 22.06.21

10844번 해결에 시간을 꽤 쏟았다. 문제에서 숫자를10억으로 나누는 것에 대한 이유를 좀 더 알아보고자 한다.

### 22.06.22

줏댓다...2293 어케풀어

### 22.06.27

배낭 문제에 대한 코드를 구현하는 중~!

### 22.06.30

배낭 문제를 다시 곱씹어보는 과정이 필요해 보인다.
좀 더 열심히 공부해보자.

### 22.07.01

11057번 풀이 완료. 이제 실버 문제는 크게 어렵지 않은 듯 하다.
2225번을 풀어보자! 실버 가야지

### 22.07.02

2225번 해결 완료. 기존의 dp 문제들과 매우 비슷해 2차원 배열을 잘 쓸 수 있다면 충분히 풀만한 것 같다.
실버 달성. 더 열심히 하자!

### 22.07.04

1715번 그리디 알고리즘을 도전해보는 중. 시간초과가 되지 않을 방법을 찾아보자.

### 22.07.10

백준 16953번 문제를 해결했다. 매일 조금씩 더 성장하자.

### 22.07.11

2011번은 왜 틀리는지 아무리 해도 잘 모르겠다... 모든 반례에 대해 검증한 것 같은데
채점이 더 낮은 퍼센트에서 진행되다가 틀리는 것을 보면 js 자체의 문제로 생각된다.
심지어 2011 을 typescript로 해결한 사례가 없으므로 일단 보류해두었다.
추가로 2133번을 풀었다.

2482번을 추가로 해결했다.
내가 생각한 로직이랑 조금 달라서 놀랐다...왜 내가 한 방법은 안되는지 좀 더 알아봐야할 것 같다.

### 22.07.12

어렵다...슬라이딩 윈도우에 대한 공부를 좀 더 해보고 2096번을 해결해보도록 하자.