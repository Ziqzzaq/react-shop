import firebase from 'firebase';

export type DocumentRefFunction<U, A> = (
    arg0: U,
    arg1?: A
) => Promise<firebase.firestore.DocumentReference | undefined>;

export type DocumentFirebaseRef = firebase.firestore.DocumentReference | undefined;
