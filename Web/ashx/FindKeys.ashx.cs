using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Cust.BLL;
using Cust.Model;
using System.Text;

namespace Cust.Web.ashx
{
    /// <summary>
    /// FindKeys 的摘要说明
    /// </summary>
    public class FindKeys : IHttpHandler
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
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            if (context.Request["keys"] != null)
            {
                keys = context.Request["keys"];
            }
            list = GetListStr(keys, context);
            clist = cbll.GetModelList(cstrWhere);
            xlist = xbll.GetModelList(xstrWhere);
            flist = fbll.GetModelList(fstrWhere);
            context.Response.Redirect("/ProblemList.aspx");
        }

        private List<detail> GetListStr(string str, HttpContext context)
        {
            if (str != null)
            {
                str = "t.ProblemDetail like '%" + str + "%'";
            }
            int pageSize = 6;
            int pageIndex = 1;
            if (!string.IsNullOrEmpty(context.Request["pageindex"]))
            {
                pageIndex = Convert.ToInt32(context.Request["pageindex"]);
            }

            int pageTotal = 0;
            int RecodeTotal = 0;
            StringBuilder sb = new StringBuilder();
            List<Model.detail> list = sbll.GetListByPage(str, pageIndex, pageSize, out pageTotal, out RecodeTotal);

            navStr = Maticsoft.DBUtility.PagerHelper.strPage(RecodeTotal, pageSize, pageTotal, pageIndex, "ProblemList.aspx?pageindex=");
            return list;
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}