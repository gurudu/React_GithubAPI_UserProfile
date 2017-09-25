import React from 'react';


const UserInfo = (props) => {
  const info = props.info;
  console.log(info.name);
  return (
    <div className="row">
     <div className="col-md-11 col-md-offset-2">
       <div className="card card-1">
            <div className="card-header">
            {info.login}
            </div>
           <div className="card-body">
             <div className="row">
                  <div className="col-md-4">
                   <img className="img-thumbnail" src={info.avatar_url} alt={info.login}/>
                  </div>
                  <div className="col-md-8">
                   <div className= "row wid">
                    <h6 ><span className="badge badge-pill badge-primary">{info.public_repos} Public repos</span> </h6>
                    <h6> <span className="badge badge-pill badge-secondary">{info.public_gists} Public Gists</span> </h6>
                    <h6><span className="badge badge-pill badge-success">{info.followers} Followers</span> </h6>
                    <h6> <span className="badge badge-pill badge-info">{info.following} Following</span> </h6>
                    </div>
                    <ul className="list-group ">
                     <li className="list-group-item"><strong>Username: </strong>{info.name}</li>
                     <li className="list-group-item"><strong>Location: </strong>{info.location}</li>
                     <li className="list-group-item"><strong>Email: </strong>{info.email}</li>
                     <li className="list-group-item"><strong>Blog: </strong>{info.blog}</li>
                    </ul>
                   </div>
              </div>
            </div>
        </div>
       </div>

      </div>
    )

}

export default UserInfo;
