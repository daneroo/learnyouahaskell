
data Point = Point Float Float deriving (Show)  
data Shape = Circle Point Float | Rectangle Point Point deriving (Show)  

surface :: Shape -> Float  
surface (Circle _ r) = pi * r ^ 2  
surface (Rectangle (Point x1 y1) (Point x2 y2)) = (abs $ x2 - x1) * (abs $ y2 - y1)  

-- data Person = Person { firstName :: String  
--                      , lastName :: String  
--                      , age :: Int  
--                      , height :: Float  
--                      , phoneNumber :: String  
--                      , flavor :: String  
--                      } deriving (Show)   

data Car = Car {company :: String, model :: String, year :: Int} deriving (Show)  

data Person = Person { firstName :: String  
                     , lastName :: String  
                     , age :: Int  
                     } deriving (Eq, Show, Read)  

data Day = Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday   
           deriving (Eq, Ord, Show, Read, Bounded, Enum)  
