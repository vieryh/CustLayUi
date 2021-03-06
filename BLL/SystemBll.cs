﻿using System;
using System.Data;
using System.Collections.Generic;
using Maticsoft.Common;
using Cust.Model;
namespace Cust.BLL
{
	/// <summary>
	/// 软件系统
	/// </summary>
	public partial class SystemBll
	{
		private readonly Cust.DAL.SystemDal dal=new Cust.DAL.SystemDal();
		public SystemBll()
		{}
		#region  BasicMethod

		/// <summary>
		/// 得到最大ID
		/// </summary>
		public int GetMaxId()
		{
			return dal.GetMaxId();
		}

		/// <summary>
		/// 是否存在该记录
		/// </summary>
		public bool Exists(int Id)
		{
			return dal.Exists(Id);
		}

		/// <summary>
		/// 增加一条数据
		/// </summary>
		public int  Add(Cust.Model.System model)
		{
			return dal.Add(model);
		}

		/// <summary>
		/// 更新一条数据
		/// </summary>
		public bool Update(Cust.Model.System model)
		{
			return dal.Update(model);
		}

		/// <summary>
		/// 删除一条数据
		/// </summary>
		public bool Delete(int Id)
		{
			
			return dal.Delete(Id);
		}
		/// <summary>
		/// 删除一条数据
		/// </summary>
        //public bool DeleteList(string Idlist )
        //{
        //    return dal.DeleteList(Idlist );
        //}

		/// <summary>
		/// 得到一个对象实体
		/// </summary>
		public Cust.Model.System GetModel(int Id)
		{
			
			return dal.GetModel(Id);
		}

		/// <summary>
		/// 得到一个对象实体，从缓存中
		/// </summary>
		public Cust.Model.System GetModelByCache(int Id)
		{
			
			string CacheKey = "SystemModel-" + Id;
			object objModel = Maticsoft.Common.DataCache.GetCache(CacheKey);
			if (objModel == null)
			{
				try
				{
					objModel = dal.GetModel(Id);
					if (objModel != null)
					{
						int ModelCache = Maticsoft.Common.ConfigHelper.GetConfigInt("ModelCache");
						Maticsoft.Common.DataCache.SetCache(CacheKey, objModel, DateTime.Now.AddMinutes(ModelCache), TimeSpan.Zero);
					}
				}
				catch{}
			}
			return (Cust.Model.System)objModel;
		}

		/// <summary>
		/// 获得数据列表
		/// </summary>
        //public DataSet GetList(string strWhere)
        //{
        //    return dal.GetList(strWhere);
        //}
		/// <summary>
		/// 获得前几行数据
		/// </summary>
        //public DataSet GetList(int Top,string strWhere,string filedOrder)
        //{
        //    return dal.GetList(Top,strWhere,filedOrder);
        //}
		/// <summary>
		/// 获得数据列表
		/// </summary>
		public List<Cust.Model.System> GetModelList(string strWhere)
		{
			DataSet ds = dal.GetList(strWhere);
			return DataTableToList(ds.Tables[0]);
		}
		/// <summary>
		/// 获得数据列表
		/// </summary>
		public List<Cust.Model.System> DataTableToList(DataTable dt)
		{
			List<Cust.Model.System> modelList = new List<Cust.Model.System>();
			int rowsCount = dt.Rows.Count;
			if (rowsCount > 0)
			{
				Cust.Model.System model;
				for (int n = 0; n < rowsCount; n++)
				{
					model = dal.DataRowToModel(dt.Rows[n]);
					if (model != null)
					{
						modelList.Add(model);
					}
				}
			}
			return modelList;
		}

		/// <summary>
		/// 获得数据列表
		/// </summary>
        //public DataSet GetAllList()
        //{
        //    return GetList("");
        //}

		/// <summary>
		/// 分页获取数据列表
		/// </summary>
		public int GetRecordCount(string strWhere)
		{
			return dal.GetRecordCount(strWhere);
		}
		/// <summary>
		/// 分页获取数据列表
		/// </summary>
        //public DataSet GetListByPage(string strWhere, string orderby, int startIndex, int endIndex)
        //{
        //    return dal.GetListByPage( strWhere,  orderby,  startIndex,  endIndex);
        //}
		/// <summary>
		/// 分页获取数据列表
		/// </summary>
		//public DataSet GetList(int PageSize,int PageIndex,string strWhere)
		//{
			//return dal.GetList(PageSize,PageIndex,strWhere);
		//}

		#endregion  BasicMethod
		#region  ExtensionMethod

		#endregion  ExtensionMethod
	}
}

