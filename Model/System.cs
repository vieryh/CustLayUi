using System;
namespace Cust.Model
{
	/// <summary>
	/// 软件系统
	/// </summary>
	[Serializable]
	public partial class System
	{
		public System()
		{}
		#region Model
		private int _id;
		private string _name;
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

        public int Count { get; set; }
		#endregion Model

	}
}

