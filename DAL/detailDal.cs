using System;
using System.Data;
using System.Text;
using System.Data.SqlClient;
using Maticsoft.DBUtility;
using System.Collections.Generic;//Please add references
namespace Cust.DAL
{
	/// <summary>
	/// 数据访问类:detailDal
	/// </summary>
	public partial class detailDal
	{
		public detailDal()
		{}
		#region  BasicMethod

		/// <summary>
		/// 得到最大ID
		/// </summary>
		public int GetMaxId()
		{
		return DbHelperSQL.GetMaxID("Id", "detail"); 
		}

		/// <summary>
		/// 是否存在该记录
		/// </summary>
		public bool Exists(int Id)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select count(1) from detail");
			strSql.Append(" where Id=@Id");
			SqlParameter[] parameters = {
					new SqlParameter("@Id", SqlDbType.Int,4)
			};
			parameters[0].Value = Id;

			return DbHelperSQL.Exists(strSql.ToString(),parameters);
		}


		/// <summary>
		/// 增加一条数据
		/// </summary>
		public int Add(Cust.Model.detail model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("insert into detail(");
			strSql.Append("Name,DATE,Reportor,Phone,CustomerId,SystemId,ProblemDetail,Methods,Days,Result,IsConfilmId,CategoryId)");
			strSql.Append(" values (");
			strSql.Append("@Name,@DATE,@Reportor,@Phone,@CustomerId,@SystemId,@ProblemDetail,@Methods,@Days,@Result,@IsConfilmId,@CategoryId)");
			strSql.Append(";select @@IDENTITY");
			SqlParameter[] parameters = {
					new SqlParameter("@Name", SqlDbType.VarChar,4000),
					new SqlParameter("@DATE", SqlDbType.DateTime),
					new SqlParameter("@Reportor", SqlDbType.VarChar,4000),
					new SqlParameter("@Phone", SqlDbType.VarChar,4000),
					new SqlParameter("@CustomerId", SqlDbType.Int,4),
					new SqlParameter("@SystemId", SqlDbType.Int,4),
					new SqlParameter("@ProblemDetail", SqlDbType.VarChar,4000),
					new SqlParameter("@Methods", SqlDbType.VarChar,4000),
					new SqlParameter("@Days", SqlDbType.VarChar,4000),
					new SqlParameter("@Result", SqlDbType.VarChar,4000),
					new SqlParameter("@IsConfilmId", SqlDbType.Int,4),
					new SqlParameter("@CategoryId", SqlDbType.Int,4)};
			parameters[0].Value = model.Name;
			parameters[1].Value = model.DATE;
			parameters[2].Value = model.Reportor;
			parameters[3].Value = model.Phone;
			parameters[4].Value = model.CustomerId;
			parameters[5].Value = model.SystemId;
			parameters[6].Value = model.ProblemDetail;
			parameters[7].Value = model.Methods;
			parameters[8].Value = model.Days;
			parameters[9].Value = model.Result;
			parameters[10].Value = model.IsConfilmId;
			parameters[11].Value = model.CategoryId;

			object obj = DbHelperSQL.ExecuteSql(strSql.ToString(),parameters);
			if (obj == null)
			{
				return 0;
			}
			else
			{
				return Convert.ToInt32(obj);
			}
		}
		/// <summary>
		/// 更新一条数据
		/// </summary>
		public bool Update(Cust.Model.detail model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("update detail set ");
			strSql.Append("Name=@Name,");
			strSql.Append("DATE=@DATE,");
			strSql.Append("Reportor=@Reportor,");
			strSql.Append("Phone=@Phone,");
			strSql.Append("CustomerId=@CustomerId,");
			strSql.Append("SystemId=@SystemId,");
			strSql.Append("ProblemDetail=@ProblemDetail,");
			strSql.Append("Methods=@Methods,");
			strSql.Append("Days=@Days,");
			strSql.Append("Result=@Result,");
			strSql.Append("IsConfilmId=@IsConfilmId,");
			strSql.Append("CategoryId=@CategoryId");
			strSql.Append(" where Id=@Id");
			SqlParameter[] parameters = {
					new SqlParameter("@Name", SqlDbType.VarChar,4000),
					new SqlParameter("@DATE", SqlDbType.DateTime),
					new SqlParameter("@Reportor", SqlDbType.VarChar,4000),
					new SqlParameter("@Phone", SqlDbType.VarChar,4000),
					new SqlParameter("@CustomerId", SqlDbType.Int,4),
					new SqlParameter("@SystemId", SqlDbType.Int,4),
					new SqlParameter("@ProblemDetail", SqlDbType.VarChar,4000),
					new SqlParameter("@Methods", SqlDbType.VarChar,4000),
					new SqlParameter("@Days", SqlDbType.VarChar,4000),
					new SqlParameter("@Result", SqlDbType.VarChar,4000),
					new SqlParameter("@IsConfilmId", SqlDbType.Int,4),
					new SqlParameter("@CategoryId", SqlDbType.Int,4),
					new SqlParameter("@Id", SqlDbType.Int,4)};
			parameters[0].Value = model.Name;
			parameters[1].Value = model.DATE;
			parameters[2].Value = model.Reportor;
			parameters[3].Value = model.Phone;
			parameters[4].Value = model.CustomerId;
			parameters[5].Value = model.SystemId;
			parameters[6].Value = model.ProblemDetail;
			parameters[7].Value = model.Methods;
			parameters[8].Value = model.Days;
			parameters[9].Value = model.Result;
			parameters[10].Value = model.IsConfilmId;
			parameters[11].Value = model.CategoryId;
			parameters[12].Value = model.Id;

			int rows=DbHelperSQL.ExecuteSql(strSql.ToString(),parameters);
			if (rows > 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		}

		/// <summary>
		/// 删除一条数据
		/// </summary>
		public bool Delete(int Id)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("delete from detail ");
			strSql.Append(" where Id=@Id");
			SqlParameter[] parameters = {
					new SqlParameter("@Id", SqlDbType.Int,4)
			};
			parameters[0].Value = Id;

			int rows=DbHelperSQL.ExecuteSql(strSql.ToString(),parameters);
			if (rows > 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		/// <summary>
		/// 批量删除数据
		/// </summary>
		public bool DeleteList(string Idlist )
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("delete from detail ");
			strSql.Append(" where Id in ("+Idlist + ")  ");
			int rows=DbHelperSQL.ExecuteSql(strSql.ToString());
			if (rows > 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		}


		/// <summary>
		/// 得到一个对象实体
		/// </summary>
		public Cust.Model.detail GetModel(int Id)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select  top 1 Id,Name,DATE,Reportor,Phone,CustomerId,SystemId,ProblemDetail,Methods,Days,Result,IsConfilmId,CategoryId from detail ");
			strSql.Append(" where Id=@Id");
			SqlParameter[] parameters = {
					new SqlParameter("@Id", SqlDbType.Int,4)
			};
			parameters[0].Value = Id;

			Cust.Model.detail model=new Cust.Model.detail();
			DataSet ds=DbHelperSQL.Query(strSql.ToString(),parameters);
			if(ds.Tables[0].Rows.Count>0)
			{
				return SingleDataRowToModel(ds.Tables[0].Rows[0]);
			}
			else
			{
				return null;
			}
		}

        private Model.detail SingleDataRowToModel(DataRow row)
        {
            Cust.Model.detail model = new Cust.Model.detail();
            if (row != null)
            {
                if (row["Id"] != null && row["Id"].ToString() != "")
                {
                    model.Id = int.Parse(row["Id"].ToString());
                }
                if (row["Name"] != null)
                {
                    model.Name = row["Name"].ToString();
                }
                if (row["DATE"] != null && row["DATE"].ToString() != "")
                {
                    model.DATE = DateTime.Parse(row["DATE"].ToString());
                }
                if (row["Reportor"] != null)
                {
                    model.Reportor = row["Reportor"].ToString();
                }
                if (row["Phone"] != null)
                {
                    model.Phone = row["Phone"].ToString();
                }

                if (row["CustomerId"] != null && row["CustomerId"].ToString() != "")
                {
                    model.CustomerId = Convert.ToInt32(row["CustomerId"]);
                }
                if (row["SystemId"] != null && row["SystemId"].ToString() != "")
                {
                    model.SystemId = Convert.ToInt32(row["SystemId"]);
                }
                if (row["ProblemDetail"] != null)
                {
                    model.ProblemDetail = row["ProblemDetail"].ToString();
                }
                if (row["Methods"] != null)
                {
                    model.Methods = row["Methods"].ToString();
                }
                if (row["Days"] != null)
                {
                    model.Days = row["Days"].ToString();
                }
                if (row["Result"] != null)
                {
                    model.Result = row["Result"].ToString();
                }
                if (row["IsConfilmId"] != null && row["IsConfilmId"].ToString() != "")
                {
                    model.IsConfilmId = int.Parse(row["IsConfilmId"].ToString());
                }
                if (row["CategoryId"] != null && row["CategoryId"].ToString() != "")
                {
                    model.CategoryId = Convert.ToInt32(row["CategoryId"]);
                }
            }
            return model;
        }


		/// <summary>
		/// 得到一个对象实体
		/// </summary>
		public Cust.Model.detail DataRowToModel(DataRow row)
		{
			Cust.Model.detail model=new Cust.Model.detail();
			if (row != null)
			{
				if(row["Id"]!=null && row["Id"].ToString()!="")
				{
					model.Id=int.Parse(row["Id"].ToString());
				}
				if(row["Name"]!=null)
				{
					model.Name=row["Name"].ToString();
				}
				if(row["DATE"]!=null && row["DATE"].ToString()!="")
				{
					model.DATE=DateTime.Parse(row["DATE"].ToString());
				}
				if(row["Reportor"]!=null)
				{
					model.Reportor=row["Reportor"].ToString();
				}
				if(row["Phone"]!=null)
				{
					model.Phone=row["Phone"].ToString();
				}
                if (row["cname"] != null && row["cname"].ToString() != "")
                {
                    model.Cname = row["cname"].ToString();
                }
                if (row["sname"] != null && row["sname"].ToString() != "")
                {
                    model.Sname = row["sname"].ToString();
                }
                if (row["fname"] != null && row["fname"].ToString() != "")
                {
                    model.Fname = row["fname"].ToString();
                }
              
				if(row["ProblemDetail"]!=null)
				{
					model.ProblemDetail=row["ProblemDetail"].ToString();
				}
				if(row["Methods"]!=null)
				{
					model.Methods=row["Methods"].ToString();
				}
				if(row["Days"]!=null)
				{
					model.Days=row["Days"].ToString();
				}
				if(row["Result"]!=null)
				{
					model.Result=row["Result"].ToString();
				}
				if(row["IsConfilmId"]!=null && row["IsConfilmId"].ToString()!="")
				{
					model.IsConfilmId=int.Parse(row["IsConfilmId"].ToString());
				}
               
			}
			return model;
		}

		/// <summary>
		/// 获得数据列表
		/// </summary>
		public DataSet GetList(string strWhere)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append(@"select d.Id,d.Name,d.DATE,d.Reportor,d.Phone,c.Name as cname,s.Name as sname,d.ProblemDetail,d.Methods,d.Days,d.Result,d.IsConfilmId,f.Name as fname from detail d join system s on d.SystemId=s.id 
                join customer c on c.Id=d.CustomerId 
                join faultcategory f on d.CategoryId=f.Id");
			if(strWhere.Trim()!="")
			{
				strSql.Append(" where "+strWhere);
			}
			return DbHelperSQL.Query(strSql.ToString());
		}

        /// <summary>
        /// 获得数据列表
        /// </summary>
        public List<Cust.Model.detail> GetListByPage(string strWhere,int pageIndex, int pageSize, out int pageTotal, out int RecodeTotal)
        {
            List<Cust.Model.detail> list = new List<Cust.Model.detail>();
            StringBuilder strSql = new StringBuilder();
            strSql.Append(@"select * from (
                            select d.Id,d.Name,d.DATE,d.Reportor,d.Phone,c.Name as cname,s.Name as sname,d.ProblemDetail,d.Methods,d.Days,d.Result,d.IsConfilmId,f.Name as fname ,Rn=ROW_NUMBER() over(order by d.id desc)
                            from detail d join system s on d.SystemId=s.id 
                            join customer c on c.Id=d.CustomerId 
                            join faultcategory f on d.CategoryId=f.Id) as t
                                         where" );
            if (strWhere.Trim() != "")
            {
                strSql.Append(" " + strWhere);
                strSql.Append("and t.Rn between (@pageIndex-1)*(@pageSize+1) and @pageSize*@pageIndex");
            }
            else
            {
                strSql.Append(" t.Rn between (@pageIndex-1)*(@pageSize+1) and @pageSize*@pageIndex");
            }
           
            SqlParameter[] sps = new SqlParameter[] { 
                new SqlParameter("@pageIndex",SqlDbType.Int){Value=pageIndex},
                new SqlParameter("@pageSize",SqlDbType.Int){Value=pageSize},
            };
            SqlDataReader reader = DbHelperSQL.ExecuteReader(strSql.ToString(), sps);
            if (reader.HasRows)
            {
                while (reader.Read())
                {
                    list.Add(new Cust.Model.detail()
                    {
                        Id = reader.GetInt32(0),
                        Name = reader.GetString(1),
                        DATE = reader.GetDateTime(2),
                        Reportor = reader.GetString(3),
                        Phone = reader.GetString(4),
                        Cname = reader.GetString(5),
                        Sname = reader.GetString(6),
                        ProblemDetail = reader.GetString(7),
                        Methods = reader.GetString(8),
                        Days = reader.GetString(9),
                        Result = reader.GetString(10),
                        IsConfilmId = reader.GetInt32(11),
                        Fname = reader.GetString(12)
                    });
                }
            }
            RecodeTotal = GetTotalRecords(strWhere);
            pageTotal = Convert.ToInt32(Math.Ceiling(RecodeTotal * 1.0 / pageSize));
            return list;

        }

        private int GetTotalRecords(string strWhere)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append( @"select count(*) from detail t");
            if (strWhere.Trim() != "")
            {
                strSql.Append(" where " + strWhere);
            }
            return Convert.ToInt32(DbHelperSQL.GetSingle(strSql.ToString()));
        }


        public DataTable GetTableList(string strWhere)
        {
            return GetList(strWhere).Tables[0];
        }

		/// <summary>
		/// 获得前几行数据
		/// </summary>
		public DataSet GetList(int Top,string strWhere,string filedOrder)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select ");
			if(Top>0)
			{
				strSql.Append(" top "+Top.ToString());
			}
			strSql.Append(" Id,Name,DATE,Reportor,Phone,CustomerId,SystemId,ProblemDetail,Methods,Days,Result,IsConfilmId,CategoryId ");
			strSql.Append(" FROM detail ");
			if(strWhere.Trim()!="")
			{
				strSql.Append(" where "+strWhere);
			}
			strSql.Append(" order by " + filedOrder);
			return DbHelperSQL.Query(strSql.ToString());
		}

		/// <summary>
		/// 获取记录总数
		/// </summary>
		public int GetRecordCount(string strWhere)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select count(1) FROM detail ");
			if(strWhere.Trim()!="")
			{
				strSql.Append(" where "+strWhere);
			}
			object obj = DbHelperSQL.GetSingle(strSql.ToString());
			if (obj == null)
			{
				return 0;
			}
			else
			{
				return Convert.ToInt32(obj);
			}
		}
		/// <summary>
		/// 分页获取数据列表
		/// </summary>
		public DataSet GetListByPage(string strWhere, string orderby, int startIndex, int endIndex)
		{
			StringBuilder strSql=new StringBuilder();
            strSql.Append("SELECT tt.Id,TT.Name,TT.DATE,TT.Reportor,TT.Phone,c.Name as Cname,s.Name as Sname,tt.ProblemDetail,TT.Methods,tt.Days,tt.Result,tt.IsConfilmId,f.Name as fname FROM ( ");
			strSql.Append(" SELECT ROW_NUMBER() OVER (");
			if (!string.IsNullOrEmpty(orderby.Trim()))
			{
				strSql.Append("order by T." + orderby );
			}
			else
			{
				strSql.Append("order by T.Id desc");
			}
			strSql.Append(")AS Row, T.*  from detail T ");
			if (!string.IsNullOrEmpty(strWhere.Trim()))
			{
				strSql.Append(" WHERE " + strWhere);
			}
			strSql.Append(@" ) TT join system s on TT.SystemId=s.id 
                            join customer c on c.Id=TT.CustomerId 
                            join faultcategory f on TT.CategoryId=f.Id");
			strSql.AppendFormat(" WHERE TT.Row between {0} and {1}", startIndex, endIndex);
			return DbHelperSQL.Query(strSql.ToString());
		}

		/*
		/// <summary>
		/// 分页获取数据列表
		/// </summary>
		public DataSet GetList(int PageSize,int PageIndex,string strWhere)
		{
			SqlParameter[] parameters = {
					new SqlParameter("@tblName", SqlDbType.VarChar, 255),
					new SqlParameter("@fldName", SqlDbType.VarChar, 255),
					new SqlParameter("@PageSize", SqlDbType.Int),
					new SqlParameter("@PageIndex", SqlDbType.Int),
					new SqlParameter("@IsReCount", SqlDbType.Bit),
					new SqlParameter("@OrderType", SqlDbType.Bit),
					new SqlParameter("@strWhere", SqlDbType.VarChar,1000),
					};
			parameters[0].Value = "detail";
			parameters[1].Value = "Id";
			parameters[2].Value = PageSize;
			parameters[3].Value = PageIndex;
			parameters[4].Value = 0;
			parameters[5].Value = 0;
			parameters[6].Value = strWhere;	
			return DbHelperSQL.RunProcedure("UP_GetRecordByPage",parameters,"ds");
		}*/

		#endregion  BasicMethod
		#region  ExtensionMethod

		#endregion  ExtensionMethod
	}
}

