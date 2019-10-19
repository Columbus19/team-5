CREATE TABLE [MAIN_FAB4] ( 
	[ClientID] INTEGER  NOT NULL PRIMARY KEY, 
	[ClientName] NVARCHAR(50)  NOT NULL,  
	[TotalDebt] INTEGER NOT NULL,
	[MonthlyPayment] INTEGER NOT NULL,
	[StartDate] TEXT NOT NULL,
	[PaymentDate] INTEGER
); 

INSERT INTO MAIN_FAB4 (ClientID, ClientName, TotalDebt, MonthlyPayment, StartDate, PaymentDate)
VALUES(1, "Hello this is a test", 1, 1, '2-24-96 00:00:00', 1),
(2, "Yoshiki Yamamoto", 1, 1, '2-24-96 00:00:00', 1),
(3, "TEST", 1, 1, '2-24-96 00:00:00', 1);