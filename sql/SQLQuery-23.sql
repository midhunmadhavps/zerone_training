

select Orders.CustomerID,Products.name,OrderItems.Quantity,Rate from ProductSuppliers 
join Products on Products.ProductID = ProductSuppliers.ProductID
join OrderItems on OrderItems.ProductSupplierID = ProductSuppliers.ProductSupplierID
join Orders on Orders.OrderID = OrderItems.OrderID

where OrderDate between DATEADD("m" , -6 , GETDATE()) and GETDATE()
and Orders.CustomerID = 5
