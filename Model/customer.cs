using System;
namespace Cust.Model
{
	/// <summary>
	/// 客户表
	/// </summary>
	[Serializable]
	public partial class customer
	{
		public customer()
		{}
		#region Model
		private int _id;
		private string _name;
		private string _note;
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
		/// 备注
		/// </summary>
		public string Note
		{
			set{ _note=value;}
			get{return _note;}
		}
		#endregion Model

	}
}

