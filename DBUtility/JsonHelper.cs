using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace Cust.DBUtility
{
    public class JsonHelper
    {
        #region Json.Net
        /// <summary>
        /// Json.Net序列化
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="obj"></param>
        /// <returns></returns>
        public static string SerializeByJsonNet<T>(T obj)
          where T : class
        {
            var jsonString = string.Empty;
            if (obj == null)
                return jsonString;

            var oneMyIsoDateTimeConverter = new MyIsoDateTimeConverter();

            jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(obj, oneMyIsoDateTimeConverter);
            return jsonString;
        }

        /// <summary>
        /// Json.Net反序列化
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="jsonString"></param>
        /// <returns></returns>
        public static T DeserializeByJsonNet<T>(string jsonString)
          where T : class
        {
            if (string.IsNullOrEmpty(jsonString))
            {
                return null;
            }
            var obj = JsonConvert.DeserializeObject<T>(jsonString);
            return obj;
        }

        #endregion
        /// <summary>
        /// 定制自己的时间转换器
        /// </summary>
        private class MyIsoDateTimeConverter : IsoDateTimeConverter
        {
            public MyIsoDateTimeConverter()
            {
                DateTimeFormat = "yyyy-MM-dd HH:mm:ss";
            }
        }
    }
}
