def iter_fact(n):
  result = 1
  if n == 0:
    return 1
  for i in range(1,n+1):
    result *= i
  return result

print("The value of 5! should be ", 5*4*3*2*1);
print("The value of 5! is " ,iter_fact(5));
print("The value of 0! should be 1");
print("The value of 0! is ", iter_fact(0))

