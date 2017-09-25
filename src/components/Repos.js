import React from 'react';

const Repos = (props) => {
 return (
  <div className="card">
      <div className="card-header">
        Repos
      </div>
        <div className="card-body">
            <ul className="list-group">
            {props.repos.map((item,index) => {
              return (
                <div>
               <div className="row">
               <div className="col-md-9">
                <h4><a href={item.html_url} target="_blank">{item.name}</a></h4>
                <p>{item.description}</p>
                <h5 className="badge badge-pill badge-success"> <i className="fa fa-star" aria-hidden="true"></i>  {item.stargazers_count} </h5>
               </div>
               <div className="col-md-3">
                <span className="badge badge-pill badge-info">{item.watchers} Watchers</span>
                <span className="badge badge-pill badge-primary">{item.forks} Forks</span>
               </div>
              </div>
             <hr />
             </div>
             )
            })}
            </ul>
           </div>
          </div>
  )
}

export default Repos;
