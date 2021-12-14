import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Meal } from '../shared/meal';

export class TODO {
  $key: string;
  title: string;
  description: string;
  author: string;
  roles: {};
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private ngFirestore: AngularFirestore, private router: Router) {}

  createMeal(meal: Meal) {
    const user = JSON.parse(localStorage.getItem('user'));
    //meal.title = user.uid;
    return this.ngFirestore.collection('users').doc(user.uid).collection('tasks').add(meal);
  }

  // Samples

  create(todo: TODO) {
    const user = JSON.parse(localStorage.getItem('user'));
    todo.author = user.uid;
    todo = {
      ...todo,
      roles: {
        [user.uid]: 'owner',
      },
    };
    return this.ngFirestore.collection('users').doc(user.uid).set(todo);
  }

  getTasks() {
    const user = JSON.parse(localStorage.getItem('user'));

    // usages for subcollections
    return this.ngFirestore
      .collection('users/')
      .doc(user.uid).collection('tasks').snapshotChanges();

    return this.ngFirestore.collection('users').snapshotChanges();

    return this.ngFirestore
      .collection('users/' + user.uid + '/tasks')
      .snapshotChanges();
  }

  getTask(id) {
    return this.ngFirestore.collection('users').doc(id).valueChanges();
  }

  update(id, todo: TODO) {
    this.ngFirestore
      .collection('users')
      .doc(id)
      .update(todo)
      .then(() => {
        this.router.navigate(['/todo-list']);
      })
      .catch((error) => console.log(error));
  }

  delete(id: string) {
    this.ngFirestore.doc('users/' + id).delete();
  }
}
