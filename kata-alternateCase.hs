module Codewars.Kata.AlternatingCase where

import Data.Char

toAlternatingCase :: String -> String
toAlternatingCase str = map toggle str

toggle :: Char -> Char
toggle c
  | isUpper c = toLower c
  | isLower c = toUpper c
  | otherwise = c