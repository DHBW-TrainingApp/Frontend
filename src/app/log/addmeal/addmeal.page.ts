import { Component, OnInit } from '@angular/core';
import { jsonEval } from '@firebase/util';

import { CrudService } from './../../services/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

export interface FILE {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-addmeal',
  templateUrl: './addmeal.page.html',
  styleUrls: ['./addmeal.page.scss'],
})
export class AddmealPage implements OnInit {
  mealForm: FormGroup;

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage,
    private crudService: CrudService,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.isImgUploading = false;
    this.isImgUploaded = false;

    this.ngFirestoreCollection =
      angularFirestore.collection<FILE>('filesCollection');
    this.files = this.ngFirestoreCollection.valueChanges();
  }

  ngOnInit() {
    this.mealForm = this.formBuilder.group({
      date: new Date().toISOString(),
      type: 'meal',
      title: [''],
      energy: [''],
      carbs: [''],
      fat: [''],
      satFat: [''],
      sugar: [''],
      protein: [''],
      img: 'none',
    });
  }

  onSubmit() {
    console.log(this.mealForm.value);

    if (!this.mealForm.valid) {
      window.alert('Input all fields');
      return false;
    } else {
      this.crudService
        .createMeal(this.mealForm.value)
        .then(() => {
          this.mealForm.reset();
          this.router.navigate(['/tabs/tab1']);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  ngFireUploadTask: AngularFireUploadTask;

  progressNum: Observable<number>;

  progressSnapshot: Observable<any>;

  fileUploadedPath: Observable<string>;

  files: Observable<FILE[]>;

  FileName: string;
  FileSize: number;

  isImgUploading: boolean;
  isImgUploaded: boolean;

  private ngFirestoreCollection: AngularFirestoreCollection<FILE>;

  fileUpload(event: FileList) {
    const file = event.item(0);

    if (file.type.split('/')[0] !== 'image') {
      console.log('File type is not supported!');
      return;
    }

    this.isImgUploading = true;
    this.isImgUploaded = false;

    this.FileName = file.name;

    const fileStoragePath = `filesStorage/${new Date().getTime()}_${file.name}`;

    const imageRef = this.angularFireStorage.ref(fileStoragePath);

    this.ngFireUploadTask = this.angularFireStorage.upload(
      fileStoragePath,
      file
    );

    this.progressNum = this.ngFireUploadTask.percentageChanges();
    this.progressSnapshot = this.ngFireUploadTask.snapshotChanges().pipe(
      finalize(() => {
        this.fileUploadedPath = imageRef.getDownloadURL();

        this.fileUploadedPath.subscribe(
          (resp) => {
            this.fileStorage({
              name: file.name,
              filepath: resp,
              size: this.FileSize,
            });
            this.isImgUploading = false;
            this.isImgUploaded = true;
          },
          (error) => {
            console.log(error);
          }
        );
      }),
      tap((snap) => {
        this.FileSize = snap.totalBytes;
      })
    );
  }

  fileStorage(image: FILE) {
    const ImgId = this.angularFirestore.createId();

    this.ngFirestoreCollection
      .doc(ImgId)
      .set(image)
      .then((data) => {
        console.log(ImgId);
        this.mealForm.value.img = ImgId;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
