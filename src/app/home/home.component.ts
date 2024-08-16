import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  items: any

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getInformation();
  }

  async getInformation() {
    await this.dataService.getData().subscribe(data => {
      this.items = data;
      console.log("this>>", this.items);
    });
  }

}
