import { useNavigate } from "react-router-dom";
import perfilImage from "../assets/perfilImage.jpg";
import { useEffect } from "react";

export default function HomeView() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Home - My Portfolio";
      }, []);
    return (
        <>
           <div className="photo-info d-flex  align-items-center flex-column w-50 m-auto">
                <img className='photo-profile' src={perfilImage} height={400} width={230}/>
                <div className="info-resume mt-2 text-center">
                    <h3>Hi! My name is Alex.</h3>
                    <h5>I'm a web developer passionate about creating innovative digital experiences. 
                        Specializing in React, JavaScript, and Node, .If you want know more
                        about me,explore my skills and my work experience</h5>
                </div>
                <div className="info-resume-buttons gap-4 d-flex mb-4">
                <button onClick={()=>{navigate('/skills')}} type="button" className="btn btn-info">Skills</button>
                <button onClick={()=>{navigate('/experience')}} type="button" className="btn btn-primary">Experience</button>
                <button onClick={()=>{window.open("https://github.com/vazperale", "_blank");}} type="button" className="btn btn-secondary">Proyects</button>
                </div>
           </div>
        </>
    )
}