import { Component, OnInit, ViewChild } from '@angular/core';
import { ConComponent } from '../con/con.component';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.scss']
})
export class ChaComponent implements OnInit {
  public chaMessage ='';
@ViewChild('thangTeo') thangTeo: ConComponent|undefined;
@ViewChild('thangTi') thangTi: ConComponent|undefined;
  constructor() { }

  ngOnInit(): void {
  }

  public conChao(){
    this.chaMessage = 'Chào con';
  }

  public conGoi(name:string){
    console.log('Đứa nào gọi tao đó bây: ' + name)
    this.chaMessage = 'Chào con ('+ name +')';;
  }

  public choTien(){
    this.thangTeo?.choTien(10);
    this.thangTi?.choTien(24);
  }

}
