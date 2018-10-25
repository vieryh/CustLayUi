using System;
namespace Cust.Model
{
    /// <summary>
    /// 故障类别
    /// </summary>
    [Serializable]
    public partial class faultcategory
    {
        public faultcategory()
        { }
        #region Model
        private int _id;
        private string _name;
        private int? _count;
        /// <summary>
        /// 编号
        /// </summary>
        public int Id
        {
            set { _id = value; }
            get { return _id; }
        }
        /// <summary>
        /// 名称
        /// </summary>
        public string Name
        {
            set { _name = value; }
            get { return _name; }
        }
        /// <summary>
        /// 
        /// </summary>
        public int? Count
        {
            set { _count = value; }
            get { return _count; }
        }
        #endregion Model
    }
}
