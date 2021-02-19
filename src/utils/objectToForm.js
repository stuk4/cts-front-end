

export const objectToForm = (job) => {

    // const job_benefits = job.job_benefit.map( id => ({id}))

   
    const job_benefits = job.job_benefits.map( benefit => benefit.id)
   
    const uri1 = typeof job.application_info.uris[0] === "object" ? true :false
    const uri2  = typeof job.application_info.uris[1] === "object" ? true : false
    const json = {
        id: job.id,
        title: job.title,
        department: job.department,
        employment_type: job.employment_type,
        direction1: job.addresses[0].direction,
        direction2: job.addresses[1].direction,
        description: job.description,
        email_contact1: job.application_info.emails[0].email_contact,
        email_contact2:job.application_info.emails[1].email_contact,
        url_contact1: job.application_info.uris.length>0 && uri1 ? job.application_info.uris[0].uri_contact : '' ,
        url_contact2: job.application_info.uris.length>0 && uri2 ? job.application_info.uris[1].uri_contact : '',
        instruction: job.application_info.instruction,
        posting_expire: job.posting_expire,
        type_compensation: job.compensation_info.type_compensation,
        unit_compensation: job.compensation_info.unit_compensation,
        max_range_amount: job.compensation_info.max_range_amount,
        min_range_amount: job.compensation_info.min_range_amount,
        degree_type: job.degree_type,
        job_level: job.job_level,
        qualifications: job.qualifications,
        promotion_value: job.promotion_value,
        job_benefit:job_benefits,
        posting_region: job.posting_region,
        incentives: job.incentives,
        responsabilities: job.responsibilities
        }
  
    return json
}
