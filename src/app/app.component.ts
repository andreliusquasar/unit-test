import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'teste-unitario-fast-shop';

  constructor(private clienteService: ClientesService) {
  }


  ngOnInit() {
   this.clienteService.getProduto().subscribe(res => {
     console.log(res);
   });
  }

}
