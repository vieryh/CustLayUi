using Cust.BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Cust.DBUtility;
using System.Text;

namespace Cust.Web
{
    public partial class ProblemList : System.Web.UI.Page
    {
        BLL.detailBll sbll = new BLL.detailBll();
        BLL.customerBll cbll = new BLL.customerBll();
        SystemBll xbll = new SystemBll();
        BLL.faultcategoryBll fbll = new BLL.faultcategoryBll();
        string xstrWhere = "";
        string cstrWhere = "";
        //string strWhere = "";
        string fstrWhere = "";
        public List<Model.detail> list = new List<Model.detail>();
        public List<Model.customer> clist = new List<Model.customer>();
        public List<Model.System> xlist = new List<Model.System>();
        public List<Model.faultcategory> flist = new List<Model.faultcategory>();
        public string navStr = "";
        string keys = "";
        public string name = "";
       
        protected void Page_Load(object sender, EventArgs e)
        {

            if (!IsPostBack)
            {
              
                if ( Request["keys"]!=null)
                {
                    keys = Request["keys"];
                }
                Model.operators model = Session["UserInfo"] as Model.operators;
                name= model.Name;
                list = GetListStr(keys) ;
                clist = cbll.GetModelList(cstrWhere);
                xlist = xbll.GetModelList(xstrWhere);
               flist =fbll.GetModelList(fstrWhere);
            }
        }

        private List<Model.detail> GetListStr(string str)
        {
            if (str!=null)
            {
                str = "t.ProblemDetail like '%" + str + "%'";
            }
            int pageSize = 6;
            int pageIndex = 1;
            if (!string.IsNullOrEmpty(Request["pageindex"]))
            {
                pageIndex = Convert.ToInt32(Request["pageindex"]);
            }

            int pageTotal = 0;
            int RecodeTotal = 0;
            StringBuilder sb = new StringBuilder();
            List<Model.detail> list = sbll.GetListByPage(str,pageIndex, pageSize, out pageTotal, out RecodeTotal);

            navStr = Maticsoft.DBUtility.PagerHelper.strPage(RecodeTotal, pageSize, pageTotal, pageIndex, "ProblemList.aspx?pageindex=");
            return list;
        }
    }
}