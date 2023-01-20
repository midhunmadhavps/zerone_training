
--43 Number of orders for various rate ranges (say 1 to 1000, 1001 to 5000, >5001 etc.) in last n months

--Hint: This is going to be a union query. Find for each range and union. This is slightly tricky.


Select '1 to 1000' as 'Range',
count(Orders.OrderID) as 'Num Of Orders'
from Orders join OrderItems on Orders.OrderID = OrderItems.OrderID
join ProductSuppliers on ProductSuppliers.ProductID = OrderItems.ProductSupplierID
join Products on Products.ProductID = ProductSuppliers.ProductID
where Products.Rate between 1 and 1000 and 
OrderDate between DATEADD("m",-1, GETDATE()) and  GETDATE()
group by Products.Name

union all

Select '10001 to 5000' as 'Range',
count(Orders.OrderID) as 'Num Of Orders' from Orders join OrderItems on Orders.OrderID = OrderItems.OrderID
join ProductSuppliers on ProductSuppliers.ProductID = OrderItems.ProductSupplierID
join Products on Products.ProductID = ProductSuppliers.ProductID

where Products.Rate between 1001 and 5000 and 
OrderDate between DATEADD("m",-6, GETDATE()) and  GETDATE()
group by Products.Name

union all


Select '> 5000' as 'Range',
count(Orders.OrderID) as 'Num Of Orders' from Orders join OrderItems on Orders.OrderID = OrderItems.OrderID
join ProductSuppliers on ProductSuppliers.ProductID = OrderItems.ProductSupplierID
join Products on Products.ProductID = ProductSuppliers.ProductID

where Products.Rate > 5000 and 
OrderDate between DATEADD("m",-1, GETDATE()) and  GETDATE()
group by Products.Name


