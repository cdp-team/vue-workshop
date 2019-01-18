CREATE TABLE [dbo].[Employees](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EmpCode] [sysname]  NULL,
	[Email] [varchar](max) NULL,
	[FirstName] [varchar](max) NULL,
	[LastName] [varchar](max) NULL,
	[CodePays] [varchar](2) NULL,
	[PhoneNumber] [varchar](max) NULL,
	[InsertDate] [datetime] NOT NULL,
	[Alias] [sysname] NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [AK_Employees] UNIQUE NONCLUSTERED 
(
	[Alias] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

ALTER TABLE [dbo].[Employees] ADD  CONSTRAINT [DF_BTLNotificationLog_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO


