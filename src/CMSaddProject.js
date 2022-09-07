import React from "react";

import { useState, useEffect, useRef } from "react";
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db } from "./firebase-config";
import {
    addDoc,
    collection,
    getDocs,
    onSnapshot,
    query,
    where
} from "firebase/firestore";

function CMSaddProject() {

    const [user] = useAuthState(auth);
    const settingsCollectionRef = useRef(collection(db, "projects"));
    const [title, setElementTitle] = useState("");
    const [settings, setElements] = useState([]);

    const addElement = async (e) => {
        e.preventDefault();
        await addDoc(settingsCollectionRef.current, {
            // unit: unit,
            // dose: dose,
            title: title,
            uid: user.uid
        });
        setElementTitle("");
    };

    useEffect(() => {
        const q = query(settingsCollectionRef.current, where("uid", "==", user.uid));
        const handleSnapshot = (snapshot) => {
            setElements(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        getDocs(q).then(handleSnapshot);
        console.log("useEffect ok");
        return onSnapshot(q, settingsCollectionRef.current, handleSnapshot)
    }, [user.uid, settingsCollectionRef]);


    return (

        <div className="admin-add-project">

            <h1>Projekt hinzufügen</h1>

            <textarea
                className="admin-content-input"
                placeholder="Titel"
                value={title}
                onChange={(event) => {
                    setElementTitle(event.target.value);
                }}
            ></textarea>

            <textarea
                className="admin-content-input"
                placeholder="als nächstes: 
                - Footer Farbe (wie Header?)
                - vll ein CMS Dashboard als Startseite (> Inhalte? Buttons oder Mini-Vorschau für Komponenten)
                - media queries"
            ></textarea>

            <textarea
                className="admin-content-input"
                placeholder="Text 2"
            ></textarea>


            <div >
                <button
                    className="admin-add-btn"
                    onClick={addElement}
                >
                    <span className="material-icons-round">
                        add_circle
                    </span>
                </button>
            </div>

        </div>


    )
}

export default CMSaddProject;