
export default function Contact() {
  return (
    <>
    <h2 className="text-center mt-2 text-uppercase fs-1 fw-bold">Contact US</h2>
      <div className="container">
        <div className="row my-3">
          <div className="col-md-12 d-flex justify-content-center">
          <form style={{ width: "26rem" }}>
  {/* Name input */}
  <div data-mdb-input-init="" className="form-outline mb-4">
    <input type="text" id="form4Example1" className="form-control" />
    <label className="form-label" htmlFor="form4Example1" placeholder="Name">
      User Name
    </label>
  </div>
  {/* Email input */}
  <div data-mdb-input-init="" className="form-outline mb-4">
    <input type="email" id="form4Example2" className="form-control" />
    <label className="form-label" htmlFor="form4Example2">
      User Age
    </label>
  </div>
  <div data-mdb-input-init="" className="form-outline mb-4">
    <input type="email" id="form4Example2" className="form-control" />
    <label className="form-label" htmlFor="form4Example2">
      UserEmail
    </label>
  </div>
  {/* Message input */}
  <div data-mdb-input-init="" className="form-outline mb-4">
    <textarea
      className="form-control"
      id="form4Example3"
      rows={4}
      defaultValue={""}
    />
    <label className="form-label" htmlFor="form4Example3">
      Message
    </label>
  </div>
  {/* Submit button */}
  <button
    data-mdb-ripple-init=""
    type="button"
    className="btn btn-primary btn-block mb-4"
  >
    Send Message
  </button>
</form>
          </div>
        </div>
      </div>
    
    </>
  )
}
