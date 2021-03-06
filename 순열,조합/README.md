# Math 알고리즘 공부 목표
- 수학자가 되라는 것은 아니다.
- 알고리즘에 필요한 수학만 알아도 알고리즘 문제를 푸는데 지장 없다.
- 다양한 수학 개념과 알고리즘이 있다.
  - 순열 / 조합
  - 최대 공약수 / 최소공배수
  - 멱집합


## 순열(Permutations)
[순열](https://mathbang.net/545)의 개념을 알기 위해서는 **줄 세우기**를 생각하면 쉽니다. 예를들어 5장의 카드가 있다고 가정하자. 그 중 3장의 카드를 뽑아 줄을 세운다고 생각하면 경우의 수는 몇 가지가 나올까?

1. 5장의 카드 중 하나를 뽑는다. `5`가지
2. 4장의 카드 중 하나를 뽑는다. `4`가지
3. 3장의 카드 중 하나를 뽑는다. `3`가지

이 모든 경우는 연달아 일어나는 사건이다. 즉 **곱의 법칙**을 사용하여, `5x4x3 = 60`의 경우의 수가 나온다. 순열의 핵심은 **연달아 일어나는 사건**, **줄 세우기(순서 지키며 나열)** 이다. 

> 순열은 공식을 사용하기 보다 직관적으로 경우의 수를 계산하는게 빠르다.


## 조합(combinations)
항상 순열과 함께 커플처럼 따라다니는 것이 `조합`이다. 순열과 비슷해서 구분하기 어렵지만 다른점이 있다면, **순서**라는 개념이 추가된다. 즉 **순열로 구할 수 있는 경우의 수에서 중복된 경우의 수를 나눈다.**

위와 같이 5장의 카드가 있다고 가정하자. 이 중 3장의 카드를 뽑아야 한다. 

1. 5장의 카드 중 1장 카드를 뽑는다. `5`가지
2. 4장의 카드 중 1장 카드를 뽑는다. `4`가지
3. 3장의 카드 중 1장 카드를 뽑는다. `3`가지

조합 또한 연달아 일어나는 사건이므로 곱의 법칙을 사용하면 `5x4x3 = 60` 가지가 나온다. 하지만 우리는 순서를 간과했다. 1에서 a, 2에서 b, 3에서 c 를 고른 경우와 1에서 b, 2에서 c 3에서 a를 고른 경우가 차이가 있는가이다. **뽑힌 순서는 다르지만 두 경우 모두 3장의 카드르 뽑은 결과는 같다.** 즉 **중복**이라는 말이다.

이를 해결하기 위해 중복되는 **경우를 나눠줘야** 한다. 기본 공식은 `nCr = nPr / r!`이다. 예시를 생각해 보자면 `5C3` 이 될 것이고 이것은 5x4x3 / 3! 의 뜻이다.  즉 답은 10