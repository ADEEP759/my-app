import * as Yup from "yup";

export const AB_TerminalSchema=Yup.object({
    Frame_No:Yup.string().min(11).max(25).required("*Frame No should have min 11 words"),
    // Country_Code: Yup.string().min(2).max(4).required("*Country Code should have (2-4) words"),
    Engine_No: Yup.string().min(11).max(30).required("*Engine No should have (11-30) words"),
    Remarks: Yup.string().min(1).required("*Please Enter valid Remark O/R/S "),
});
