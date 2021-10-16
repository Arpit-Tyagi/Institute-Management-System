import axios from 'axios';

const STUDENT_API_BASE_URL = 'http://localhost:8080/students';
const ADMIN_API_BASE_URL = 'http://localhost:8080/admin';

class ApiService {

    getCourseByName(name){
        return axios.get(""+STUDENT_API_BASE_URL+"/course/"+name);
    }

    addUser(student) {
        return axios.post(""+STUDENT_API_BASE_URL, student);
    }
    registerStudent(student, course) {
        return axios.post(""+STUDENT_API_BASE_URL+"/"+course, student);
    }

    studentlogin(student){
        return axios.post(""+STUDENT_API_BASE_URL+"/signin", student);
    }
    adminlogin(admin){
        return axios.post(""+ADMIN_API_BASE_URL, admin);
    }

    adminCourseList(){
        return axios.get(""+ADMIN_API_BASE_URL+"/list");
    }
    adminStudentById(stdId){
        return axios.get(""+STUDENT_API_BASE_URL+"/byId/"+stdId);  
    }

    adminStudentListByCourse(name){
        return axios.get(""+STUDENT_API_BASE_URL+"/"+ name);
    }

    adminFacultyByCourse(name){
        return axios.get(""+ADMIN_API_BASE_URL+"/getFacultyListByCourse/"+name);
    }

    adminFacultyById(id){

        return axios.get(""+ADMIN_API_BASE_URL+"/getFacultyById/"+id);
    }

    adminEditFaculty(faculty){
        return axios.post(""+ADMIN_API_BASE_URL+"/updateFaculty", faculty);
   
    }
    adminModuleList(){
        return axios.get(""+ADMIN_API_BASE_URL+"/moduleList")
    }
    adminGetModuleByCourse(name){
        return axios.get(""+ADMIN_API_BASE_URL+"/moduleListByCourse/"+name);
    }
    adminAddFaculty(faculty, module){
        return axios.post(""+ADMIN_API_BASE_URL+"/addFaculty/"+module, faculty);
    }

    adminGetAnnoumcementList(couname){
        return axios.get(""+ADMIN_API_BASE_URL+"/getAnnou/"+couname);
    }
    adminDeleteAnnoumcement(id){
        return axios.delete(""+ADMIN_API_BASE_URL+"/anncDelete/"+id);
    }
    adminAddannounmcement(announ, name){
        return axios.post(""+ADMIN_API_BASE_URL+"/addAnnouncement/"+name, announ);
    }

    adminGetClassLinkList(couname){
        return axios.get(""+ADMIN_API_BASE_URL+"/getClassLink/"+couname);
    }

    adminAddClassLink(link, name){
        return axios.post(""+ADMIN_API_BASE_URL+"/addClassLink/"+name, link);
    }
    adminDeleteClassLink(id){
        return axios.delete(""+ADMIN_API_BASE_URL+"/linkDelete/"+id);
    }

    adminGetNotice(name){
        return axios.get(""+ADMIN_API_BASE_URL+"/getAnnou/"+name);
    }

    adminAddMarks(marks, modName, stdId){
        return axios.post(""+ADMIN_API_BASE_URL+"/editMarks/"+modName+"/"+stdId, marks);
    }

    adminGetMarks(stdId){
        return axios.get(""+ADMIN_API_BASE_URL+"/getMarks/"+stdId);
    }
}

export default new ApiService();