
-- Create a view to find least ordered 20 items in past n months.
create view leastOrders as
select top 20 OrderID from Orders 
where OrderDate between DATEADD("m",-6, GETDATE()) and GETDATE()

ass-51
select Customers.CustomerID,orders.OrderID,Orders.OrderDate
from Customers left join Orders on Customers.CustomerID = Orders.CustomerID
where Orders.OrderID is null
union all
select min(Customers.CustomerID),min(orders.OrderID),max(Orders.OrderDate)
from Customers left join Orders on Customers.CustomerID = Orders.CustomerID
group by  Customers.CustomerID
having max(Orders.Orderdate)<Dateadd("month",-6,GeTDATE())
