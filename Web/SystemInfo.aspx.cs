using System;
using System.Collections.Generic;

using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Cust.BLL;
using Cust.Model;

namespace Cust.Web
{
    public partial class SystemInfo : System.Web.UI.Page
    {
        private SystemBll sbll = new SystemBll();
        string strWhere = "";
        public List<Model.System> list = new List<Model.System>();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
               list=sbll.GetModelList(strWhere);
            }
        }
    }
}