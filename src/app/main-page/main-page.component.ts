import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  goBack(){}
  openMenu(){}

  rooms = [

    { id: 1, name: 'Drawing Room', description: 'Description for Room 1',temp: "26°C",fan_speed:"4", light_time: "60%", imageUrl:"https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"},
    { id: 2, name: 'Kitchen', description: 'Description for Room 2',  temp: "26°C",fan_speed:"3", light_time: "70%", imageUrl: "https://blog.urbancompany.com/wp-content/uploads/2018/06/U-Shaped-Kitchen-With-Dark-Walnut-Wooden-Cabinets-prashant-chauhan-768x513-1.jpg"},
    { id: 3, name: 'Master Bedroom', description: 'Description for Room 2',  temp: "27°C",fan_speed:"3", light_time: "100%", imageUrl: "https://www.tangophotographie.com/wp-content/uploads/2018/03/deco-photographer-bedroom-decor-tango-photography.jpg"},
    { id: 4, name: 'Living Room', description: 'Description for Room 2',  temp: "28°C",fan_speed:"4", light_time: "60%", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uRYoE_Xsz25XBL12fMSQwHnsg07DCZ-14A&usqp=CAU"},
    { id: 5, name: 'Kids Room', description: 'Description for Room 2',  temp: "26°C",fan_speed:"3", light_time: "70%", imageUrl: "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2017/08/27163150/BlogCover-2-1.jpg"},
    { id: 6, name: 'Study Room', description: 'Description for Room 2',  temp: "22°C",fan_speed:"4", light_time: "80%", imageUrl: "https://foyr.com/learn/wp-content/uploads/2019/02/study-room-design-ideas-laminate-flooring-for-modern.jpg"},
    { id: 7, name: 'GYM', description: 'Description for Room gym',  temp: "18°C",fan_speed:"5", light_time: "90%", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPI0WTB31Pzd_J7fwLp7tXLoInOize-0ueEQ&usqp=CAU"},
   
  ];

  constructor(private router: Router) {}

  navigateToRoomPage(roomId: number): void {
    this.router.navigate(['/room', roomId]);
  }
}


