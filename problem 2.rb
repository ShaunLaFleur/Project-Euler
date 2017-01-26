fib = [1, 1,]
i = 1
limit = 4000000
underlimit = false
sum = 0

while underlimit == false do
	if fib[i] % 2 == 0 
		sum += fib[i]
	end

	n = fib[i]+fib[i-1]

	if n < limit 
		fib.push(n)
		i += 1
	else
		underlimit = true
	end
end

puts "The sum of all even numbers in the Fibonacci sequence is: #{sum}"
puts "The sequence is: "
puts fib