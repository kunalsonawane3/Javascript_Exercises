def recursive_fact(n):
  # base case
  if n == 0 or n == 1:
    return 1
  # recursive case
  else:
    return n*recursive_fact(n-1)
  
print("The value of 0! is ", recursive_fact(0))
print("The value of 5! is ", recursive_fact(5))

