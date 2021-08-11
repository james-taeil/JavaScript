# 알고리즘 공부목표
- [x] 알고리즘이란?
- [x] 알고리즘 문제 이해 및 풀이 계획 세우기
- [x] 수도코드
- [x] 내가 짠 알고리즘 자바스크립트로 설명


---
# 알고리즘이란?
문제를 해결하는 최선의 선택을 알고리즘이라고 한다.

그럼 우리는 최선의 선택을 통해 문제를 어떻게 해결하고, 어떻게 최선의 선택을 찾는지 알아야 한다.


## 문제를 이해하기
알고리즘 문제를 보면 입력, 출력, 제한사항, 주의사항 등 문제 상황을 설정해 준다. 이 조건을 통해 문제가 무엇인지 이해하는 것부터 알고리즘의 시작이다.


## 문제를 어떻게 해결할 수 있을지, 전략 세우기
전략의 첫번째 방법은 수도코드이다. 수도코드를 얼마나 잘 했느냐에 따라 문제의 이해가 달라진다.
또한 손으로 직접 해보는 손코딩도 방법이다. 나아가 그림으로 그려가면서 큰 틀을 이해하는 방법도 최고의 수도코드가 될 수 있다.


## 문제를 코드로 옮기자
구현한 코드를 생각해보고, 구현한 코드의 최적화를 시도한다.


---
# 효율적인 코드?
알고리즘 문제를 풀다보면 해결을 하느냐 못하느냐도 중요하다. 하지만 나아가서 문제를 해결했다면, 효율성이라는 것을 생각해 볼 수 있다. 내가 짠 코드가 효율적인지를 생각하는 것인데, 이를 코드의 **시간복잡도(Big-O)**를 생각하면 효율적인 방법을 찾을 수 있다.


## 시간복잡도란?
시간 복잡도란 무엇일까? 코드의 효율성과, 연산 횟수와 관련되어 있다.

> 알고리즘을 수행하기 위해 프로세스가 수행해야 하는 연산을 수치화 한 것

그럼 왜 실행시간이 아닌 연산 횟수로 판별할까?
컴퓨터의 실행시간은 코드의 언어마다 편차가 달라진다. 컴퓨터 언어에 가까운 컴파일 언어인 `C언어`는 실행시간이 빠르고, 스크립트 언어 중 하나인 `python`은 실행시간이 C언어에 비해 길어진다. 이런 이유 때문에 실행 횟수만 고려하는 것이다.
하지만 시간복잡도를 설명하기 위해서는 실행횟수의 따른 실행시간을 설명해야 한다.


시간복잡도의 미치는 단위는 `N`이다.

O(1) : 입력값이 늘어나도 시간은 늘어나지 않는다. 문제를 해결하는데 오직 한 단계만 처리한다.
```js
// O(1) 의 예시
let arr = [1,2,3,4,5]
let index = 1;
let result = arr[index]
console.log(result);
```

O(n) : 1차원 그래프의 시간복잡도를 만들며, 문제를 해결하기 위한 단계의 수와 입력값 n이 1:1 관계를 가진다.
```js
// O(n)의 예시
function O_n(n){
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}
```


O(n^2) : 2차원 그래프의 시간복잡도를 만들며, 문제를 해결하기 위한 단계의 수가 입력값의 n의 제곱이 된다.

```js
function O_n_2 (n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}
```

O(log n) : 로그 그래프의 시간복잡도를 만들며, 문제를 해결하는데 필요한 단계가 연산마다 특정 요인의 의해 줄어든다. 대표적으로 `이진탐색`이 있다.

```js
function binary_search(arr, item, fist = 0, last) {
    last = arr.length;
    let mid = Math.floor((last - first) / 2) + first;

    if (arr[item] === item) {
        return mid;
    } else if (arr[item] > item) {
        return binary_search(arr, item, first, mid);
    } else {
        return binary_search(arr, item, mid, last)
    }
}
```


O(K^n) : 지수 그래프의 시간복잡도를 만들며, 문제 해결을 위한 단계의 수는 상수값 K의 제곱으로 일정하다. 대표적으로 피보나치 수열이 있따.
```js 
function fibo(n) {
    if (n <= 1) {
        return 1;
    }
    return fibo(n - 1) + fibo(n - 2);
}
```

---
# 더 공부해야 할 것들
## 시간복잡도 예측
일반적인 코테에서는 정확한 값을 시간 내에 반환하는 코드를 만들어아 한다.
그러기 위해서는 시간제한과 주어진 데이터 크기 제한에 따른 시간복잡도를 어림잡아 예측해보는 것이 중요하다.

| 데이터 크기 제한 | 예상되는 시간복잡도 |
| --- | --- |
| n <= 1,000,000 | O(n) or O(logn) |
| n <= 10,000 | O(n^2) |
| n <= 500 | O(n^3) |


## 시간복잡도 구하는 요령
- 하나의 루프를 사용하여 단일 요소 집합을 반복하는 경우 : O(n)
- 배열의 절반 이상을 반복하는 경우 : O(n / 2) => O(n)
- 두 개의 다른 루프를 사용하여 두개의 개별 배열을 반복하는 경우 : O(n + m) => O(n)
- 두 개의 중첩 루프를 사용하여 단일 배열을 반복하는 경우 : O(n^2)
- 두 개의 중첩루프를 사용하여 두 개의 다른 배열을 반복하는 경우 : O(n * m) => O(n^2)
- 배열의 정렬ㅇ르 사용하는 경우 : O(n * log(n))


## Big-O 상한점근, Big-Ω(omega) 하한 점근,  Big-Θ(theta) 상한,하한의 평균