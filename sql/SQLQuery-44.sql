
-- 44 Number of orders for various rate ranges (say 1 to 1000, 1001 to 5000, >5001 etc.) for my products in last n months

--Hint: This is going to be a union query. Find for each range and union. This is slightly tricky.

--rate  1 to 1000
Select '1 to 1000' as 'Range',
max(Products.Name) as 'Product Name',
count(Orders.OrderID) as 'Num Of Orders'
from Orders join OrderItems on Orders.OrderID = OrderItems.OrderID
join ProductSuppliers on ProductSuppliers.ProductID = OrderItems.ProductSupplierID
join Products on Products.ProductID = ProductSuppliers.ProductID

where Products.Rate between 1 and 1000 and ProductSuppliers.SupplierID=2 and
OrderDate between DATEADD("m",-1, GETDATE()) and  GETDATE()
group by Products.Name

union all
--rate  10001 to 5000
Select '10001 to 5000' as 'Range',
max(Products.Name) as 'Product Name',
count(Orders.OrderID) as 'Num Of Orders' from Orders join OrderItems on Orders.OrderID = OrderItems.OrderID
join ProductSuppliers on ProductSuppliers.ProductID = OrderItems.ProductSupplierID
join Products on Products.ProductID = ProductSuppliers.ProductID

where Products.Rate between 1001 and 5000 and ProductSuppliers.SupplierID=2 and
OrderDate between DATEADD("m",-6, GETDATE()) and  GETDATE()
group by Products.Name

union all

-- rate > 5000
Select '> 5000' as 'Range',
max(Products.Name) as 'Product Name',
count(Orders.OrderID) as 'Num Of Orders' from Orders join OrderItems on Orders.OrderID = OrderItems.OrderID
join ProductSuppliers on ProductSuppliers.ProductID = OrderItems.ProductSupplierID
join Products on Products.ProductID = ProductSuppliers.ProductID

where Products.Rate > 5000 and ProductSuppliers.SupplierID=2 and
OrderDate between DATEADD("m",-1, GETDATE()) and  GETDATE()
group by Products.Name


44-modify
Select '1 to 1000' as Range,Count(Orders.OrderID) as 'OrderCount'
	from Orders join OrderItems on Orders.OrderID = OrderItems.OrderID
	join ProductSuppliers on OrderItems.ProductSupplierID = ProductSuppliers.ProductSupplierID
	join Products on ProductSuppliers.ProductID = Products.ProductID
	where Products.Rate between 1 and 1000 and OrderDate between DATEADD("m",-6,Getdate()) and GETDATE() 
	group by  ProductSuppliers.SupplierID
	union all
	Select '1000 to 5000'as Range,Count(Orders.OrderID) as 'OrderCount'
	from Orders join OrderItems on Orders.OrderID = OrderItems.OrderID
	join ProductSuppliers on OrderItems.ProductSupplierID = ProductSuppliers.ProductSupplierID
	join Products on ProductSuppliers.ProductID = Products.ProductID
	where Products.Rate between 1001 and 5000 and OrderDate between DATEADD("m",-6,Getdate()) and GETDATE() 
	group by ProductSuppliers.SupplierID
	union all
	Select '>5000'as Range,Count(Orders.OrderID) as 'OrderCount'
	from Orders join OrderItems on Orders.OrderID = OrderItems.OrderID
	join ProductSuppliers on OrderItems.ProductSupplierID = ProductSuppliers.ProductSupplierID
	join Products on ProductSuppliers.ProductID = Products.ProductID
	where Products.Rate >5000 and OrderDate between DATEADD("m",-6,Getdate()) and GETDATE() 
	group by ProductSuppliers.SupplierID
	     
