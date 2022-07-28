import React from 'react'

function HatsList(props) {
  return (
    <>
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
          {props.hats.map(hat => {
            return (
              <tr key={hat.id}>
                <td><img src={hat.picture_url} alt={hat.style_name} width="300" /></td>
                <td>{hat.style_name}</td>
                <td>{hat.fabric}</td>
                <td>{hat.color}</td>
                <td>{hat.location.closet_name} - section {hat.location.section_number} / shelf {hat.location.shelf_number}</td>
                <td><button className="btn btn-primary" onClick={() => props.editHat(hat)}>Edit</button></td>
                <td><button className="btn btn-danger" onClick={() => props.deleteHat(hat)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
  )}
export default HatsList;