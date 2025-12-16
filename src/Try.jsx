import { useEffect, useState } from "react";
import axios from "axios";


export function Try(){

    const [courses, setCourses] = useState([{title:'', duration:'', faculty:'', image:''}])

    useEffect(()=>{

        axios.get('courses.json')
        .then(response=>{
            setCourses(response.data);
        })
       
    },[])


    return(
        <div className="container-fluid">
            <main className="d-flex flex-wrap mt-4">
                {
                    courses.map((course,index)=>
                        <div key={index} className="card m-2 p-2">
                            <img src={course.image} className="card-img-top" height="120" />
                            <div className="card-header">
                                <div className="fw-bold">{course.title}</div>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Faculty</dt>
                                    <dd>{course.faculty}</dd>
                                    <dt>Duration</dt>
                                    <dd>{course.duration}</dd>
                                </dl>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary w-100">Join Course</button>
                            </div>
                        </div>
                    )
                }
            </main>
        </div>
    )
}