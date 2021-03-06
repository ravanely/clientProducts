import {Produit} from '../shared/produit.model';
import {Injectable} from '@angular/core';

@Injectable()
export class ProduitMockService {

  private PRODUITS: Produit[] = [];

  constructor(){
    let p1: Produit = new Produit( 1, 'Livre', 50, 20);
    let p2: Produit = new Produit( 2, 'Stylo', 500, 5);
    let p3: Produit = new Produit(3, 'Cahier', 35, 10);
    let p4: Produit = new Produit(4, 'Gomme', 40, 3);
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
    this.PRODUITS.push(p4);
  }

  public getProduits(): Produit[]{
    return this.PRODUITS;
  }
}
