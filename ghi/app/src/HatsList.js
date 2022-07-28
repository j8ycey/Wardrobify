import React from "react";

class HatsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hats: []}

    this.deletehat = this.deletehat.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8090/api/hats/')
    if (response.ok) {
      const data = await response.json()
      this.setState({ hats: data.hats })
    }
  }

  async deletehat(hat) {
    const deleteUrl = `http://localhost:8080/api/hats/${hat.id}`
    const fetchConfig = {
      method: "delete"
    }
    await fetch(deleteUrl, fetchConfig)

    const idx = this.state.hats.indexOf(hat)
    const updated_hats = [...this.state.hats]
    updated_hats.splice(idx, 1)
    this.setState({ hats: updated_hats })
  }

  render() {
    return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>Style Name</th>
              <th>Fabric</th>
              <th>Color</th>
              <th>Location</th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.hats.map(hat => {
              return (
                <tr key={hat.id}>
                  <td><img src={hat.picture_url} width="300" /></td>
                  <td>{hat.style_name}</td>
                  <td>{hat.fabric}</td>
                  <td>{hat.color}</td>
                  <td>{hat.location.closet_name} - section {hat.location.section_number} / shelf {hat.location.shelf_number}</td>
                  <td><button className="btn btn-primary" onClick={() => this.edithat(hat)}>Edit</button></td>
                  <td><button className="btn btn-danger" onClick={() => this.deletehat(hat)}>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
    )
  }
}
  
export default HatsList