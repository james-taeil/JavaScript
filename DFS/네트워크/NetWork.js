function solution(n, computers) {
    answer = 0;
    // 방문 배열 만들기
    visited = []

    // 반복문으로 DFS 배열로 들어가서 조건 만족 시키기
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(computers, i, visited);
            answer ++
        }
    }
    return answer
}

function DFS (graph, v, visited) {
    // DFS 만들기
    for (let i = 0; i < graph[v].length; i++) {
        if ((!visited[i]) && graph[v][i] === 1) {
            visited[i] = true;
            dfs(graph, i, visited)
        }
    }
}