import { Component, OnInit } from '@angular/core';
import {ProduitModel} from '../shared/produit.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProduitService} from './produit.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit
  constructor(private produitService: ProduitService,
              private fb: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.initProduit();
    this.produits = this.route.snapshot.data.produits;
  }
/*
  produitForm: FormGroup;

  produits: ProduitModel[];

  operation = 'add';

  selectedProduit: ProduitModel;

  constructor(private produitService: ProduitService,
              private fb: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
    this.initProduit();
    this.produits = this.route.snapshot.data.produits;
  }

  createForm() {
    this.produitForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''
    });
  }

  loadProduits() {
    this.produitService.getAll().subscribe(data => {
      this.produits = data;
      }, error => {
      console.log('An error was occured');
      }, () => {
      console.log('loading produits was done');
    });
  }

  add() {
    const p = this.produitForm.value;
    this.initProduit();
    this.produitService.add(p).subscribe(res => {this.loadProduits();
    });
  }

  update() {
    this.produitService.update(this.selectedProduit).subscribe(res => {
      this.initProduit();
      this.loadProduits();
    });
  }

  initProduit() {
    this.selectedProduit = new ProduitModel();
    this.createForm();
  }

  delete() {
    this.produitService.delete(this.selectedProduit.id).subscribe(res => {
      this.selectedProduit = new ProduitModel();
      this.loadProduits();
    });
  }*/
}
