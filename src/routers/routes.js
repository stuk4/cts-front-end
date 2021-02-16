import { JobList } from "../views/admin/JobList";
import { ManageJob } from "../views/admin/ManageJob";
import { faSuitcase, faThList } from '@fortawesome/free-solid-svg-icons';
const adminRoutes = [
    {
        path:'/jobs',
        name:'Trabajos',
        icon:faThList,
        component:JobList,
        layout:'/admin'
    },
    {
        path:'/manage_job',
        name:"Administrar trabajo",
        icon:faSuitcase,
        component:ManageJob,
        layout:'/admin',
    }
]
export default adminRoutes;