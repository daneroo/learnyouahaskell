
-- TODO(daneroo): debug and time?
-- TODO(daneroo): iterate downwards, and return the first prime

isDivisible :: Int -> Int -> Bool
isDivisible x y = rem x y == 0

-- list of [1..n]
upToSqrt :: Int -> [Int]
upToSqrt n = [a| a<- [2..n], a^2<=n]

intPow :: Int -> Int -> Int
intPow i p = foldl (*) 1 $ take p $ repeat 10

largestNdigit :: Int -> Int
largestNdigit n = intPow 10 n - 1

-- Plan
-- for each x in [2..n] check if n is a divisor of n
divisors :: Int -> [Int]
divisors n  = filter (isDivisible n) (upToSqrt n)

isPrime :: Int -> Bool
isPrime n  = null $ divisors n

allPrimes :: Int -> [Int]
allPrimes n = filter (isPrime) [1..n]

-- generate *all primes*, find the max: very slow!
-- 5 seconds for 4 digits
largestPrimeNdigits' :: Int -> Int
largestPrimeNdigits' n = maximum $ allPrimes $ largestNdigit n

-- Better solution, find the first prime in a descending sequence from 2^n-1 .. 1
-- Now this takes 7 seconds for largestPrimeNdigits 7
largestPrime'' :: Int -> Int
largestPrime'' n 
  | isPrime n = n
  | otherwise = largestPrime'' (n - 1)

largestPrimeNdigits'' :: Int -> Int
largestPrimeNdigits'' n = largestPrime'' (largestNdigit n)

-- even shorter: use head, filter
largestPrime :: Int -> Int
largestPrime n  = head $ filter isPrime [n,n-1 .. 1]

largestPrimeNdigits :: Int -> Int
largestPrimeNdigits n = largestPrime (largestNdigit n)


