from implement_insert import insert

def insertion_sort(arr):
  for i in range(1,len(arr)):
    value = arr[i]
    j = i -1 

    insert(arr, j, value)
  
if __name__ == "__main__":

  array = [22, 11, 99, 88, 9, 7, 42]
  insertion_sort(array)
  print(array)

