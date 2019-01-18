using Dapper;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DataPlayer.Base
{
    public class DPGenericRepository<TEntity> : IDPGenericRepository<TEntity> where TEntity : class
    {
        public string connectionString= ConfigurationManager.ConnectionStrings["dbconnectionstring"].ConnectionString;
        public virtual string PrimaryId { get; set; }

        public DPGenericRepository()
        {
            PrimaryId = "Id";
        }

        public int Add(TEntity entity)
        {
            var columns = GetColumns();
            var stringOfColumns = string.Join(", ", columns);
            var stringOfParameters = string.Join(", ", columns.Select(e => "@" + e));
            var query = $"insert into {typeof(TEntity).Name} ({stringOfColumns}) values ({stringOfParameters});" +
                $"SELECT CAST(SCOPE_IDENTITY() as int)";

            int id = 0;
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                id = connection.Query<int>(query, entity).Single();
            }
            //(entity as BaseEntity).Id = id;
            return id;
        }

        public int Add(IEnumerable<TEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> AddAsync(TEntity entity)
        {
            throw new NotImplementedException();
        }

        private IEnumerable<string> GetColumns()
        {
            return typeof(TEntity)
                    .GetProperties()
                    .Where(e => e.Name != PrimaryId && !e.PropertyType.GetTypeInfo().IsGenericType)
                    .Select(e => e.Name);
        }
        public Task<int> AddAsync(IEnumerable<TEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> All()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<TEntity>> AllAsync()
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            //throw new NotImplementedException();
        }

        public TEntity Find(object id)
        {
            var query = $"select * from {typeof(TEntity).Name} where "+PrimaryId+" = @Id";
            //string sql = "SELECT * FROM OrderDetails WHERE OrderDetailID = @OrderDetailID;";

            TEntity entity = null;
            using (var connection = new SqlConnection(connectionString))
            {
                entity = connection.QuerySingle<TEntity>(query, new { Id = id });                
            }

            return entity;
        }

        public TEntity FindByName(string name)
        {
            var query = $"select * from {typeof(TEntity).Name} where UserName = @Name";

            TEntity entity = null;
            using(var connection = new SqlConnection(connectionString))
            {
                entity = connection.QuerySingleOrDefault<TEntity>(query, new { Name = name });
            }

            return entity;
        }

        public TEntity FindByUserNamePassword(string name, string password)
        {
            var query = $"select * from {typeof(TEntity).Name} where UserName = @Name and Password = @Password";

            TEntity entity = null;
            using(var connection = new SqlConnection(connectionString))
            {
                entity = connection.QuerySingleOrDefault<TEntity>(query, new { Name = name, Password = password });
            }

            return entity;
        }

        public Task<TEntity> FindAsync(object pksFields)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> GetData(object filter)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> GetData(string where="")
        {
            var query = $"select * from {typeof(TEntity).Name} ";

            if (!string.IsNullOrWhiteSpace(where))
                query += where;

            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                return connection.Query<TEntity>(query);
            }
        }

        public Task<IEnumerable<TEntity>> GetDataAsync(object filter)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<TEntity>> GetDataAsync(string qry, object parameters)
        {
            throw new NotImplementedException();
        }

        public int InstertOrUpdate(TEntity entity, object pks)
        {
            throw new NotImplementedException();
        }

        public Task<int> InstertOrUpdateAsync(TEntity entity, object pks)
        {
            throw new NotImplementedException();
        }

        public void Remove(object key)
        {
            var query = $"delete from {typeof(TEntity).Name} where "+ PrimaryId +" = @Id";

            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                connection.Execute(query, new { Id = key });
            }
        }

        public Task RemoveAsync(object key)
        {
            throw new NotImplementedException();
        }

        public bool Update(TEntity entity)
        {
            try
            {
                var columns = GetColumns();
                var stringOfColumns = string.Join(", ", columns.Select(e => $"{e} = @{e}"));
                var query = $"update {typeof(TEntity).Name} set {stringOfColumns} where " + PrimaryId + " = @" + PrimaryId;

                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    connection.Execute(query, entity);
                }

                return true;
            }
            catch (Exception e)
            {
                return false;
            }
            
        }

        public Task<int> UpdateAsync(TEntity entity, object pks)
        {
            throw new NotImplementedException();
        }
    }
}
