--ass -13
select Orders.OrderID, OrderDate,IsClosed,
Customers.Name as customerName,ShippingAddress,customers.Email,customers.Phone,City,state,Country,Pincode,
Employees.Name as employeename from  

Orders 
join Customers on Orders.CustomerID = Customers.CustomerID
left join Employees on Orders.EmployeeID = Employees.EmployeeID

where Orders.EmployeeID is null
