module Codewars.G964.Longestconsec where

import Data.List (maximumBy)
import Data.Function (on)

longestConsec :: [String] -> Int -> String
longestConsec strs k 
  | length strs == 0 || length strs < k || k <= 0 = ""
  | otherwise = maximumBy (compare `on` length) $ reverse $ map (consec strs k) [0..length strs - k]
  
consec :: [String] -> Int -> Int -> String
consec strs k offset = concat $ take k $ drop offset strs

