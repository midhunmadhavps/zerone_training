
select 
ProductID,
count(customers.CustomerID) as 'UnHappy Customer'
,max(CustomerRating) as Rating
from  ShipmentItems 
join Shipments on Shipments.ShipmentID = ShipmentItems.ShipmentID
join OrderItems on ShipmentItems.OrderItemID = OrderItems.OrderItemID
join ProductSuppliers on OrderItems.ProductSupplierID = ProductSuppliers.ProductSupplierID
join Orders on OrderItems.OrderID = Orders.OrderID
join Customers on Orders.CustomerID = Customers.CustomerID
where DeliveryDate between DATEADD("m" , -6, GETDATE()) and GETDATE()
and CustomerRating <=3 and ProductSuppliers.SupplierID = 35
group by ProductID