def binary_search(arr, target):
  min = 0
  max = len(arr)-1

  while min <= max:
    guess = min + (max - min)//2

    if arr[guess] == target:
      return guess
    
    elif arr[guess] < target:
      min = guess + 1
    
    else:
      max = guess - 1

  else:
    return -1

primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

result = binary_search(primes, 73)

print(f"Found prime at index: {result}")

num = int(input("Ente the number: "))

res = binary_search(primes, num)
print(f"Found {num} at index: {res}")
