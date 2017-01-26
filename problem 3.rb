num = 600851475143
highestPrime = 0
isFound = false

2.upto(Math.sqrt(num)) do |i|
	# Find proper divisor
	if num % i == 0 
		# If i is a proper divisor, check the result of num/i first.
		n = num/i
		2.upto(n-1) do |j|
			if n % j == 0
				break
			elsif j == n-1
				highestPrime = n
				isFound = true
			end
		end
		# If n is not a prime divisor of num, then we can check if i(since previously we determined it was a proper divisor) is a prime divisor.
		if isFound == false
			2.upto(i-1) do |j|
				if i % j == 0
					break
				elsif j == i-1
					highestPrime = i
				end
			end
		end
	end 
end
puts highestPrime