

export const objectToJson = (job) => {

    const job_benefits = job.job_benefit.map( id => ({id}))

    const validateUris = () => {
      
        if(job.url_contact1.length >0 && job.url_contact2.length >0 ){
            return [
                {uri_contact:job.url_contact1},
                {uri_contact:job.url_contact2}
            ]
        }else if(job.url_contact1.length >0){
            return [
                {uri_contact:job.url_contact1}
            ]
        }else if (job.url_contact2.length >0){
            return [
                {uri_contact:job.url_contact2}
            ]
        }else{
            console.log("Por aqUi pase")
            return []
        }
     
    }


    const json = {
        title: job.title,
        description: job.description,
        addresses:[
            {direction: job.direction1},
            {direction: job.direction2}
        ],
        application_info:{
               emails:[
                   {email_contact: job.email_contact1},
                   {email_contact:job.email_contact2}
               ],
               instruction: job.instruction,
               uris:
                    validateUris()
        },
        job_benefits:
            job_benefits 
        ,
        compensation_info:{
            type_compensation: job.type_compensation,
            unit_compensation: job.unit_compensation,
            max_range_amount: job.max_range_amount,
            min_range_amount: job.min_range_amount
        },
        degree_type: job.degree_type,
        department:  job.department,
        employment_type: job.employment_type,
        incentives: job.incentives,
        job_level: job.job_level,
        promotion_value: job.promotion_value,
        qualifications: job.qualifications,
        responsibilities: job.responsabilities,
        posting_region: job.posting_region,
        posting_expire: job.posting_expire
        }
    console.log(json)
    return json
}
