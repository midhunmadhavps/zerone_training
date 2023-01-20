--Create a view to get the orders made in last n months
create view [OrdersinLastmonths] as
select Orders.OrderID from Orders
where OrderDate between DATEADD("m",-6, GETDATE()) and GETDATE()

select * from OrdersinLastmonths