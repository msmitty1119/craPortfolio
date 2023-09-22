const ProfessionalExperience = () => {
    return ( 
        <div style= {{textAlign:"left"}}>
            <h2 id="professionalExperience">Professional Experience</h2>
    <br></br>
    <em>ABC Inc. (2005 to Present) / DEF Inc. (2004-2008) -- Sometown,GA</em><br></br>
    <em>ABC is a global financial services firm that acquired DEF in 2008.</em><br></br>

    <table>
        <thead>
          <tr>
            <th class="table1Header">Role</th>
            <th class="table1Header">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Director of Software Development</td>
            <td>2010 to Present</td>
          </tr>
          <tr>
            <td>Senior Software Developer</td>
            <td>2008-2010</td>
          </tr>
          <tr>
            <td>Software Developer / Tester</td>
            <td>2004 to 2008</td>
          </tr>
          <tr>
            <td colspan="2">Advanced through several promotions, culminatiing in present director-level role overseeing firm's software development activities. Manage a $4.5M R&D budget and cradel-to-grave oversight of software project management, leading the research, design, development,documentation,testing and rollout of enterprise applications.</td>
          </tr>
        </tbody>
      </table>
        </div>
     );
}
 
export default ProfessionalExperience;