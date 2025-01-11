import './Footer.css'

export default function Footer() {
  return (
    <>
      <div className="footer footer-bg-color text-white text-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h3>AROUND THE WEB</h3>
            </div>
            <div className="col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
      <p className='bg-dark p-4 mb-0 text-white text-center'>Copyright © Your Website 2021</p>
    
    </>
  )
}
