
--42  Customers who has not ordered anything in last n months
-- Hint: This is going to be a union query.You have to find those customers who has not ordered any items.
-- Then find out those customers whose last order date is beyond n months. Then, join results of both these queies.

select Customers.CustomerID,Orders.OrderId,OrderDate from Customers left join Orders on Customers.CustomerID = Orders.CustomerID
where Orders.OrderID is null

union all

select 
max(Customers.CustomerID) as 'Customer id',
min(Orders.OrderID) as 'order Id', 
min(Orders.OrderDate) as 'OrderDates' 
from Customers left join Orders on Customers.CustomerID = Orders.CustomerID

group by Customers.CustomerID
having MAX(Orders.OrderDate)<DATEADD("M" ,-6, GETDATE())

 