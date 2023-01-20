
-- Create a view to find least ordered 20 items in past n months.
create view leastOrders as
select top 20 OrderID from Orders 
where OrderDate between DATEADD("m",-6, GETDATE()) and GETDATE()