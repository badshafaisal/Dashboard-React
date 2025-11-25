function AddUser() {
  return (
    <div className="main-content">
      <div class="col-12 col-md-6 col-lg-6">
        <div className="card">
          <div className="card-header">
            <h4>HTML5 Form Basic</h4>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label>Text</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label>Text</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label>Text</label>
              <input type="text" className="form-control" />
            </div>

            
          </div>
          <div className="card-footer text-right">
            <button className="btn btn-primary mr-1" type="submit">
              Submit
            </button>
            <button className="btn btn-secondary" type="reset">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
