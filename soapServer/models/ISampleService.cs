using System.Collections.Generic;
using System.ServiceModel;
using soapServer.models;

namespace Models
{
   [ServiceContract]
   public interface ISampleService
   {
      [OperationContract]
      string Test(string s);

      [OperationContract]
      List<Product> TestCustomModel(Customer customer);
  }
}