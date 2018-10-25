using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Cust.Web
{
    public partial class Types : System.Web.UI.Page
    {
        BLL.faultcategoryBll sbll = new BLL.faultcategoryBll();
        string strWhere = "";
        public List<Model.faultcategory> list = new List<Model.faultcategory>();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                list = sbll.GetModelList(strWhere);
            }
        }
    }
}