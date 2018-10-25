using System;
namespace Cust.Model
{
	/// <summary>
	/// 故障登记明细
	/// </summary>
	[Serializable]
	public partial class detail
	{
		public detail()
		{}
		#region Model
		private int _id;
		private string _name;
		private DateTime? _date;
		private string _reportor;
		private string _phone;
		private int? _customerid;
		private int? _systemid;
		private string _problemdetail;
		private string _methods;
		private string _days;
		private string _result;
		private int? _isconfilmid;
		private int? _categoryid;
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
		/// 日期
		/// </summary>
		public DateTime? DATE
		{
			set{ _date=value;}
			get{return _date;}
		}
		/// <summary>
		/// 报告人
		/// </summary>
		public string Reportor
		{
			set{ _reportor=value;}
			get{return _reportor;}
		}
		/// <summary>
		/// 电话
		/// </summary>
		public string Phone
		{
			set{ _phone=value;}
			get{return _phone;}
		}
		/// <summary>
		/// 客户信息
		/// </summary>
		public int? CustomerId
		{
			set{ _customerid=value;}
			get{return _customerid;}
		}
		/// <summary>
		/// 软件系统
		/// </summary>
		public int? SystemId
		{
			set{ _systemid=value;}
			get{return _systemid;}
		}
		/// <summary>
		/// 问题描述
		/// </summary>
		public string ProblemDetail
		{
			set{ _problemdetail=value;}
			get{return _problemdetail;}
		}
		/// <summary>
		/// 处理方法
		/// </summary>
		public string Methods
		{
			set{ _methods=value;}
			get{return _methods;}
		}
		/// <summary>
		/// 处理天数
		/// </summary>
		public string Days
		{
			set{ _days=value;}
			get{return _days;}
		}
		/// <summary>
		/// 处理结果
		/// </summary>
		public string Result
		{
			set{ _result=value;}
			get{return _result;}
		}
		/// <summary>
		/// 客户确认
		/// </summary>
		public int? IsConfilmId
		{
			set{ _isconfilmid=value;}
			get{return _isconfilmid;}
		}
		/// <summary>
		/// 售后类型
		/// </summary>
		public int? CategoryId
		{
			set{ _categoryid=value;}
			get{return _categoryid;}
		}
		#endregion Model

	}
}

