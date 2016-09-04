

import Data.Char
import Data.List

duplicateCount :: String -> Int
duplicateCount str = length $ filter (\x-> 1<(length x)) $ group $ sort $ map toLower str

-- Even Better
duplicateCount' :: String -> Int
duplicateCount' = length . filter ((> 1) . length) . group . sort . map toLower
