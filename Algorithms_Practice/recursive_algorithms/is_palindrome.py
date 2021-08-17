def is_palindrome(s):
  s = s.lower()
  l = len(s)
  # base case
  if l < 2:
    return True
  # recursive case
  elif s[0] == s[l-1]:
    return is_palindrome(s[1:l-1])

  else:
    return False


print(is_palindrome("a"))
print(is_palindrome("motor"))
print(is_palindrome("rotor"))
print(is_palindrome(""))
print(is_palindrome("radar"))

