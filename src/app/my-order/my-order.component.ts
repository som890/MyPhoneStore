import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_service/product.service';
import { MyOrderDetails } from '../_model/my-order.model';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit{

  displayedColumns: string[] = ['Name', 'Address', 'Contact number', 'Amount','Status'];
  myOrderDetails: MyOrderDetails[] = [];

  constructor(private productSercie: ProductService) {}

  ngOnInit(): void {
    this.getOrderDetails();
  }

  public getOrderDetails() {
    this.productSercie.getOrderDetails().subscribe(
      (response: MyOrderDetails[]) => {
        console.log(response);
        this.myOrderDetails = response;
      }, (error) => {
        console.log(error)
      }
    )
  }
}
