import React from "react";

class HatsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fabric: "",
      styleName: "",
      color: "",
      pictureUrl: "",
      location: "",
      locations: [],
    };
    this.handleFabricChange = this.handleFabricChange.bind(this);
    this.handleStyleChange = this.handleStyleChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handlePictureChange = this.handlePictureChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    // data.style_name = data.styleName;
    // data.picture_url = data.pictureUrl;
    // delete data.styleName;
    // delete data.pictureUrl;
    delete data.locations;
    console.log(data);

    const hatsUrl = "http://localhost:8090/api/hats/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(hatsUrl, fetchConfig);
    if (response.ok) {
      const newHat = await response.json();
      console.log(newHat);

      const cleared = {
        fabric: "",
        styleName: "",
        color: "",
        pictureUrl: "",
        location: "",
      };
      this.setState(cleared);
    }
  }

  handleFabricChange(event) {
    const value = event.target.value;
    this.setState({ fabric: value });
  }

  handleStyleChange(event) {
    const value = event.target.value;
    this.setState({ styleName: value });
  }

  handleColorChange(event) {
    const value = event.target.value;
    this.setState({ color: value });
  }

  handlePictureChange(event) {
    const value = event.target.value;
    this.setState({ pictureUrl: value });
  }

  handleLocationChange(event) {
    const value = event.target.value;
    this.setState({ locations: value });
  }

  async componentDidMount() {
    const url = "http://localhost:8100/api/locations/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({ locations: data.locations });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new Hat</h1>
            <form onSubmit={this.handleSubmit} id="create-location-form">
              <div className="form-floating mb-3">
                <input
                  value={this.state.fabric}
                  onChange={this.handleFabricChange}
                  placeholder="Fabric"
                  required
                  type="text"
                  name="fabric"
                  id="fabric"
                  className="form-control"
                />
                <label htmlFor="fabric">Fabric</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.styleName}
                  onChange={this.handleStyleChange}
                  placeholder="Style"
                  required
                  type="text"
                  name="style"
                  id="style"
                  className="form-control"
                />
                <label htmlFor="style">Style</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.color}
                  onChange={this.handleColorChange}
                  placeholder="Color"
                  required
                  type="text"
                  name="color"
                  id="color"
                  className="form-control"
                />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.pictureUrl}
                  onChange={this.handlePictureChange}
                  placeholder="Picture"
                  required
                  type="text"
                  name="picture"
                  id="picture"
                  className="form-control"
                />
                <label htmlFor="picture">Picture</label>
              </div>
              <div className="mb-3">
                <select
                  value={this.state.location}
                  onChange={this.handleLocationChange}
                  required
                  name="location"
                  id="location"
                  className="form-select"
                >
                  <option value="">Choose a location</option>
                  {this.state.locations.map(location => {
                    return (
                      <option key={location.href} value={location.href}>
                        {location.closet_name} - {location.section_number} /
                        {location.shelf_number}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default HatsForm;
dsa
