highestPrime = 0
our_number = 600851475143

# Begin looking for a proper divisor
2.upto(our_number-1) do |i|
  if highestPrime != 0
    break
  end
  if our_number % i == 0
    # Once the divisor is found we save it to a variable and then test if it is a prime number.
    n = our_number/i
    # Start attempting to divide by every number starting from 2. If any number between 1 and itself divides evenly, it is not a prime number and thus not the number we're looking for.
    2.upto(n-1) do |j|
      if n % j == 0
        break
      end
      if j == n-1
        highestPrime = n
      end
    end
  end
end
puts highestPrime