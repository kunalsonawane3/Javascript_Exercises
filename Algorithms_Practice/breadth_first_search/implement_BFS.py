class Graph:
  def __init__(self,n):
    self.vert = n
    self.graph = {}
    for i in range(n):
      self.graph[i] = []
  
  # adding an edge
  def add_edge(self, u, v):
    self.graph[u].append(v)
  
  def BFS(self, root):
    visited = []
    queue = []
    bfs_info = {}

    # taking track of distance and predecessor
    for i in range(self.vert):
      bfs_info[i] = {'distance': None, 'predecessor': None}

    # adding root node to queue
    queue.append(root)
    bfs_info[root]["distance"] = 0

    while queue:
      s = queue.pop(0)
      # printing vertex visited with distance and predecessor
      print("vertex = ",s, ": distance: ", bfs_info[s]["distance"], "predecessor: ",bfs_info[s]["predecessor"])
      visited.append(s)

      for i in self.graph[s]:
        if i not in visited:
          bfs_info[i]["distance"] = bfs_info[s]["distance"] + 1
          bfs_info[i]["predecessor"] = s
          queue.append(i)
          visited.append(i)

# driver Code 

if __name__ == "__main__":
  g = Graph(8)
  g.add_edge(0,1)
  g.add_edge(1,0)
  g.add_edge(1,4)
  g.add_edge(1,5)
  g.add_edge(2,3)
  g.add_edge(2,4)
  g.add_edge(2,5)
  g.add_edge(3,2)
  g.add_edge(3,6)
  g.add_edge(4,1)
  g.add_edge(4,2)
  g.add_edge(5,1)
  g.add_edge(5,2)
  g.add_edge(5,6)
  g.add_edge(6,3)
  g.add_edge(6,5)

  g.BFS(3)

