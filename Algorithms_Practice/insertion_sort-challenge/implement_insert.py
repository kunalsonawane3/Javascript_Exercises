def insert(arr, right_index, value):

  while right_index >= 0 and value < arr[right_index]:
    arr[right_index+1] = arr[right_index]
    right_index = right_index - 1
  arr[right_index+1] = value

if __name__ == "__main__":
  array = [3, 5, 7, 11, 13, 2, 9, 6]

  insert(array, 4, 2)
  print(array)

  insert(array, 5, 9)
  print(array)

  insert(array, 6, 6)
  print(array)
