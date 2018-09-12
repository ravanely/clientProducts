import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProduitService} from '../../produit/produit.service';
import {ActivatedRoute} from '@angular/router';
import {CrudService} from '../crud.service';
import {DataModel} from '../data.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  crudType = 'sample';

  @Input()
  data: any;

  @Input()
  service: CrudService;

  @Input()
  title: string;

  @Input()
  initItem: any;

  @Input()
  dataModelList: DataModel[];

  @Input()
  initForm: FormGroup;

  crudForm: FormGroup;

  operation = 'add';

  selectedItem: any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }
}
