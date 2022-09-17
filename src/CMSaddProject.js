import React from "react";

import { useState, /* useEffect, */ useRef } from "react";
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db } from "./firebase-config";
import {
    addDoc,
    collection,
    // getDocs,
    // onSnapshot,
    // query,
    // where
} from "firebase/firestore";

function CMSaddProject() {

    const [user] = useAuthState(auth);
    const settingsCollectionRef = useRef(collection(db, "projects"));
    const [title, setProjectTitle] = useState("");
    const [category, setProjectCategory] = useState("");
    // const [settings, setElements] = useState([]);

    const addProject = async (e) => {
        e.preventDefault();
        await addDoc(settingsCollectionRef.current, {
            // unit: unit,
            category: category,
            title: title,
            uid: user.uid
        });
        setProjectTitle("");
        setProjectCategory("");
    };

    // useEffect(() => {
    //     const q = query(settingsCollectionRef.current, where("uid", "==", user.uid));
    //     const handleSnapshot = (snapshot) => {
    //         setElements(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    //     };
    //     getDocs(q).then(handleSnapshot);
    //     console.log("useEffect ok");
    //     return onSnapshot(q, settingsCollectionRef.current, handleSnapshot)
    // }, [user.uid, settingsCollectionRef]);


    return (

        <div className="admin-add-project">

            <h1>Projekt hinzufügen</h1>

            <textarea
                className="admin-content-input"
                placeholder="Titel"
                value={title}
                onChange={(event) => {
                    setProjectTitle(event.target.value);
                }}
            ></textarea>

            <textarea
                className="admin-content-input"
                placeholder="als nächstes: 
                - media queries
                - Projekte bearbeiten Funktion (open in modal oder eigene Seite)
                - Projekte auf der Website zeigen 8erst als Liste dann als Detailseite mit eigener url) 
                - url als inputfeld hinzufügen
                "
            ></textarea>

            <input
                className="admin-content-input"
                placeholder="Kategorie"
                value={category}
                onChange={(event) => {
                    setProjectCategory(event.target.value);
                }}
            ></input>


            <div >
                <button
                    className="admin-add-btn"
                    onClick={addProject}
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