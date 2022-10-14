import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/api/app/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  items: any[];

  constructor(private itemService: ItemsService) {
    this.items = []
  }

  ngOnInit() {
    this.getItems();
  }

  // Chama o serviço para obter todos os itens
  getItems() {
    this.itemService.getItems().subscribe((Response: any) => {
      this.items = Response;
    });

  }
}
