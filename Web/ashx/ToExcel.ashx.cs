using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using Cust.DBUtility;
using Maticsoft.DBUtility;

namespace Cust.Web.ashx
{
    /// <summary>
    /// ToExcel 的摘要说明
    /// </summary>
    public class ToExcel : IHttpHandler
    {
        BLL.detailBll bll = new BLL.detailBll();
        public void ProcessRequest(HttpContext context)
        {
            DataSet table = bll.GetList("");
            ExcelHelper.ExportDataSetToExcel(table, "故障报表" + DateTime.Now.ToString("yyyyMMddHHmmss"), "故障统计表", "0");
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