﻿using System;
namespace Cust.Model
{
	/// <summary>
	/// 操作员表
	/// </summary>
	[Serializable]
	public partial class operators
	{
		public operators()
		{}
		#region Model
		private int _id;
		private string _name;
		private string _pwd;
		/// <summary>
		/// 编号
		/// </summary>
		public int Id
		{
			set{ _id=value;}
			get{return _id;}
		}
		/// <summary>
		/// 名称
		/// </summary>
		public string Name
		{
			set{ _name=value;}
			get{return _name;}
		}
		/// <summary>
		/// 密码
		/// </summary>
		public string Pwd
		{
			set{ _pwd=value;}
			get{return _pwd;}
		}
		#endregion Model

	}
}

