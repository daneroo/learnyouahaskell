
doubleMe x = x + x

length' :: (Num b) => [a] -> b  
length' [] = 0  
length' (_:xs) = 1 + length' xs  

sum' :: (Num a) => [a] -> a  
sum' [] = 0  
sum' (x:xs) = x + sum' xs  

initials :: String -> String -> String  
initials firstname lastname = [f] ++ ". " ++ [l] ++ "."  
    where (f:_) = firstname  
          (l:_) = lastname    

calcBmis :: (RealFloat a) => [(a, a)] -> [a]  
calcBmis xs = [bmi w h | (w, h) <- xs]  
    where bmi weight height = weight / height ^ 2  

maximum' :: (Ord a) => [a] -> a  
maximum' [] = error "maximum of empty list"  
maximum' [x] = x  
maximum' (x:xs)   
    | x > maxTail = x  
    | otherwise = maxTail  
    where maxTail = maximum' xs                

replicate' :: (Num i, Ord i) => i -> a -> [a]  
replicate' n x  
    | n <= 0    = []  
    | otherwise = x:replicate' (n-1) x  

take' :: (Num i, Ord i) => i -> [a] -> [a]  
take' n _  
    | n <= 0   = []  
take' _ []     = []  
take' n (x:xs) = x : take' (n-1) xs      

elem' :: (Eq a) => a -> [a] -> Bool  
elem' _ [] = False
elem' a (x:xs) = a==x || elem' a xs

elem'' :: (Eq a) => a -> [a] -> Bool  
elem'' _ [] = False
elem'' a (x:xs)
  | a==x = True
  | otherwise = elem' a xs

quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) = 
  let smaller = quicksort [a | a <- xs, a <= x]
      bigger = quicksort [a | a <- xs, a >= x]
  in smaller ++ [x] ++ bigger

applyTwice :: (a -> a) -> a -> a  
applyTwice f x = f (f x)  

zipWith' :: (a -> b -> c) -> [a] -> [b] -> [c]  
zipWith' _ [] _ = []  
zipWith' _ _ [] = []  
zipWith' f (x:xs) (y:ys) = f x y : zipWith' f xs ys  

-- Can I do it with zip and map
zipWith'' :: (a -> b -> c) -> [a] -> [b] -> [c]  
zipWith'' f xs ys = map ftuple zipped where
  zipped = zip xs ys
  ftuple (a,b) = f a b

flip' :: (a -> b -> c) -> (b -> a -> c)  
flip' f a b = f b a  

filter' :: (a -> Bool) -> [a] -> [a]  
filter' _ [] = []
filter' f (x:xs)
  | f x       = x : (filter' f xs)
  | otherwise = filter' f xs  
