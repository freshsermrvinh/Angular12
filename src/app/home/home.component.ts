import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Huy Nguyễn';
  public age = 15;
  public traicay = ['Táo','Nho','Cam','Quýt'];
  public traicay2 = [
    {ten:'Táo',gia:12000,hagia:true},
    {ten:'Nho',gia:3000,hagia:false},
    {ten:'Cam',gia:-30000,hagia:true}
  ];
  public districts: string[] = ['Quận Huyện'];
  public vietnamData = [   
      { city: 'Chọn thành phố', district: ['Quận Huyện'] },
      {
        city: 'An Giang',
        district: [
          'Thành phố Long Xuyên',
          'Thành phố Châu Đốc',
          'Thị xã Tân Châu',
          'Huyện An Phú',
          'Huyện Châu Phú',
          'Huyện Châu Thành',
          'Huyện Chợ Mới',
          'Huyện Phú Tân',
          'Huyện Thoại Sơn',
          'Huyện Tịnh Biên',
          'Huyện Tri Tôn',
        ],
      },
      {
        city: 'Bà Rịa - Vũng Tàu',
        district: [
          'Thành phố Vũng Tàu',
          'Thị xã Bà Rịa',
          'Thị xã Phú Mỹ',
          'Huyện Châu Đức',
          'Huyện Côn Đảo',
          'Huyện Đất Đỏ',
          'Huyện Long Điền',
          'Huyện Tân Thành',
          'Huyện Xuyên Mộc',
        ],
      },
      {
        city: 'Bạc Liêu',
        district: [
          'Thành phố Bạc Liêu',
          'Huyện Đông Hải',
          'Huyện Giá Rai',
          'Huyện Hòa Bình',
          'Huyện Hồng Dân',
          'Huyện Phước Long',
          'Huyện Vĩnh Lợi',
        ],
      },
      {
        city: 'Bắc Kạn',
        district: [
          'Thị xã Bắc Kạn',
          'Huyện Ba Bể',
          'Huyện Bạch Thông',
          'Huyện Chợ Đồn',
          'Huyện Chợ Mới',
          'Huyện Na Rì',
          'Huyện Ngân Sơn',
          'Huyện Pác Nặm',
        ],
    },
  ];

  public counter = 0;
  public counterBinhPhuong = 0;

  constructor(private common : CommonService) { }

  ngOnInit(): void {
    console.log('cities = ',this.vietnamData)
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }

  public changeCity(event: any): void {
    const city = event.target.value;
    console.log('event = ',city)
    if (!city) {
      return;
    }

    // cách 1
    const search = this.vietnamData.filter((data) => data.city === city.trim());
    console.log('search', search);
    if (search && search.length > 0) {
      this.districts = search[0].district;
    }

    // cách 2
    // this.districts =
    //   this.vietnamData.find((data) => data.city === city)?.district || [];
  }

}
