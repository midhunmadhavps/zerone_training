
select OrderItems.OrderItemID,ShipmentDate from 
OrderItems join ProductSuppliers on OrderItems.ProductSupplierID = ProductSuppliers.ProductSupplierID
left join ShipmentItems on ShipmentItems.OrderItemID = OrderItems.OrderItemID
left join Shipments on ShipmentItems.ShipmentID = Shipments.ShipmentID
where  ProductSuppliers.SupplierID = 17 and ShipmentDate is null


