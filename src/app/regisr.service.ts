import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisrService {
  constructor(public _Http :HttpClient) { }
  savedata(data)
   {
    return this._Http.post('http://localhost:8080/foodDelivery/Registration',data);
   }
logi(data1)
{
  return this._Http.post('http://localhost:8080/foodDelivery/Login',data1);
}
addpiza(data2)
{
  return this._Http.post('http://localhost:8080/foodDelivery/AddPizzaServlet',data2);
}
viewpizza()
{
  return this._Http.get('http://localhost:8080/foodDelivery/ViewPizzaServlet');
}
delete(x)
{
  return this._Http.post('http://localhost:8080/foodDelivery/DeletePizzaServlet',x);
}

updatepizza(y)
{
  return this._Http.post('http://localhost:8080/foodDelivery/UpdatePizzaServlet',y); 
}
  
}
