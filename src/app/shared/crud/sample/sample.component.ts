import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from '../../crud.service';
import {DataModel} from '../../data.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

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
    this.createForm();
  }

  ngOnInit() {
    this.initData();
  }

  createForm() {
    this.initForm ? this.crudForm = this.initForm : this.crudForm = this.fb.group({});
  }

  loadData() {
    this.service.getAll().subscribe(data => {
      this.data = data;
    }, error => {
      console.log('An error was occured.');
    }, () => {
      console.log('load data was done.');
    });
  }

  add() {
    const p = this.crudForm.value
    this.service.add(p).subscribe(res => {this.loadData();
    });
    this.initData();
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
