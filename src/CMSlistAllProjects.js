import React from "react";
// import { Link } from "react-router-dom";

import { useState, useEffect, useRef } from "react";
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db } from "./firebase-config";
import {
    // addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    onSnapshot,
    query,
    where
} from "firebase/firestore";

function CMSlistAllProjects() {

    const [user] = useAuthState(auth);
    const settingsCollectionRef = useRef(collection(db, "projects"));
    // const [title, setElementTitle] = useState("");
    const [settings, setElements] = useState([]);

    const deleteProject = async (id) => {
        const projectDoc = doc(db, "projects", id);
        await deleteDoc(projectDoc);
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
        <div className="">

            <div className="admin-content-container admin-all-projects-container">

                <h1>Alle Projekte</h1>

                <div className="filter-box">

                    <button className="filter">Ausstellung</button>
                    <button className="filter">Shop</button>
                    <button className="filter">Messe</button>
                    <button className="filter">Display</button>
                </div>
                <div id="overview-table" >
                    <table>

                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Kategorie</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {settings
                                .sort((a, b) => a.title < b.title ? -1 : 1)
                                .map((projects) => {
                                    return (
                                        <tr key={projects.id}>
                                            <td>{projects.title}</td>
                                            <td>{projects.category}</td>
                                            <td>
                                                <button onClick={() => { deleteProject(projects.id); }}>
                                                    <span className="material-icons-round">delete</span>
                                                </button>
                                                <button>
                                                    <span className="material-icons-round">update</span>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>

                    </table>
                </div>


            </div>
        </div>
    )
}

export default CMSlistAllProjects;