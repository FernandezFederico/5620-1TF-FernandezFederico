import { Course } from "../../courses/interface";
import { Student } from "../../students/interface";


export interface Registration {
  id: string;
  studentId: string;
  courseId: string;
  student?: Student;
  course?: Course;
}

export interface CreateRegistrationsData {
  studentId: string | number | null;
  courseId: string | number | null;
}