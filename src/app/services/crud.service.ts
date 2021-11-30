import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

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
    this.ngFirestore
      .collection('users/')
      .doc(user.uid)
      .collection('tasks')
      .snapshotChanges()
      .subscribe((res) => {
        res.map((t) => {
          console.log({
            id: t.payload.doc.id,
            ...(t.payload.doc.data() as TODO),
          });
        });
      });

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
