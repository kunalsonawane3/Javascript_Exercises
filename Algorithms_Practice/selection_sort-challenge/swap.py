def swap(arr, first_index, second_index):
  arr[first_index], arr[second_index] = arr[second_index], arr[first_index]

test_arr = [7, 9, 4]
swap(test_arr, 0, 1)

print(test_arr)

swap(test_arr, 1, 2)
print(test_arr)

swap(test_arr, 0, 2)
print(test_arr)
