# Applied the shortcut found here: http://www.mathblog.dk/project-euler-problem-2/

fib = [0, 2]
i = 1
limit = 4000000
sum = 0
n = 2

while n < limit do
  fib[i] = n
	sum += fib[i]
	i += 1
	n = 4*fib[i-1]+fib[i-2]
end

puts "The sum of all even numbers in the Fibonacci sequence is: #{sum}"