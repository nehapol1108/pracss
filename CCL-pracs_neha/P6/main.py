def fib(n):
    if n<=1:
	    return n
	return fib(n-2)+fib(n-1)

for i in range(8):
	print(fib(i))
	
