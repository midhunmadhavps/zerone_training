--ass 19

select ProductSuppliers.SupplierID,OrderItems.OrderItemID,OrderDate,ExpectedDeliveryDate,DeliveryDate
from ShipmentItems

join Shipments on ShipmentItems.ShipmentID = Shipments.ShipmentID
join OrderItems on OrderItems.OrderItemID = ShipmentItems.OrderItemID
join Orders on OrderItems.OrderID = Orders.OrderID
join ProductSuppliers on ProductSuppliers.ProductSupplierID = OrderItems.ProductSupplierID

where ExpectedDeliveryDate between DATEADD("m", -6,GETDATE()) and GETDATE()
and ExpectedDeliveryDate < DeliveryDate
and ProductSuppliers.SupplierID = 17

