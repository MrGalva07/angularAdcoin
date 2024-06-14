import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../crypto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Corrigido para ser um array
})
export class HomeComponent implements OnInit {
  coins!: any[];
  
  canshow:boolean = true


  constructor(private cryptoService: CryptoService){}
ngOnInit(): void {
  this.cryptoService.getTopCoins().subscribe(response => {
    this.coins = response.data;
    console.log(this.coins)
  });
}

pesquisar(){
  this.canshow = false
}

}
