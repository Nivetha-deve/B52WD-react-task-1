function Card(props){
    return( <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">{props.details.Place}</h5>
          <h6 class="card-price text-center">{props.details.price}<span class="period">/month</span></h6>
          <hr></hr>
          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.details.Users}</li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.details.Storage}</li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.details.Projects}</li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.details.Access}</li>
            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.details.Projects1}
            </li>
            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.details.support}
            </li>
            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.details.domain}
            </li>
            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.details.reports}
            </li>
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">Button</a> 
          </div>
        </div>
        </div>
        </div>
  )};
  export default Card;