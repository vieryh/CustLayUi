using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Cust.Web
{
    public partial class Custmors : System.Web.UI.Page
    {
        BLL.customerBll sbll = new BLL.customerBll();
        string strWhere = "";
        public List<Model.customer> list = new List<Model.customer>();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                list = sbll.GetModelList(strWhere);
            }
        }
    }
}