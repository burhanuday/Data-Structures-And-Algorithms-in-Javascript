function dijkstra(graph, distances){
    console.log(graph);
    let visited = new Array(V);

    for(let i=0; i<V; i++) {
        distances[i] = INF;
        visited[i] = false;
    }

    distances[0] = 0;

    for(let i=0; i<V-1; i++){
        let index = minDistanceVertex(distances, visited);
        visited[index] = true;
        for(let j=0; j<V; j++){
            if(!visited[j] && graph[i][j]!=0 && distances[i]!=INF &&
                distances[i]+graph[i][j]<distances[j]){
                    distances[j] = distances[i] + graph[i][j];
                }
        }
    }
}

function minDistanceVertex(distances, visited){
    let min = INF;
    let index;
    for(let i=0; i<V; i++){
        if(distances[i]<min && !visited[i]){
            min = distances[i];
            index = i;
        }
    }

    return index;
}

const INF = 9999;

const graph = [
    [0, 4, INF, 8, INF],
    [4, 0, 3, INF, INF],
    [INF, 3, 0, 4, INF],
    [8, INF, 4, 0, 7],
    [INF, INF, INF, 7, 0]
]

const V = 5;

let distances = new Array(V);

dijkstra(graph, distances);

console.log(distances);
