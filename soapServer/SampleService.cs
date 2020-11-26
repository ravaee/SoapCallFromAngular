using Models;
using soapServer.models;
using System;
using System.Collections.Generic;
using System.Xml.Linq;
public class SampleService : ISampleService
{
  public string Test(string s)
  {
    Console.WriteLine("Test Method Executed!");
    return "Hello this a simple soap request";
  }
  
  public List<Product> TestCustomModel(Customer customer)
  {
    
    Console.WriteLine(customer.Id);
    Console.WriteLine(customer.Name);

    return new List<Product>(){
        new Product(){ Id = 1, Name = "لیوان"},
        new Product(){ Id = 2, Name = "گلدون"},
        new Product(){ Id = 3, Name = "فرش"},
        new Product(){ Id = 4, Name = "کیبورد"}
    };
  }
}