def is_even(n):
  return n % 2 == 0
  
def is_odd(n):
  return n % 2 == 1

def power(x, n):
  if n == 0:
    return 1
# if n is positve
  if n == 1:
    return x
  elif n > 1:
    return x*power(x,n-1)
# if n is negative  
  if n == -1:
    return 1/x
  elif n < -1:
    return power(x,n+1)/x
  

print(power(3,0))
print(power(3,1))
print(power(3,2))
print(power(3,-1))
print(power(3,-2))