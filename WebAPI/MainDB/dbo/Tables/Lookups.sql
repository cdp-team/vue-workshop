CREATE TABLE [dbo].[Lookups] (
    [Id]    INT            IDENTITY (1, 1) NOT NULL,
    [Key]   NVARCHAR (MAX) NULL,
    [Value] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_dbo.Lookups] PRIMARY KEY CLUSTERED ([Id] ASC)
);

