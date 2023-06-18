'use client'
import { useState } from 'react';

const TableSearch = ({ survivors }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredData = survivors.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Rechercher..."
      />
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Boite</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.game}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableSearch;