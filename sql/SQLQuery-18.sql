

select OrderItems.OrderItemID,OrderDate,ShipmentDate
from 
ProductSuppliers 
left join OrderItems on OrderItems.ProductSupplierID = ProductSuppliers.ProductSupplierID
join Orders on OrderItems.OrderID = Orders.OrderID
left join ShipmentItems on ShipmentItems.OrderItemID = OrderItems.OrderItemID
left join Shipments on Shipments.ShipmentID = ShipmentItems.ShipmentID


where  OrderDate between dateadd("m", -6,getdate()) and getdate()
and ProductSuppliers.SupplierID = 17 and ShipmentDate is null

