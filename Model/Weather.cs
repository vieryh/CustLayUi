using System;
using System.Collections.Generic;

using System.Web;

namespace Cust.Model
{
    [Serializable]
    public class Weather
    {
        public string Date { get; set; }

        public string Temperature { get; set; }

        public string DescUrl { get; set; }
    }
}