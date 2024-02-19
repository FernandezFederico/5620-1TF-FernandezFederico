import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Student } from "../../../../modules/dashboard/pages/students/interface";

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'set auth student': props<{student: Student}>(),
    'logOut': emptyProps(),
  },
});