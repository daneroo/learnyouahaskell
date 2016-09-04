disemvowel :: String -> String
disemvowel str = filter (\x -> not $ x `elem` "aeiouAEIOU") str

-- This is Better! found on site
disemvowel' :: String -> String
disemvowel' = filter (`notElem` "aeiouAEIOU")

