import {Injectable} from '@angular/core';
import {ProduitService} from './produit.service';
import {Resolve} from '@angular/router';

@Injectable()
export class ProduitResolver implements Resolve<any> {

  constructor(private produitService: ProduitService) {
  }

  resolve() {
    return this.produitService.getProduits();
  }
}
