import { useEffect } from "react";
export default function experienceView() {

    useEffect(() => {
        document.title = "Experience - My Portfolio";
    }, []);

    return (
        <>
            <div className="info-experience d-flex flex-column align-items-center w-75 m-auto">

                <div className="info-experience-job">
                    <h3>FullStack Developer</h3>
                    <h5>3mt Global Services -Remote</h5>
                    <strong>July 2022 - December 2024</strong>
                    <ul>
                        <li>Salesforce Commerce Cloud management for Guess?</li>
                        <li>Fixes,web redesigns, payments methods implementation,new features...</li>
                        <li> klarna Express implementation that helps the users finish the orders more quicky to avoid lost it </li>
                    </ul>
                    <p><strong>Technologies:</strong> Javascript, Isml, CSS, Node, Git, Jira, Salesforce, Commerce Cloud</p>
                </div>
                <div className="info-experience-job">
                    <h3>FullStack Developer</h3>
                    <h5>Norvento Enerxía - Office</h5>
                    <strong>March 2021 - July 2022</strong>
                    <ul>
                        <li>Angular app migration to React about solar panels and support it with new features,fixes...</li>
                        <li>Management the Api with Node/Nest to connect with react app, and with a app that send solar panels data for show in the app</li>
                        <li>Suppor the apps the best way to try to win more clients, and show them the correct information of their solar panels</li>
                    </ul>
                    <p><strong>Technologies:</strong> React, Typescript, CSS, Node, Git, Jenkins, Docker, Postgres,Nest</p>
                </div>
                <div className="info-experience-job">
                    <h3>FrontEnd Developer</h3>
                    <h5>Grupo Hotusa-Roomleader -Office</h5>
                    <strong>January 2020 - March 2021</strong>
                    <ul>
                        <li>Create, maintain and fix pages for hotels </li>
                        <li>Create newsletters for the client in special events or dates</li>
                        <li>Maintain the webs the best way to try to avoid financial losses when booking hotels</li>
                    </ul>
                    <p><strong>Technologies:</strong> Javascript, Html, CSS, Filezilla</p>
                </div>
                <a href="experience/AlexVazquez_CV.pdf" download="AlexVazquez_CV.pdf" className="btn btn-info mb-4">
                    Descargar CV
                </a>
            </div>
        </>
    )
}