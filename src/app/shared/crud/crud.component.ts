import {Component, Input, OnInit} from '@angular/core';
import {ProduitModel} from '../produit.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProduitService} from '../../produit/produit.service';
import {ActivatedRoute} from '@angular/router';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  @Input()
  data: any;

  @Input()
  service: CrudService;

  @Input()
  initItem: any;

  crudForm: FormGroup;

  operation = 'add';

  selectedItem: any;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initData();
  }

  createForm() {
    this.crudForm = this.fb.group({});
  }

  loadData() {
    this.service.getAll().subscribe(data => {
      this.data = data;
    }, error => {
      console.log('An error was occured');
    }, () => {
      console.log('loading produits was done');
    });
  }

  add() {
    const p = this.crudForm.value;
    this.initData();
    this.service.add(p).subscribe(res => {this.loadData();
    });
  }

  update() {
    this.service.update(this.selectedItem).subscribe(res => {
      this.initData();
      this.loadData();
    });
  }

  initData() {
    this.selectedItem = this.initItem;
    this.createForm();
  }

  delete() {
    this.service.delete(this.selectedItem.id).subscribe(res => {
      this.selectedItem = this.initItem;
      this.loadData();
    });
  }
}
