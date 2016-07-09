function breadthFirstSearch(node) {
	var container = [];
	while (node.data !== null && container.length != 0) {
		node.status = visited;
		for (var i = 0; i < node.neighbors.length; i++) {
			if (!container.includes(node.neighbors[i])) {
				node.neighbors[i].status = visiting;
				container.push(node.neighbors[i]);
			}
		}
		node = container.shift();
	}
	return;
}