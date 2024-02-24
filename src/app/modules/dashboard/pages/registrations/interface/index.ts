import { Course } from "../../courses/interface";
import { Student } from "../../students/interface";

export interface Registrations {
  id: string;
  studentId: string;
  courseId: string;
  student?: Student;
  course?: Course;
  date: Date;
}