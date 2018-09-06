import {ProduitModel} from '../shared/produit.model';
import {Injectable} from '@angular/core';

@Injectable()
export class ProduitMockService {

  private PRODUITS: ProduitModel[] = [];

  constructor(){
    let p1: ProduitModel = new ProduitModel( 1, 'Livre', 50, 20);
    let p2: ProduitModel = new ProduitModel( 2, 'Stylo', 500, 5);
    let p3: ProduitModel = new ProduitModel(3,'Cahier', 35, 10);
    let p4: ProduitModel = new ProduitModel(4,'Gomme', 40, 3);
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
    this.PRODUITS.push(p4);
  }

  public getProduits(): ProduitModel[]{
    return this.PRODUITS;
  }
}
