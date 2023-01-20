select Orders.CustomerID,ProductID,CustomerRating from  ShipmentItems 
join Shipments on Shipments.ShipmentID = ShipmentItems.ShipmentID
join OrderItems on ShipmentItems.OrderItemID = OrderItems.OrderItemID
join ProductSuppliers on OrderItems.ProductSupplierID = ProductSuppliers.ProductSupplierID
join Orders on OrderItems.OrderID = Orders.OrderID
where DeliveryDate between DATEADD("m" , -6, GETDATE()) and GETDATE()
and Orders.CustomerID =2 and ProductID = 2
order by ProductID
