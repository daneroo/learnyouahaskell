

isDivisible :: Int -> Int -> Bool
isDivisible x y = rem x y == 0

-- list of [1..n]
upToSqrt :: Int -> [Int]
upToSqrt n = [a| a<- [2..n], a^2<=n]

intPow :: Int -> Int -> Int
intPow i p = foldl (*) 1 $ take p $ repeat 10

-- Plan
-- for each x in [2..n] check if n is a divisor of n
divisors :: Int -> [Int]
divisors n  = filter (isDivisible n) (upToSqrt n)

isPrime :: Int -> Bool
isPrime n  = null $ divisors n

allPrimes :: Int -> [Int]
allPrimes n = filter (isPrime) [1..n]

largestPrimeNdigits :: Int -> Int
largestPrimeNdigits n = maximum $ allPrimes $ intPow 10 n

